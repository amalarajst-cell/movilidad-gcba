const fs = require('fs');
const file = 'c:/Users/HP07/Pictures/Downloads/Proyecto terminalidad sencundaria/index.html';
let content = fs.readFileSync(file, 'utf8');

// 1. Convert <div class="chapter-toggle"> to <a class="chapter-toggle">
content = content.replace(/<div id="(cap\d+)" class="chapter">\s*<div class="chapter-toggle">/g,
    `<div id="$1" class="chapter">\n                <a href="index_bundled.html?cap=$1" target="_blank" class="chapter-toggle" style="text-decoration:none; color:inherit; display:block;">`);

content = content.replace(/<\/h2>\s*<\/div>\s*<div class="chapter-content-body">/g,
    `</h2>\n                </a>\n                <div class="chapter-content-body">`);

// 2. Add CSS for chapter-view-mode
const cssAdd = `
        /* Single Chapter View Mode Styles */
        html.chapter-view-mode .hero,
        html.chapter-view-mode .toc,
        html.chapter-view-mode .chapter {
            display: none !important;
        }
        html.chapter-view-mode .chapter.active-view {
            display: block !important;
        }
        html.chapter-view-mode .chapter.active-view .chapter-content-body {
            display: block !important;
            animation: none;
        }
        html.chapter-view-mode .chapter.active-view .card-arrow {
            display: none !important;
        }
        html.chapter-view-mode .chapter.active-view .chapter-toggle {
            pointer-events: none;
            cursor: default;
        }
        html.chapter-view-mode .main-content {
            padding-top: 40px;
        }
    </style>`;
content = content.replace(/<\/style>/g, cssAdd);

// 3. Add JS for chapter-view-mode right after <head>
const jsHeadAdd = `<head>
    <script>
        const urlParams = new URLSearchParams(window.location.search);
        const showCap = urlParams.get('cap');
        if (showCap) {
            document.documentElement.classList.add('chapter-view-mode');
            document.addEventListener('DOMContentLoaded', () => {
                const targetCap = document.getElementById(showCap);
                if (targetCap) {
                    targetCap.classList.add('active-view');
                }
            });
        }
    </script>`;
content = content.replace(/<head>/g, jsHeadAdd);

// 4. Remove the old accordion JS logic
const accordionJsRegex = /const chapterDivs = document\.querySelectorAll\('\.chapter'\);[\s\S]*?\}\);[\s\S]*?\}\);/m;
content = content.replace(accordionJsRegex, '');

fs.writeFileSync(file, content);
console.log('DOM transformation to links complete!');
