---
name: fetch_google_doc
description: Automates downloading plain text from any Google Doc using Google SDK and existing credentials.
---

# fetch_google_doc

This skill allows downloading the plain text content of any Google Doc using the Google Docs API.

## Prerequisites
- Node.js installed on the system.
- Valid Google Cloud Service Account credentials saved at `C:\Users\HP07\Documents\mcp-drive-credentials.json` (or set the `GOOGLE_APPLICATION_CREDENTIALS` environment variable).
- The document must be accessible by the service account or be publicly readable, depending on the credential scopes configured.

## Usage Guide
Navigate to the skill's scripts directory and run the `fetch_doc.js` script with the URL of the Google Doc and the desired output path.

```bash
cd .agents/skills/google_docs/scripts
node fetch_doc.js "<GOOGLE_DOC_URL>" "<OUTPUT_FILE_PATH>"
```

### Examples
To download a document and save it in the root of the project:
```bash
node fetch_doc.js "https://docs.google.com/document/d/1ewnApXjcEouiZGenEduRY4kUfO87hKL3/edit" "../../my_document.txt"
```

## How It Works
1. Runs `fetch_doc.js` using the local Node environment.
2. The script extracts the document ID from the standard `https://docs.google.com/document/d/...` URL format.
3. Authenticates via the local `mcp-drive-credentials.json` key file.
4. Uses `google.docs('v1').documents.get` to read the document elements.
5. Iterates through the document's structure, extracts paragraph tokens and table contents, and writes them cleanly to the specified `.txt` file.
