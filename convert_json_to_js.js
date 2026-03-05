const fs = require('fs');
const path = require('path');

const chapters = [
    { id: 'cap1', folder: 'h5p_capitulo1' },
    { id: 'cap2', folder: 'h5p_capitulo2' },
    { id: 'cap3', folder: 'h5p_capitulo3' },
    { id: 'cap4', folder: 'h5p_capitulo4' },
    { id: 'cap5', folder: 'h5p_capitulo5' }
];

const jsDir = path.join(__dirname, 'js');
if (!fs.existsSync(jsDir)) {
    fs.mkdirSync(jsDir);
}

chapters.forEach(cap => {
    try {
        const h5pPath = path.join(__dirname, cap.folder, 'h5p.json');
        const contentPath = path.join(__dirname, cap.folder, 'content', 'content.json');

        if (fs.existsSync(h5pPath) && fs.existsSync(contentPath)) {
            const h5pJson = fs.readFileSync(h5pPath, 'utf8');
            const contentJson = fs.readFileSync(contentPath, 'utf8');

            const jsContent = `window.h5pExternalData = window.h5pExternalData || {};
window.h5pExternalData['${cap.id}'] = {
    h5pJson: ${h5pJson},
    contentJson: ${contentJson}
};`;

            const outputPath = path.join(jsDir, `h5p-data-${cap.id}.js`);
            fs.writeFileSync(outputPath, jsContent);
            console.log(`Created ${outputPath}`);
        } else {
            console.error(`Missing files for ${cap.id}`);
        }
    } catch (err) {
        console.error(`Error processing ${cap.id}:`, err);
    }
});
