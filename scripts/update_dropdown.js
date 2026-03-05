const fs = require('fs');
const file = 'c:/Users/HP07/Pictures/Downloads/Proyecto terminalidad sencundaria/index.html';
let content = fs.readFileSync(file, 'utf8');

const regex = /<div class="nav-dropdown" id="modulosDropdown">[\s\S]*?<\/div>/;
const newDropdown = `<div class="nav-dropdown" id="modulosDropdown">
                <ul>
                    <li><a href="https://amalarajst-cell.github.io/formacion-vial-extreme/#/introduccion" target="_blank" class="dropdown-link">INTRODUCCIÓN</a></li>
                    <li><a href="https://amalarajst-cell.github.io/formacion-vial-extreme/#/senales" target="_blank" class="dropdown-link">SEÑALES DE TRÁNSITO</a></li>
                    <li><a href="https://amalarajst-cell.github.io/formacion-vial-extreme/#/prioridades" target="_blank" class="dropdown-link">PRIORIDADES DE PASO</a></li>
                </ul>
            </div>`;

content = content.replace(regex, newDropdown);
fs.writeFileSync(file, content);
console.log('Dropdown updated successfully!');
