const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');
const mammoth = require('mammoth');

async function main() {
    const docUrl = process.argv[2];
    let outputPath = process.argv[3];

    if (!docUrl || !outputPath) {
        console.error("Usage: node fetch_doc.js <google_doc_url_or_id> <outputPath>");
        process.exit(1);
    }

    // Resolve output path to absolute
    outputPath = path.resolve(process.cwd(), outputPath);

    // Extract ID - supports full URL or plain document ID
    let documentId;
    const match = docUrl.match(/\/d\/([a-zA-Z0-9-_]+)/);
    if (match) {
        documentId = match[1];
    } else if (/^[a-zA-Z0-9-_]+$/.test(docUrl)) {
        documentId = docUrl;
    } else {
        console.error("Invalid input. Provide a Google Doc URL or a plain document ID.");
        process.exit(1);
    }

    const keyFile = process.env.GOOGLE_APPLICATION_CREDENTIALS || "C:\\Users\\HP07\\Documents\\mcp-drive-credentials.json";

    if (!fs.existsSync(keyFile)) {
        console.error(`Credentials file not found at: ${keyFile}`);
        process.exit(1);
    }

    const auth = new google.auth.GoogleAuth({
        keyFile: keyFile,
        scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    });

    const drive = google.drive({ version: 'v3', auth });

    console.log(`Fetching document ID: ${documentId}...`);

    // Strategy 1: Try exporting as plain text (works for native Google Docs)
    try {
        const response = await drive.files.export({
            fileId: documentId,
            mimeType: 'text/plain'
        });
        fs.writeFileSync(outputPath, response.data);
        console.log(`Success (native Google Doc): Saved to ${outputPath}`);
        return;
    } catch (e) {
        if (!e.message.includes('Export only supports Docs Editors files')) {
            console.error("Error:", e.message);
            process.exit(1);
        }
        console.log("File is not a native Google Doc, downloading as binary...");
    }

    // Strategy 2: Download raw file (works for uploaded .docx, .pdf, etc.)
    try {
        const response = await drive.files.get(
            { fileId: documentId, alt: 'media' },
            { responseType: 'arraybuffer' }
        );
        const buffer = Buffer.from(response.data);

        // Try to convert with mammoth (works for .docx files)
        try {
            const result = await mammoth.extractRawText({ buffer: buffer });
            fs.writeFileSync(outputPath, result.value);
            console.log(`Success (converted .docx): Saved to ${outputPath}`);
        } catch (convErr) {
            // If mammoth fails, save the raw file
            const rawPath = outputPath.replace(/\.txt$/, '.docx');
            fs.writeFileSync(rawPath, buffer);
            console.log(`Could not convert to text. Raw file saved to ${rawPath}`);
        }
    } catch (e) {
        console.error("Error downloading file:", e.message);
        process.exit(1);
    }
}

main();

