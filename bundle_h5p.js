const fs = require('fs');
const path = require('path');

const basePath = process.cwd();
const indexHtmlPath = path.join(basePath, 'index.html');
const bundledHtmlPath = path.join(basePath, 'index_bundled.html');

console.log('--- STARTING H5P BUNDLER (BLOB URL STRATEGY) ---');

// 1. Read index.html
let html = fs.readFileSync(indexHtmlPath, 'utf8');

// 2. Read all chapter data
const chapters = ['cap1', 'cap2', 'cap3', 'cap4', 'cap5'];
let allScripts = [];
let allStyles = [];

// Helper to escape JSON for JS string
function escapeForString(str) {
    return str.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n').replace(/\r/g, '');
}

// 3. Collect all scripts/styles
chapters.forEach(cap => {
    const dataPath = path.join(basePath, 'js', `h5p-data-${cap}.js`);
    if (fs.existsSync(dataPath)) {
        const content = fs.readFileSync(dataPath, 'utf8');
        const match = content.match(/window\.h5pExternalData\['.*?'\]\s*=\s*(\{[\s\S]*?\});/);
        if (match && match[1]) {
            try {
                const mockWindow = { h5pExternalData: {} };
                new Function('window', content)(mockWindow);
                const data = mockWindow.h5pExternalData[cap];
                if (data) {
                    if (data.libraryScripts) allScripts.push(...data.libraryScripts);
                    if (data.libraryStyles) allStyles.push(...data.libraryStyles);
                }
            } catch (e) {
                console.error(`Error parsing data for ${cap}:`, e.message);
            }
        }
    }
});

allScripts.unshift('js/h5p-frame.bundle.js', 'js/h5p-main.bundle.js');
allStyles.unshift('css/h5p.css');

allScripts = [...new Set(allScripts)];
allStyles = [...new Set(allStyles)];

console.log(`Found ${allScripts.length} unique scripts and ${allStyles.length} unique styles.`);

// 4. Build JS Object with content
let bundledResources = {
    scripts: {},
    styles: {}
};

