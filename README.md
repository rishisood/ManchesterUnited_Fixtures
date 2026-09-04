# Manchester United Fixtures

A static web application for tracking Manchester United fixtures across the 2026/27 season.

## Features

- Manchester United-only fixture view for home and away matches.
- Premier League fixture data seeded from the Premier League/Pulse fixture feed.
- Live fixture refresh on page load, plus a manual `Refresh fixtures` button.
- Daily cached data refresh so repeat visits load quickly while still checking live data once per day.
- Competition filters for Premier League, UEFA Champions League, FA Cup, and EFL Cup.
- Venue filters for all fixtures, home fixtures, and away fixtures.
- Month filters generated from the fixture dates.
- Completed-match toggle that hides finished matches by default and shows results on demand.
- Service-worker caching for app assets, crests, logos, and player photos.
- IST kickoff times.
- Club crests for Manchester United and opponents.
- OTT/watch badges by competition, including JioHotstar, SonyLIV, FanCode, and TBC where rights are uncertain.
- Match cards with score slots, venue, round, scorers, assists, and completion status.
- Dashboard view with:
  - Premier League table linked to the official Premier League table.
  - Manchester United highlighted in the table.
  - Weekly Manchester United league-position line chart.
  - Final chart point shown as a Manchester United crest.
  - Highest scorer and highest assister cards with player photos when available.

## Files

- `index.html` - application markup.
- `styles.css` - responsive styling and dashboard layout.
- `app.js` - fixture data, refresh logic, filters, dashboard rendering, and API normalization.
- `netlify/functions/pl-api.js` - serverless proxy used to refresh Premier League/Pulse data without browser CORS blocks.
- `netlify/functions/ucl-api.js` - serverless proxy used to refresh Champions League fixtures, standings, qualified teams, and crests from football-data.org.
- `netlify.toml` - Netlify deployment config.
- `restore-pre-*.ps1` - local rollback scripts from development checkpoints.

## Running Locally

Open `index.html` directly in a browser, or serve the folder with any static file server.

Example:

```powershell
python -m http.server 5174 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:5174/
```

When run as a plain static site, the app still opens and uses the seeded fixture data. Live refresh needs the serverless proxy because the Premier League/Pulse API does not allow browser requests from local or GitHub Pages origins.

## Deployment

GitHub Pages can host the static app, but it cannot run the refresh proxy. On GitHub Pages the page will load normally and fall back to seeded fixtures when live refresh is blocked.

For a free deployment where live refresh works, use Netlify:

1. Push this repo to GitHub.
2. In Netlify, create a new site from the GitHub repo.
3. Keep the publish directory as `.` and functions directory as `netlify/functions`.
4. Deploy.

The app automatically calls `/.netlify/functions/pl-api` before attempting the direct Premier League/Pulse API request. Champions League refresh uses `/.netlify/functions/ucl-api` and needs this Netlify environment variable:

```text
FOOTBALL_DATA_TOKEN=your_football_data_org_token
```

## Rollback

To undo the proxy-refresh changes locally, run:

```powershell
.\restore-pre-proxy-refresh.ps1
```

## Data Sources

- Premier League/Pulse fixtures API.
- Premier League/Pulse standings API.
- Premier League/Pulse ranked player stats APIs.
- football-data.org Champions League matches, standings, teams, and crest URLs.
- Premier League crest and player-image CDN where available.

Some tournament fixtures, scorers, assists, and player stats only appear once those feeds publish the relevant data.

## Daily Cache Rollback

If the daily cache behavior causes production issues, revert the cache commit on `dev` and redeploy from the previous working commit:

```powershell
git revert <daily-cache-commit-sha>
git push origin dev
```

The earlier pre-season/mobile-polish commit is intentionally separate, so this rollback removes only the cache/service-worker layer.
