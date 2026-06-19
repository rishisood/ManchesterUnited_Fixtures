Copy-Item -Path .\snapshots\pre-proxy-refresh\app.js -Destination .\app.js -Force
Copy-Item -Path .\snapshots\pre-proxy-refresh\README.md -Destination .\README.md -Force
Remove-Item -LiteralPath .\netlify.toml -Force -ErrorAction SilentlyContinue
Remove-Item -LiteralPath .\netlify\functions\pl-api.js -Force -ErrorAction SilentlyContinue
Remove-Item -LiteralPath .\netlify\functions -Force -ErrorAction SilentlyContinue
Remove-Item -LiteralPath .\netlify -Force -ErrorAction SilentlyContinue
Write-Host "Restored the app to the pre-proxy-refresh version."