console.log('Reading Styles...');
allStyles.forEach(stylePath => {
    const fullPath = path.join(basePath, stylePath);
    if (fs.existsSync(fullPath)) {
        let content = fs.readFileSync(fullPath, 'utf8');
        // Rewrite URLs
        const styleDir = path.dirname(stylePath);
        content = content.replace(/url\((['"]?)(.*?)(['"]?)\)/g, (match, quote, url, quote2) => {
            if (url.startsWith('data:') || url.startsWith('http')) return match;
            let [cleanUrl, suffix] = url.split(/[?#]/, 2);
            suffix = url.substring(cleanUrl.length);
            let resolved = path.join(styleDir, cleanUrl).replace(/\\/g, '/');
            return `url(${quote}${resolved}${suffix}${quote2})`;
        });
        bundledResources.styles[stylePath] = content;
    }
});

console.log('Reading Scripts...');
allScripts.forEach(scriptPath => {
    const fullPath = path.join(basePath, scriptPath);
    if (fs.existsSync(fullPath)) {
        let content = fs.readFileSync(fullPath, 'utf8');
        bundledResources.scripts[scriptPath] = content;
    }
});

// 5. Inject Logic
// We need to inject the `bundledResources` object into the HTML.
// And override `openH5P` to use Blob URLs managed by a `ResourceManager`.

const resourceManagerScript = `
    /* H5P RESOURCE MANAGER (BUNDLED) */
    window.H5PResourceManager = {
        scripts: ${JSON.stringify(bundledResources.scripts)},
        styles: ${JSON.stringify(bundledResources.styles)},
        blobCache: {},
        
        getUrl: function(path, type) {
            if (this.blobCache[path]) return this.blobCache[path];
            
            let content = (type === 'script') ? this.scripts[path] : this.styles[path];
            if (!content) {
                console.warn('Resource not found in bundle:', path);
                return path; // Fallback to original path
            }
            
            let mime = (type === 'script') ? 'text/javascript' : 'text/css';
            let blob = new Blob([content], {type: mime});
            let url = URL.createObjectURL(blob);
            this.blobCache[path] = url;
            return url;
        }
    };
    
    // OVERRIDE FOR SINGLE-FILE COMPATIBILITY
    
    // Override loadScriptsSequential to do nothing (scripts are passed to H5PIntegration)
    function loadScriptsSequential(scripts) {
        return Promise.resolve(); 
    }
    
    function loadStylesheets(styles) {
        // We load styles via Blob URL injection into head
        styles.forEach(function(path) {
            let url = window.H5PResourceManager.getUrl(path, 'style');
            let link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = url;
            document.head.appendChild(link);
        });
    }

    // INTERCEPT H5PIntegration CONFIGURATION
    // We need to modify "openH5P" logic. Since we cannot easily rewrite the function body with regex safely,
    // we will inject a "Proxy" logic that modifies data BEFORE openH5P uses it?
    // No, openH5P constructs the config inside.
    
    // FASTEST WAY: Redefine openH5P entirely.
    
    function openH5P(chapterId) {
         document.querySelector('.container').style.display = 'none';
        var modal = document.getElementById('h5p-modal');
        modal.style.display = 'block';

        var el = document.getElementById('h5p-content');
        el.innerHTML = '<div style="text-align:center; padding:40px; font-size:1.2rem; color:#1D3557;">\\u23F3 Cargando contenido interactivo...</div>';

        var data = window.h5pExternalData && window.h5pExternalData[chapterId];
        if (!data) {
            el.innerHTML = '<p style="color:red">Error: No data for ' + chapterId + '</p>';
            return;
        }

        // 1. Convert paths to Blob URLs
        var baseUrl = ''; // Empty base URL for Blob context
        
        // Transform library scripts/styles to Blob URLs
        var blobScriptPaths = [];
        
        // core scripts
        // We must include h5p-frame.bundle.js here
        var frameJsUrl = window.H5PResourceManager.getUrl('js/h5p-frame.bundle.js', 'script');
        var mainJsUrl = window.H5PResourceManager.getUrl('js/h5p-main.bundle.js', 'script');
        var coreCssUrl = window.H5PResourceManager.getUrl('css/h5p.css', 'style');
        
        // library scripts
        (data.libraryScripts || []).forEach(function(p) {
            blobScriptPaths.push(window.H5PResourceManager.getUrl(p, 'script'));
        });
        
        // library styles
        var blobStylePaths = [];
        (data.libraryStyles || []).forEach(function(p) {
            blobStylePaths.push(window.H5PResourceManager.getUrl(p, 'style'));
        });
        
        // Load Styles for Main Page (Modal)
        blobStylePaths.forEach(function(url) {
            var link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = url;
            document.head.appendChild(link);
        });
        // Also core css
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = coreCssUrl;
        document.head.appendChild(link);

        
        var contentId = chapterId.replace('cap', '');
        
        // Name main lib
        var mainLib = data.h5pJson.mainLibrary || 'H5P.InteractiveBook';
        var mainDep = (data.h5pJson.preloadedDependencies || []).find(function (d) {
            return d.machineName === mainLib;
        });
        var libString = mainLib + ' ' + (mainDep ? (mainDep.majorVersion || '1') + '.' + (mainDep.minorVersion || '0') : '1.0');

        // Config H5PIntegration
        window.H5PIntegration = {
            baseUrl: baseUrl,
            url: baseUrl,
            postUserStatistics: false,
            ajax: { setFinished: '', contentUserData: '' },
            saveFreq: false,
            l10n: {
                H5P: {
                    fullscreen: 'Pantalla completa', disableFullscreen: 'Salir de pantalla completa',
                    download: 'Descargar', copyrights: 'Derechos de uso', embed: 'Incrustar',
                    close: 'Cerrar', title: 'Titulo', confirmDialogHeader: 'Confirmar',
                    confirmDialogBody: 'Confirma que deseas continuar.',
                    cancelLabel: 'Cancelar', confirmLabel: 'Confirmar',
                    contentChanged: 'Este contenido ha cambiado.', startingOver: 'Empezaras de nuevo.'
                }
            },
            core: {
                styles: [coreCssUrl],
                scripts: [frameJsUrl, mainJsUrl]
            },
            contents: {}
        };
        
        window.H5PIntegration.contents['cid-' + contentId] = {
            library: libString,
            jsonContent: JSON.stringify(data.contentJson),
            fullScreen: false, exportUrl: '', embedCode: '', resizeCode: '',
            url: baseUrl,
            contentUrl: baseUrl, 
            metadata: { title: data.h5pJson.title || 'Contenido', license: 'U' },
            displayOptions: { frame: false, export: false, embed: false, copyright: false, icon: false, copy: false },
            styles: blobStylePaths,
            scripts: blobScriptPaths
        };
        
        // Clear instances
        if (window.H5P && window.H5P.instances) {
            window.H5P.instances = [];
        }
        
        // Create iframe wrapper
        el.innerHTML = '';
        var wrapper = document.createElement('div');
        wrapper.classList.add('h5p-iframe-wrapper');
        wrapper.style.backgroundColor = '#DDD';
        
        // In this mode, H5P.init(el) creates the iframe internally?
        // No, H5P.init finds divs with .h5p-content and cid.
        // But usually H5P expects to create the iframe itself if it detects it needs one?
        // Actually, existing H5P.init expects a surrounding div.
        
        // NOTE: Standard H5P loading creates an iframe that loads "embed.php" or similar.
        // H5PStandalone usually injects content directly or creates an iframe.
        // Our previous approach used H5P.init(el) on a DIV.
        // H5P.init looks for arguments.
        
        // If we use H5P-Core (h5p.js), H5P.init() scans for .h5p-content.
        
        var h5pDiv = document.createElement('div');
        h5pDiv.classList.add('h5p-content');
        h5pDiv.setAttribute('data-content-id', contentId);
        wrapper.appendChild(h5pDiv);
        el.appendChild(wrapper);
        
        // POLYFILL INJECTION FOR IFRAME (if H5P creates one)
        // H5P.init() usually runs in the MAIN window and sets up the iframe.
        // The iframe will need to load 'frameJsUrl'.
        // Check: H5P.init() logic.
        
        // CRITICAL: H5P.init() will try to append scripts to the iframe's head.
        // Since we provided Blob URLs in H5PIntegration.core.scripts and contents.scripts,
        // it SHOULD work.
        
        console.log('Initializing H5P with Blob URLs...');
        
        // We need to load 'h5p-frame.bundle.js' in the MAIN window too?
        // No, H5P-Core logic is usually split.
        // But H5P.init IS defined in h5p.js (which IS h5p-frame.bundle.js usually).
        // So we MUST load h5p-frame.bundle.js in the main window for H5P.init to exist!
        
        // Load Core JS in Main Window
        var scriptFn = function(src) {
            return new Promise(function(resolve, reject) {
                var s = document.createElement('script');
                s.src = src;
                s.onload = resolve;
                s.onerror = reject;
                document.body.appendChild(s);
            });
        };

        Promise.all([scriptFn(frameJsUrl), scriptFn(mainJsUrl)]).then(function() {
             if (window.H5P && window.H5P.init) {
                H5P.init(el);
             } else {
                console.error('H5P.init not found after loading bundles');
             }
        });
        
        window.scrollTo(0,0);
    }
`;

// 6. Inject Script into HTML
// Replace existing script block or append?
// We'll append the manager at the end of body.
// And we overwrite openH5P by redefining it AFTER the original definition.

html = html.replace('</body>', `<script>${resourceManagerScript}</script></body>`);

// 7. Write bundled file
fs.writeFileSync(bundledHtmlPath, html, 'utf8');
console.log(`Successfully created ${bundledHtmlPath}`);
console.log(`Size: ${(fs.statSync(bundledHtmlPath).size / 1024 / 1024).toFixed(2)} MB`);
