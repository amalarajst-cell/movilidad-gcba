$baseUrl = "https://unpkg.com/h5p-standalone@3.7.0/dist"
$jsDir = "js"
$cssDir = "css"

# Ensure directories exist
New-Item -ItemType Directory -Force -Path $jsDir | Out-Null
New-Item -ItemType Directory -Force -Path $cssDir | Out-Null

$files = @(
    @{ Url = "$baseUrl/main.bundle.js"; Dest = "$jsDir/h5p-main.bundle.js" },
    @{ Url = "$baseUrl/frame.bundle.js"; Dest = "$jsDir/h5p-frame.bundle.js" },
    @{ Url = "$baseUrl/styles/h5p.css"; Dest = "$cssDir/h5p.css" }
)

foreach ($file in $files) {
    Write-Host "Downloading $($file.Url)..."
    try {
        Invoke-WebRequest -Uri $file.Url -OutFile $file.Dest -UseBasicParsing
        Write-Host "Saved to $($file.Dest)"
    }
    catch {
        Write-Error "Failed to download $($file.Url): $_"
    }
}
