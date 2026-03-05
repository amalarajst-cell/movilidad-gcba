const fs = require('fs');
const file = 'c:/Users/HP07/Pictures/Downloads/Proyecto terminalidad sencundaria/index.html';
let content = fs.readFileSync(file, 'utf8');

const cssAddition = `
        .chapter-toggle {
            cursor: pointer;
            transition: opacity 0.2s;
        }
        .chapter-toggle:hover {
            opacity: 0.8;
        }
        .chapter-content-body {
            display: none;
            margin-top: 20px;
            animation: fadeIn 0.4s ease forwards;
            padding-top: 15px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        .chapter.active .chapter-content-body {
            display: block;
        }
        .card-arrow {
            transition: transform 0.3s ease;
            display: inline-block;
        }
        .chapter.active .card-arrow {
            transform: rotate(90deg);
        }
    </style>
`;
content = content.replace('    </style>', cssAddition);

const jsAddition = `
            const chapterDivs = document.querySelectorAll('.chapter');
            chapterDivs.forEach(chapter => {
                const toggle = chapter.querySelector('.chapter-toggle');
                if (toggle) {
                    toggle.addEventListener('click', () => {
                        chapter.classList.toggle('active');
                    });
                }
            });

            const openLoginBtn = document.getElementById('openLoginBtn');`;
content = content.replace("            const openLoginBtn = document.getElementById('openLoginBtn');", jsAddition);

for (let i = 1; i <= 5; i++) {
    content = content.replace(
        new RegExp(`(<div id="cap${i}" class="chapter">\\s*?)<div class="card-header">`),
        `$1<div class="chapter-toggle">\n                <div class="card-header">`
    );

    const titleRegex = new RegExp(`(<div id="cap${i}"[\\s\\S]*?<h2 class="card-title">.*?</h2>)`);
    content = content.replace(titleRegex, `$1\n                </div>\n                <div class="chapter-content-body">`);

    const endRegex = new RegExp(`(<div id="cap${i}"[\\s\\S]*?<span class="h5p-hint">[\\s\\S]*?</span>\\s*?)</div>`);
    content = content.replace(endRegex, `$1    </div>\n            </div>`);
}

fs.writeFileSync(file, content);
console.log('DOM transformation complete!');
