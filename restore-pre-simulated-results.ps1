$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
$Snapshot = Join-Path $Root "snapshots\pre-simulated-results"

if (-not (Test-Path $Snapshot)) {
  throw "Snapshot not found: $Snapshot"
}

Copy-Item -LiteralPath (Join-Path $Snapshot "index.html") -Destination (Join-Path $Root "index.html") -Force
Copy-Item -LiteralPath (Join-Path $Snapshot "styles.css") -Destination (Join-Path $Root "styles.css") -Force
Copy-Item -LiteralPath (Join-Path $Snapshot "app.js") -Destination (Join-Path $Root "app.js") -Force

Write-Output "Restored the version before simulated results."
