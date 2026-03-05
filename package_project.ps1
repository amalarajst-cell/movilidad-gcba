$dist = "dist"
$zipFile = "Manual_Seguridad_Vial_Entregable.zip"

Write-Host "Preparing distribution folder..."
if (Test-Path $dist) { Remove-Item $dist -Recurse -Force }
New-Item -ItemType Directory -Path $dist | Out-Null

Write-Host "Copying files..."
Copy-Item "index.html" -Destination $dist
if (Test-Path "css") { Copy-Item "css" -Destination $dist -Recurse }
if (Test-Path "js") { Copy-Item "js" -Destination $dist -Recurse }
if (Test-Path "data") { Copy-Item "data" -Destination $dist -Recurse }
if (Test-Path "hero_bg.png") { Copy-Item "hero_bg.png" -Destination $dist }
Copy-Item "h5p_capitulo*" -Destination $dist -Recurse

Write-Host "Creating zip archive..."
if (Test-Path $zipFile) { Remove-Item $zipFile -Force }

Add-Type -AssemblyName System.IO.Compression.FileSystem
$compressionLevel = [System.IO.Compression.CompressionLevel]::Optimal
[System.IO.Compression.ZipFile]::CreateFromDirectory((Resolve-Path $dist).Path, (Join-Path (Get-Location) $zipFile), $compressionLevel, $false)

Write-Host "Success: $zipFile created."
