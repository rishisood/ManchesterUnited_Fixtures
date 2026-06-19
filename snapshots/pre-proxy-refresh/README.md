# Manchester United Fixtures

A static web application for tracking Manchester United fixtures across the 2026/27 season.

## Features

- Manchester United-only fixture view for home and away matches.
- Premier League fixture data seeded from the Premier League/Pulse fixture feed.
- Live fixture refresh on page load, plus a manual `Refresh fixtures` button.
- Competition filters for Premier League, UEFA Champions League, FA Cup, and EFL Cup.
- Venue filters for all fixtures, home fixtures, and away fixtures.
- Month filters generated from the fixture dates.
- Completed-match toggle that hides finished matches by default and shows results on demand.
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

## Data Sources

- Premier League/Pulse fixtures API.
- Premier League/Pulse standings API.
- Premier League/Pulse ranked player stats APIs.
- Premier League crest and player-image CDN where available.

Some tournament fixtures, scorers, assists, and player stats only appear once those feeds publish the relevant data.
