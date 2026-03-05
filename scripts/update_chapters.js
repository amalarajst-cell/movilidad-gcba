const fs = require('fs');
const path = require('path');

const filePath = 'c:/Users/HP07/Pictures/Downloads/Proyecto terminalidad sencundaria/index.html';
let content = fs.readFileSync(filePath, 'utf8');

// Find and replace all chapter links
content = content.replace(
    /<a href="index_bundled\.html\?cap=(cap\d+)" target="_blank" class="chapter-toggle"/g,
    '<a href="javascript:void(0)" onclick="openActivityModal(\'index_bundled.html?cap=$1\')" class="chapter-toggle"'
);

fs.writeFileSync(filePath, content);
console.log('Chapters converted to modal links successfully!');
