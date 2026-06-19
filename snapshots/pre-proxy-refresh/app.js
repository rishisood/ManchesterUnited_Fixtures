const UNITED = {
  id: 12,
  name: "Manchester United",
  shortName: "Man Utd",
  abbr: "MUN",
  opta: "t1",
};

const COMPETITIONS = [
  {
    name: "Premier League",
    id: 1,
    seasonId: 841,
    seeded: true,
    source: "Premier League official fixture API",
  },
  {
    name: "UEFA Champions League",
    id: 2,
    seasonLabelHint: "2026",
    seeded: false,
    source: "Premier League/Pulse competition feed",
  },
  {
    name: "FA Cup",
    id: 4,
    seasonLabelHint: "2026",
    seeded: false,
    source: "Premier League/Pulse competition feed",
  },
  {
    name: "EFL Cup",
    id: 5,
    seasonLabelHint: "2026",
    seeded: false,
    source: "Premier League/Pulse competition feed",
  },
];

const SEEDED_FIXTURES = [
  { id: 128926, matchweek: 1, date: "Sat 22 Aug 2026, 12:30 BST", timestamp: 1787398200000, home: "Hull City", away: "Manchester United", opponent: "Hull City", opponentShort: "Hull", opponentAbbr: "HUL", opponentId: 41, opponentOpta: "t88", venue: "MKM Stadium", city: "Hull", homeAway: "away", competition: "Premier League", competitionId: 1, seasonId: 841 },
  { id: 128940, matchweek: 2, date: "Sat 29 Aug 2026, 15:00 BST", timestamp: 1788012000000, home: "Manchester United", away: "Ipswich Town", opponent: "Ipswich Town", opponentShort: "Ipswich", opponentAbbr: "IPS", opponentId: 8, opponentOpta: "t40", venue: "Old Trafford", city: "Manchester", homeAway: "home", competition: "Premier League", competitionId: 1, seasonId: 841 },
  { id: 128946, matchweek: 3, date: "Sat 5 Sep 2026, 15:00 BST", timestamp: 1788616800000, home: "Everton", away: "Manchester United", opponent: "Everton", opponentShort: "Everton", opponentAbbr: "EVE", opponentId: 7, opponentOpta: "t11", venue: "Hill Dickinson Stadium", city: "Liverpool", homeAway: "away", competition: "Premier League", competitionId: 1, seasonId: 841 },
  { id: 128960, matchweek: 4, date: "Sat 12 Sep 2026, 15:00 BST", timestamp: 1789221600000, home: "Manchester United", away: "Manchester City", opponent: "Manchester City", opponentShort: "Man City", opponentAbbr: "MCI", opponentId: 11, opponentOpta: "t43", venue: "Old Trafford", city: "Manchester", homeAway: "home", competition: "Premier League", competitionId: 1, seasonId: 841 },
  { id: 128967, matchweek: 5, date: "Sat 19 Sep 2026, 15:00 BST", timestamp: 1789826400000, home: "Fulham", away: "Manchester United", opponent: "Fulham", opponentShort: "Fulham", opponentAbbr: "FUL", opponentId: 34, opponentOpta: "t54", venue: "Craven Cottage", city: "London", homeAway: "away", competition: "Premier League", competitionId: 1, seasonId: 841 },
  { id: 128981, matchweek: 6, date: "Sat 10 Oct 2026, 15:00 BST", timestamp: 1791640800000, home: "Manchester United", away: "Tottenham Hotspur", opponent: "Tottenham Hotspur", opponentShort: "Spurs", opponentAbbr: "TOT", opponentId: 21, opponentOpta: "t6", venue: "Old Trafford", city: "Manchester", homeAway: "home", competition: "Premier League", competitionId: 1, seasonId: 841 },
  { id: 128988, matchweek: 7, date: "Sat 17 Oct 2026, 15:00 BST", timestamp: 1792245600000, home: "Leeds United", away: "Manchester United", opponent: "Leeds United", opponentShort: "Leeds", opponentAbbr: "LEE", opponentId: 9, opponentOpta: "t2", venue: "Elland Road", city: "Leeds", homeAway: "away", competition: "Premier League", competitionId: 1, seasonId: 841 },
  { id: 129001, matchweek: 8, date: "Sat 24 Oct 2026, 15:00 BST", timestamp: 1792850400000, home: "Manchester United", away: "Bournemouth", opponent: "Bournemouth", opponentShort: "Bournemouth", opponentAbbr: "BOU", opponentId: 127, opponentOpta: "t91", venue: "Old Trafford", city: "Manchester", homeAway: "home", competition: "Premier League", competitionId: 1, seasonId: 841 },
  { id: 129006, matchweek: 9, date: "Sat 31 Oct 2026, 15:00 GMT", timestamp: 1793458800000, home: "Chelsea", away: "Manchester United", opponent: "Chelsea", opponentShort: "Chelsea", opponentAbbr: "CHE", opponentId: 4, opponentOpta: "t8", venue: "Stamford Bridge", city: "London", homeAway: "away", competition: "Premier League", competitionId: 1, seasonId: 841 },
  { id: 129020, matchweek: 10, date: "Sat 7 Nov 2026, 15:00 GMT", timestamp: 1794063600000, home: "Manchester United", away: "Aston Villa", opponent: "Aston Villa", opponentShort: "Aston Villa", opponentAbbr: "AVL", opponentId: 2, opponentOpta: "t7", venue: "Old Trafford", city: "Manchester", homeAway: "home", competition: "Premier League", competitionId: 1, seasonId: 841 },
  { id: 129029, matchweek: 11, date: "Sat 21 Nov 2026, 15:00 GMT", timestamp: 1795273200000, home: "Liverpool", away: "Manchester United", opponent: "Liverpool", opponentShort: "Liverpool", opponentAbbr: "LIV", opponentId: 10, opponentOpta: "t14", venue: "Anfield", city: "Liverpool", homeAway: "away", competition: "Premier League", competitionId: 1, seasonId: 841 },
  { id: 129040, matchweek: 12, date: "Sat 28 Nov 2026, 15:00 GMT", timestamp: 1795878000000, home: "Manchester United", away: "Brentford", opponent: "Brentford", opponentShort: "Brentford", opponentAbbr: "BRE", opponentId: 130, opponentOpta: "t94", venue: "Old Trafford", city: "Manchester", homeAway: "home", competition: "Premier League", competitionId: 1, seasonId: 841 },
  { id: 129051, matchweek: 13, date: "Wed 2 Dec 2026, 20:00 GMT", timestamp: 1796241600000, home: "Newcastle United", away: "Manchester United", opponent: "Newcastle United", opponentShort: "Newcastle", opponentAbbr: "NEW", opponentId: 23, opponentOpta: "t4", venue: "St. James' Park", city: "Newcastle", homeAway: "away", competition: "Premier League", competitionId: 1, seasonId: 841 },
  { id: 129059, matchweek: 14, date: "Sat 5 Dec 2026, 15:00 GMT", timestamp: 1796482800000, home: "Manchester United", away: "Coventry City", opponent: "Coventry City", opponentShort: "Coventry", opponentAbbr: "COV", opponentId: 5, opponentOpta: "t9", venue: "Old Trafford", city: "Manchester", homeAway: "home", competition: "Premier League", competitionId: 1, seasonId: 841 },
  { id: 129066, matchweek: 15, date: "Sat 12 Dec 2026, 15:00 GMT", timestamp: 1797087600000, home: "Crystal Palace", away: "Manchester United", opponent: "Crystal Palace", opponentShort: "Crystal Palace", opponentAbbr: "CRY", opponentId: 6, opponentOpta: "t31", venue: "Selhurst Park", city: "London", homeAway: "away", competition: "Premier League", competitionId: 1, seasonId: 841 },
  { id: 129073, matchweek: 16, date: "Sat 19 Dec 2026, 15:00 GMT", timestamp: 1797692400000, home: "Arsenal", away: "Manchester United", opponent: "Arsenal", opponentShort: "Arsenal", opponentAbbr: "ARS", opponentId: 1, opponentOpta: "t3", venue: "Emirates Stadium", city: "London", homeAway: "away", competition: "Premier League", competitionId: 1, seasonId: 841 },
  { id: 129090, matchweek: 17, date: "Sat 26 Dec 2026, 15:00 GMT", timestamp: 1798297200000, home: "Manchester United", away: "Nottingham Forest", opponent: "Nottingham Forest", opponentShort: "Nott'm Forest", opponentAbbr: "NFO", opponentId: 15, opponentOpta: "t17", venue: "Old Trafford", city: "Manchester", homeAway: "home", competition: "Premier League", competitionId: 1, seasonId: 841 },
  { id: 129100, matchweek: 18, date: "Wed 30 Dec 2026, 20:00 GMT", timestamp: 1798660800000, home: "Manchester United", away: "Sunderland", opponent: "Sunderland", opponentShort: "Sunderland", opponentAbbr: "SUN", opponentId: 29, opponentOpta: "t56", venue: "Old Trafford", city: "Manchester", homeAway: "home", competition: "Premier League", competitionId: 1, seasonId: 841 },
  { id: 129106, matchweek: 19, date: "Sat 2 Jan 2027, 15:00 GMT", timestamp: 1798902000000, home: "Brighton & Hove Albion", away: "Manchester United", opponent: "Brighton & Hove Albion", opponentShort: "Brighton", opponentAbbr: "BHA", opponentId: 131, opponentOpta: "t36", venue: "American Express Stadium", city: "Falmer", homeAway: "away", competition: "Premier League", competitionId: 1, seasonId: 841 },
  { id: 129120, matchweek: 20, date: "Wed 6 Jan 2027, 20:00 GMT", timestamp: 1799265600000, home: "Manchester United", away: "Newcastle United", opponent: "Newcastle United", opponentShort: "Newcastle", opponentAbbr: "NEW", opponentId: 23, opponentOpta: "t4", venue: "Old Trafford", city: "Manchester", homeAway: "home", competition: "Premier League", competitionId: 1, seasonId: 841 },
  { id: 129123, matchweek: 21, date: "Sat 16 Jan 2027, 15:00 GMT", timestamp: 1800111600000, home: "Aston Villa", away: "Manchester United", opponent: "Aston Villa", opponentShort: "Aston Villa", opponentAbbr: "AVL", opponentId: 2, opponentOpta: "t7", venue: "Villa Park", city: "Birmingham", homeAway: "away", competition: "Premier League", competitionId: 1, seasonId: 841 },
  { id: 129140, matchweek: 22, date: "Sat 23 Jan 2027, 15:00 GMT", timestamp: 1800716400000, home: "Manchester United", away: "Liverpool", opponent: "Liverpool", opponentShort: "Liverpool", opponentAbbr: "LIV", opponentId: 10, opponentOpta: "t14", venue: "Old Trafford", city: "Manchester", homeAway: "home", competition: "Premier League", competitionId: 1, seasonId: 841 },
  { id: 129145, matchweek: 23, date: "Sat 30 Jan 2027, 15:00 GMT", timestamp: 1801321200000, home: "Brentford", away: "Manchester United", opponent: "Brentford", opponentShort: "Brentford", opponentAbbr: "BRE", opponentId: 130, opponentOpta: "t94", venue: "Gtech Community Stadium", city: "Brentford", homeAway: "away", competition: "Premier League", competitionId: 1, seasonId: 841 },
  { id: 129160, matchweek: 24, date: "Sat 6 Feb 2027, 15:00 GMT", timestamp: 1801926000000, home: "Manchester United", away: "Chelsea", opponent: "Chelsea", opponentShort: "Chelsea", opponentAbbr: "CHE", opponentId: 4, opponentOpta: "t8", venue: "Old Trafford", city: "Manchester", homeAway: "home", competition: "Premier League", competitionId: 1, seasonId: 841 },
  { id: 129170, matchweek: 25, date: "Wed 10 Feb 2027, 20:00 GMT", timestamp: 1802289600000, home: "Manchester United", away: "Brighton & Hove Albion", opponent: "Brighton & Hove Albion", opponentShort: "Brighton", opponentAbbr: "BHA", opponentId: 131, opponentOpta: "t36", venue: "Old Trafford", city: "Manchester", homeAway: "home", competition: "Premier League", competitionId: 1, seasonId: 841 },
  { id: 129181, matchweek: 26, date: "Sat 20 Feb 2027, 15:00 GMT", timestamp: 1803135600000, home: "Nottingham Forest", away: "Manchester United", opponent: "Nottingham Forest", opponentShort: "Nott'm Forest", opponentAbbr: "NFO", opponentId: 15, opponentOpta: "t17", venue: "The City Ground", city: "Nottingham", homeAway: "away", competition: "Premier League", competitionId: 1, seasonId: 841 },
  { id: 129190, matchweek: 27, date: "Sat 27 Feb 2027, 15:00 GMT", timestamp: 1803740400000, home: "Manchester United", away: "Arsenal", opponent: "Arsenal", opponentShort: "Arsenal", opponentAbbr: "ARS", opponentId: 1, opponentOpta: "t3", venue: "Old Trafford", city: "Manchester", homeAway: "home", competition: "Premier League", competitionId: 1, seasonId: 841 },
  { id: 129202, matchweek: 28, date: "Wed 3 Mar 2027, 20:00 GMT", timestamp: 1804104000000, home: "Sunderland", away: "Manchester United", opponent: "Sunderland", opponentShort: "Sunderland", opponentAbbr: "SUN", opponentId: 29, opponentOpta: "t56", venue: "Stadium of Light", city: "Sunderland", homeAway: "away", competition: "Premier League", competitionId: 1, seasonId: 841 },
  { id: 129210, matchweek: 29, date: "Sat 13 Mar 2027, 15:00 GMT", timestamp: 1804950000000, home: "Manchester United", away: "Everton", opponent: "Everton", opponentShort: "Everton", opponentAbbr: "EVE", opponentId: 7, opponentOpta: "t11", venue: "Old Trafford", city: "Manchester", homeAway: "home", competition: "Premier League", competitionId: 1, seasonId: 841 },
  { id: 129220, matchweek: 30, date: "Sat 20 Mar 2027, 15:00 GMT", timestamp: 1805554800000, home: "Manchester City", away: "Manchester United", opponent: "Manchester City", opponentShort: "Man City", opponentAbbr: "MCI", opponentId: 11, opponentOpta: "t43", venue: "Etihad Stadium", city: "Manchester", homeAway: "away", competition: "Premier League", competitionId: 1, seasonId: 841 },
  { id: 129230, matchweek: 31, date: "Sat 10 Apr 2027, 15:00 BST", timestamp: 1807365600000, home: "Manchester United", away: "Hull City", opponent: "Hull City", opponentShort: "Hull", opponentAbbr: "HUL", opponentId: 41, opponentOpta: "t88", venue: "Old Trafford", city: "Manchester", homeAway: "home", competition: "Premier League", competitionId: 1, seasonId: 841 },
  { id: 129239, matchweek: 32, date: "Sat 17 Apr 2027, 15:00 BST", timestamp: 1807970400000, home: "Ipswich Town", away: "Manchester United", opponent: "Ipswich Town", opponentShort: "Ipswich", opponentAbbr: "IPS", opponentId: 8, opponentOpta: "t40", venue: "Portman Road", city: "Ipswich", homeAway: "away", competition: "Premier League", competitionId: 1, seasonId: 841 },
  { id: 129249, matchweek: 33, date: "Sat 24 Apr 2027, 15:00 BST", timestamp: 1808575200000, home: "Manchester United", away: "Crystal Palace", opponent: "Crystal Palace", opponentShort: "Crystal Palace", opponentAbbr: "CRY", opponentId: 6, opponentOpta: "t31", venue: "Old Trafford", city: "Manchester", homeAway: "home", competition: "Premier League", competitionId: 1, seasonId: 841 },
  { id: 129255, matchweek: 34, date: "Sat 1 May 2027, 15:00 BST", timestamp: 1809180000000, home: "Coventry City", away: "Manchester United", opponent: "Coventry City", opponentShort: "Coventry", opponentAbbr: "COV", opponentId: 5, opponentOpta: "t9", venue: "Coventry Building Society Arena", city: "Coventry", homeAway: "away", competition: "Premier League", competitionId: 1, seasonId: 841 },
  { id: 129263, matchweek: 35, date: "Sat 8 May 2027, 15:00 BST", timestamp: 1809784800000, home: "Bournemouth", away: "Manchester United", opponent: "Bournemouth", opponentShort: "Bournemouth", opponentAbbr: "BOU", opponentId: 127, opponentOpta: "t91", venue: "Vitality Stadium", city: "Bournemouth", homeAway: "away", competition: "Premier League", competitionId: 1, seasonId: 841 },
  { id: 129281, matchweek: 36, date: "Sat 15 May 2027, 15:00 BST", timestamp: 1810389600000, home: "Manchester United", away: "Leeds United", opponent: "Leeds United", opponentShort: "Leeds", opponentAbbr: "LEE", opponentId: 9, opponentOpta: "t2", venue: "Old Trafford", city: "Manchester", homeAway: "home", competition: "Premier League", competitionId: 1, seasonId: 841 },
  { id: 129292, matchweek: 37, date: "Sun 23 May 2027, 15:00 BST", timestamp: 1811080800000, home: "Tottenham Hotspur", away: "Manchester United", opponent: "Tottenham Hotspur", opponentShort: "Spurs", opponentAbbr: "TOT", opponentId: 21, opponentOpta: "t6", venue: "Tottenham Hotspur Stadium", city: "London", homeAway: "away", competition: "Premier League", competitionId: 1, seasonId: 841 },
  { id: 129301, matchweek: 38, date: "Sun 30 May 2027, 16:00 BST", timestamp: 1811689200000, home: "Manchester United", away: "Fulham", opponent: "Fulham", opponentShort: "Fulham", opponentAbbr: "FUL", opponentId: 34, opponentOpta: "t54", venue: "Old Trafford", city: "Manchester", homeAway: "home", competition: "Premier League", competitionId: 1, seasonId: 841 },
];

const PENDING_TOURNAMENTS = [
  createPendingTournament("UEFA Champions League", 2, 0),
  createPendingTournament("FA Cup", 4, 1),
  createPendingTournament("EFL Cup", 5, 2),
];

function createPendingTournament(name, id, index) {
  return {
    id: `pending-${id}`,
    matchweek: null,
    date: "Fixtures not released yet",
    timestamp: Number.MAX_SAFE_INTEGER - index,
    home: UNITED.name,
    away: "Opponent TBC",
    opponent: "Opponent TBC",
    opponentShort: "TBC",
    opponentAbbr: "TBC",
    opponentId: null,
    opponentOpta: null,
    venue: "Awaiting draw",
    city: "",
    homeAway: "pending",
    competition: name,
    competitionId: id,
    seasonId: null,
    pending: true,
  };
}

const AUTO_REFRESH_ON_LOAD = true;
const SEEDED_STANDINGS = [
  { position: 1, name: "Arsenal", shortName: "Arsenal", id: 1, opta: "t3", played: 0, gd: 0, points: 0 },
  { position: 2, name: "Aston Villa", shortName: "Aston Villa", id: 2, opta: "t7", played: 0, gd: 0, points: 0 },
  { position: 3, name: "Bournemouth", shortName: "Bournemouth", id: 127, opta: "t91", played: 0, gd: 0, points: 0 },
  { position: 4, name: "Brentford", shortName: "Brentford", id: 130, opta: "t94", played: 0, gd: 0, points: 0 },
  { position: 5, name: "Brighton & Hove Albion", shortName: "Brighton", id: 131, opta: "t36", played: 0, gd: 0, points: 0 },
  { position: 6, name: "Chelsea", shortName: "Chelsea", id: 4, opta: "t8", played: 0, gd: 0, points: 0 },
  { position: 7, name: "Coventry City", shortName: "Coventry", id: 5, opta: "t9", played: 0, gd: 0, points: 0 },
  { position: 8, name: "Crystal Palace", shortName: "Crystal Palace", id: 6, opta: "t31", played: 0, gd: 0, points: 0 },
  { position: 9, name: "Everton", shortName: "Everton", id: 7, opta: "t11", played: 0, gd: 0, points: 0 },
  { position: 10, name: "Fulham", shortName: "Fulham", id: 34, opta: "t54", played: 0, gd: 0, points: 0 },
  { position: 11, name: "Hull City", shortName: "Hull", id: 41, opta: "t88", played: 0, gd: 0, points: 0 },
  { position: 12, name: "Ipswich Town", shortName: "Ipswich", id: 8, opta: "t40", played: 0, gd: 0, points: 0 },
  { position: 13, name: "Leeds United", shortName: "Leeds", id: 9, opta: "t2", played: 0, gd: 0, points: 0 },
  { position: 14, name: "Liverpool", shortName: "Liverpool", id: 10, opta: "t14", played: 0, gd: 0, points: 0 },
  { position: 15, name: "Manchester City", shortName: "Man City", id: 11, opta: "t43", played: 0, gd: 0, points: 0 },
  { position: 16, name: "Manchester United", shortName: "Man Utd", id: 12, opta: "t1", played: 0, gd: 0, points: 0 },
  { position: 17, name: "Newcastle United", shortName: "Newcastle", id: 23, opta: "t4", played: 0, gd: 0, points: 0 },
  { position: 18, name: "Nottingham Forest", shortName: "Nott'm Forest", id: 15, opta: "t17", played: 0, gd: 0, points: 0 },
  { position: 19, name: "Sunderland", shortName: "Sunderland", id: 29, opta: "t56", played: 0, gd: 0, points: 0 },
  { position: 20, name: "Tottenham Hotspur", shortName: "Spurs", id: 21, opta: "t6", played: 0, gd: 0, points: 0 },
];

let fixtures = [...SEEDED_FIXTURES, ...PENDING_TOURNAMENTS];
let standingsHistory = [{ gameweek: 0, entries: SEEDED_STANDINGS }];
let topScorer = null;
let topAssister = null;
let activeCompetition = "Premier League";
let activeVenue = "all";
let activeMonth = "all";
let showCompleted = false;

const grid = document.querySelector("#fixture-grid");
const template = document.querySelector("#fixture-card-template");
const dataStatus = document.querySelector("#data-status");
const refreshButton = document.querySelector("#refresh-button");
const completedToggle = document.querySelector("#completed-toggle");
const monthFilters = document.querySelector("#month-filters");
const tableBody = document.querySelector("#league-table-body");
const tableRound = document.querySelector("#table-round");
const positionChip = document.querySelector("#position-chip");
const positionChart = document.querySelector("#position-chart");
const topScorerName = document.querySelector("#top-scorer-name");
const topScorerMeta = document.querySelector("#top-scorer-meta");
const topScorerPhoto = document.querySelector("#top-scorer-photo");
const topAssisterName = document.querySelector("#top-assister-name");
const topAssisterMeta = document.querySelector("#top-assister-meta");
const topAssisterPhoto = document.querySelector("#top-assister-photo");

function crestUrl(optaId, size = 70) {
  const fallback = "https://resources.premierleague.com/premierleague/badges/70/default.png";
  return optaId
    ? `https://resources.premierleague.com/premierleague/badges/${size}/${optaId}.png`
    : fallback;
}

function parseDateParts(label) {
  if (!label || label.includes("not released")) {
    return { primary: label, secondary: "Pending confirmation" };
  }

  const [datePart, timePart] = label.split(",");
  return {
    primary: datePart.trim(),
    secondary: (timePart || "").trim(),
  };
}

function formatIstDateParts(fixture) {
  if (!fixture.timestamp || fixture.timestamp >= Number.MAX_SAFE_INTEGER) {
    return parseDateParts(fixture.date);
  }

  const date = new Date(fixture.timestamp);
  return {
    primary: new Intl.DateTimeFormat("en-IN", {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
      timeZone: "Asia/Kolkata",
    }).format(date),
    secondary: `${new Intl.DateTimeFormat("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Asia/Kolkata",
    }).format(date)} IST`,
  };
}

function dateFromFixture(fixture) {
  return Number.isFinite(fixture.timestamp) && fixture.timestamp < Number.MAX_SAFE_INTEGER
    ? new Date(fixture.timestamp)
    : null;
}

function monthKey(fixture) {
  const date = dateFromFixture(fixture);
  if (!date) return "tbc";
  const parts = new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "2-digit",
    timeZone: "Asia/Kolkata",
  }).formatToParts(date);
  const year = parts.find((part) => part.type === "year")?.value;
  const month = parts.find((part) => part.type === "month")?.value;
  if (!year || !month) return "tbc";
  return `${year}-${month}`;
}

function monthLabel(key) {
  if (key === "all") return "All months";
  if (key === "tbc") return "TBC";
  const [year, month] = key.split("-").map(Number);
  return new Date(year, month - 1, 1).toLocaleString([], {
    month: "short",
    year: "numeric",
  });
}

function availableMonthKeys() {
  return Array.from(
    new Set(
      fixtures
        .filter((fixture) => activeCompetition === "all" || fixture.competition === activeCompetition)
        .filter((fixture) => activeVenue === "all" || fixture.homeAway === activeVenue)
        .filter((fixture) => showCompleted || !isCompleted(fixture))
        .sort((a, b) => a.timestamp - b.timestamp)
        .map(monthKey),
    ),
  );
}

function renderMonthFilters() {
  const keys = availableMonthKeys();
  if (activeMonth !== "all" && !keys.includes(activeMonth)) {
    activeMonth = "all";
  }

  monthFilters.innerHTML = "";
  ["all", ...keys].forEach((key) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `month-filter${key === activeMonth ? " is-active" : ""}`;
    button.dataset.month = key;
    button.textContent = monthLabel(key);
    button.addEventListener("click", () => {
      activeMonth = key;
      renderMonthFilters();
      render();
    });
    monthFilters.appendChild(button);
  });
}

function render() {
  const filtered = fixtures
    .filter((fixture) => activeCompetition === "all" || fixture.competition === activeCompetition)
    .filter((fixture) => activeVenue === "all" || fixture.homeAway === activeVenue)
    .filter((fixture) => activeMonth === "all" || String(monthKey(fixture)) === String(activeMonth))
    .filter((fixture) => showCompleted || !isCompleted(fixture))
    .sort((a, b) => a.timestamp - b.timestamp);

  grid.innerHTML = "";

  if (!filtered.length) {
    grid.innerHTML = `<div class="empty-state">No fixtures match the current filters.</div>`;
    updateSummary(filtered);
    renderDashboard();
    return;
  }

  filtered.forEach((fixture) => grid.appendChild(createCard(fixture)));
  updateSummary(filtered);
  renderDashboard();
}

function createCard(fixture) {
  const node = template.content.firstElementChild.cloneNode(true);
  node.classList.add(fixture.homeAway);
  if (fixture.pending) node.classList.add("pending");

  const [homeNode, awayNode] = node.querySelectorAll(".team");
  const date = formatIstDateParts(fixture);

  node.querySelector(".competition-pill").textContent = fixture.competition;
  node.querySelector(".venue-pill").textContent =
    fixture.homeAway === "home" ? "Home" : fixture.homeAway === "away" ? "Away" : "Pending";
  node.querySelector(".match-date strong").textContent = date.primary;
  node.querySelector(".match-date span").textContent = date.secondary;

  fillTeam(
    homeNode,
    fixture.home,
    fixture.home === UNITED.name ? UNITED.opta : fixture.opponentOpta,
    fixture.score?.home,
  );
  fillTeam(
    awayNode,
    fixture.away,
    fixture.away === UNITED.name ? UNITED.opta : fixture.opponentOpta,
    fixture.score?.away,
  );

  node.querySelector(".venue").textContent =
    fixture.city && fixture.venue !== "Awaiting draw"
      ? `${fixture.venue}, ${fixture.city}`
      : fixture.venue;
  node.querySelector(".round").textContent = fixture.matchweek
    ? `Matchweek ${fixture.matchweek}`
    : "To be confirmed";
  node.querySelector(".streaming").innerHTML = streamingMarkup(fixture.competition);
  node.querySelector(".match-status").textContent = matchStatusText(fixture);
  fillList(node.querySelector(".scorers"), fixture.scorers, "Available after full-time");
  fillList(node.querySelector(".assists"), fixture.assists, "Available after full-time");

  return node;
}

function isCompleted(fixture) {
  return fixture.status === "C";
}

function streamingInfo(competition) {
  const services = {
    "Premier League": { name: "JioHotstar", initials: "JH", className: "jio" },
    "UEFA Champions League": { name: "SonyLIV", initials: "SL", className: "sony" },
    "EFL Cup": { name: "FanCode", initials: "FC", className: "fancode" },
    "FA Cup": { name: "TBC", initials: "TBC", className: "tbc" },
  };
  return services[competition] || { name: "TBC", initials: "TBC", className: "tbc" };
}

function streamingMarkup(competition) {
  const service = streamingInfo(competition);
  return `
    <span class="streaming-badge">
      <span class="streaming-icon ${service.className}" aria-hidden="true">${service.initials}</span>
      <span>${service.name}</span>
    </span>
  `;
}

function matchStatusText(fixture) {
  if (fixture.pending) return "Awaiting fixture release";
  if (fixture.status === "C" && fixture.score) {
    return "Completed";
  }
  return "Not played yet";
}

function fillList(node, items, fallback) {
  node.innerHTML = "";
  const values = items && items.length ? items : [fallback];
  values.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = typeof item === "string" ? item : item.label;
    node.appendChild(li);
  });
}

function fillTeam(node, name, optaId, score) {
  const img = node.querySelector("img");
  const scoreNode = node.querySelector(".team-score");
  img.src = crestUrl(optaId);
  img.alt = `${name} crest`;
  img.loading = "lazy";
  img.onerror = () => {
    img.src = crestUrl(null);
  };
  scoreNode.textContent = score === undefined || score === null ? "-" : String(score);
  scoreNode.classList.toggle("is-pending", score === undefined || score === null);
  node.querySelector(".team-name").textContent = name;
}

function updateSummary(list) {
  const realFixtures = list.filter((fixture) => !fixture.pending);
  const firstFixture = realFixtures[0];

  document.querySelector("#total-count").textContent = String(realFixtures.length);
  document.querySelector("#home-count").textContent = String(
    realFixtures.filter((fixture) => fixture.homeAway === "home").length,
  );
  document.querySelector("#away-count").textContent = String(
    realFixtures.filter((fixture) => fixture.homeAway === "away").length,
  );
  document.querySelector("#next-match").textContent = firstFixture
    ? formatIstDateParts(firstFixture).primary.replace(/^[A-Za-z]{3},?\s/, "")
    : "TBC";
}

function renderDashboard() {
  renderLeagueTable();
  renderPositionChart();
  renderTopScorer();
  renderTopAssister();
}

function latestStandings() {
  return standingsHistory[standingsHistory.length - 1] || { gameweek: 0, entries: SEEDED_STANDINGS };
}

function renderLeagueTable() {
  const table = latestStandings();
  tableRound.textContent = `GW ${table.gameweek}`;
  tableBody.innerHTML = "";

  table.entries.forEach((entry) => {
    const row = document.createElement("tr");
    if (entry.id === UNITED.id) row.classList.add("is-united");
    row.innerHTML = `
      <td>${entry.position}</td>
      <td>
        <span class="club-cell">
          <img src="${crestUrl(entry.opta)}" alt="${entry.shortName} crest" />
          <span>${entry.shortName}</span>
        </span>
      </td>
      <td>${entry.played}</td>
      <td>${entry.gd}</td>
      <td>${entry.points}</td>
    `;
    tableBody.appendChild(row);
  });
}

function unitedPositionHistory() {
  return standingsHistory
    .map((table) => {
      const united = table.entries.find((entry) => entry.id === UNITED.id);
      return united ? { gameweek: table.gameweek, position: united.position } : null;
    })
    .filter(Boolean);
}

function renderPositionChart() {
  const history = unitedPositionHistory();
  const latest = history[history.length - 1];
  positionChip.textContent = latest ? `Pos ${latest.position}` : "TBC";

  if (!history.length) {
    positionChart.innerHTML = `<p class="chart-note">No league table position data available yet.</p>`;
    return;
  }

  if (history.length === 1 && history[0].gameweek === 0) {
    positionChart.innerHTML = `
      <p class="chart-note">The 2026/27 season has not started yet. The chart will populate week by week after Premier League results are published.</p>
    `;
    return;
  }

  const width = 560;
  const height = 250;
  const pad = 34;
  const maxGw = Math.max(...history.map((point) => point.gameweek), 1);
  const x = (gw) => pad + (gw / maxGw) * (width - pad * 2);
  const y = (position) => pad + ((position - 1) / 19) * (height - pad * 2);
  const path = history
    .map((point, index) => `${index === 0 ? "M" : "L"} ${x(point.gameweek)} ${y(point.position)}`)
    .join(" ");
  const xAxisLabels = history
    .filter((point) => point.gameweek > 0)
    .filter((point) => point.gameweek === 1 || point.gameweek === maxGw || point.gameweek % 4 === 0);
  const lastPoint = history[history.length - 1];

  positionChart.innerHTML = `
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Manchester United weekly league position">
      <line x1="${pad}" y1="${pad}" x2="${pad}" y2="${height - pad}" stroke="#ddd6cb" />
      <line x1="${pad}" y1="${height - pad}" x2="${width - pad}" y2="${height - pad}" stroke="#ddd6cb" />
      <text x="4" y="${pad + 4}" font-size="12" fill="#706b63">1st</text>
      <text x="0" y="${height - pad + 4}" font-size="12" fill="#706b63">20th</text>
      ${xAxisLabels
        .map(
          (point) => `
            <line x1="${x(point.gameweek)}" y1="${height - pad}" x2="${x(point.gameweek)}" y2="${height - pad + 5}" stroke="#706b63" />
            <text x="${x(point.gameweek)}" y="${height - 8}" text-anchor="middle" font-size="10" fill="#706b63">GW${point.gameweek}</text>
          `,
        )
        .join("")}
      <path d="${path}" fill="none" stroke="#c70101" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      ${history
        .slice(0, -1)
        .map((point) => `<circle cx="${x(point.gameweek)}" cy="${y(point.position)}" r="5" fill="#c70101"><title>GW ${point.gameweek}: ${point.position}</title></circle>`)
        .join("")}
      <image href="${crestUrl(UNITED.opta, 70)}" x="${x(lastPoint.gameweek) - 13}" y="${y(lastPoint.position) - 13}" width="26" height="26">
        <title>GW ${lastPoint.gameweek}: ${lastPoint.position}</title>
      </image>
    </svg>
  `;
}

function renderTopScorer() {
  if (!topScorer) {
    topScorerName.textContent = "TBC";
    topScorerMeta.textContent = "No 2026/27 goals recorded yet";
    setPlayerPhoto(topScorerPhoto, "", "Top scorer photo");
    return;
  }

  topScorerName.textContent = topScorer.name;
  topScorerMeta.textContent = `${topScorer.goals} goals, ${topScorer.club}`;
  setPlayerPhoto(topScorerPhoto, topScorer.photo, `${topScorer.name} photo`);
}

function renderTopAssister() {
  if (!topAssister) {
    topAssisterName.textContent = "TBC";
    topAssisterMeta.textContent = "No 2026/27 assists recorded yet";
    setPlayerPhoto(topAssisterPhoto, "", "Top assister photo");
    return;
  }

  topAssisterName.textContent = topAssister.name;
  topAssisterMeta.textContent = `${topAssister.assists} assists, ${topAssister.club}`;
  setPlayerPhoto(topAssisterPhoto, topAssister.photo, `${topAssister.name} photo`);
}

function setPlayerPhoto(img, src, alt) {
  img.alt = alt;
  img.src =
    src ||
    "https://resources.premierleague.com/premierleague/photos/players/250x250/Photo-Missing.png";
  img.onerror = () => {
    img.onerror = null;
    img.src = "https://resources.premierleague.com/premierleague/photos/players/250x250/Photo-Missing.png";
  };
}

async function refreshFixtures({ automatic = false } = {}) {
  refreshButton.disabled = true;
  dataStatus.textContent = automatic ? "Checking latest fixtures..." : "Checking tournament feeds...";

  try {
    const [fetchedGroups, fetchedStandings, fetchedTopScorer, fetchedTopAssister] = await Promise.all([
      Promise.all(COMPETITIONS.map(fetchCompetitionFixtures)),
      fetchStandings(),
      fetchTopScorer(),
      fetchTopAssister(),
    ]);
    const fetched = fetchedGroups.flat();
    fixtures = mergeFixtures(fetched);
    standingsHistory = fetchedStandings.length ? fetchedStandings : standingsHistory;
    topScorer = fetchedTopScorer || topScorer;
    topAssister = fetchedTopAssister || topAssister;
    const checkedAt = new Date().toLocaleString([], {
      dateStyle: "medium",
      timeStyle: "short",
    });
    dataStatus.textContent = `Updated ${checkedAt}`;
  } catch (error) {
    dataStatus.textContent = "Live refresh blocked. Showing seeded PL fixtures.";
    fixtures = [...SEEDED_FIXTURES, ...PENDING_TOURNAMENTS];
  } finally {
    refreshButton.disabled = false;
    renderMonthFilters();
    render();
  }
}

async function fetchStandings() {
  const response = await fetch(
    "https://footballapi.pulselive.com/football/standings?comps=1&compSeasons=841&altIds=true",
  );
  if (!response.ok) throw new Error("Standings lookup failed");

  const payload = await response.json();
  return (payload.tables || []).map((table) => ({
    gameweek: table.gameWeek || 0,
    entries: (table.entries || []).map((entry) => ({
      position: entry.position,
      name: entry.team?.name || "Unknown club",
      shortName: entry.team?.shortName || entry.team?.name || "Unknown",
      id: entry.team?.id,
      opta: entry.team?.altIds?.opta,
      played: entry.overall?.played ?? 0,
      gd: entry.overall?.goalsDifference ?? 0,
      points: entry.overall?.points ?? 0,
    })),
  }));
}

async function fetchTopScorer() {
  const response = await fetch(
    "https://footballapi.pulselive.com/football/stats/ranked/players/goals?comps=1&compSeasons=841&page=0&pageSize=1&altIds=true",
  );
  if (!response.ok) return null;

  const payload = await response.json();
  const row = payload.stats?.content?.[0];
  if (!row) return null;

  return {
    name: row.owner?.name?.display || row.owner?.name || "Unknown player",
    club: row.owner?.currentTeam?.name || row.owner?.currentTeam?.shortName || "Premier League",
    goals: row.value || row.stats?.goals || 0,
    photo: playerPhotoUrl(row.owner),
  };
}

async function fetchTopAssister() {
  const response = await fetch(
    "https://footballapi.pulselive.com/football/stats/ranked/players/goal_assist?comps=1&compSeasons=841&page=0&pageSize=1&altIds=true",
  );
  if (!response.ok) return null;

  const payload = await response.json();
  const row = payload.stats?.content?.[0];
  if (!row) return null;

  return {
    name: row.owner?.name?.display || row.owner?.name || "Unknown player",
    club: row.owner?.currentTeam?.name || row.owner?.currentTeam?.shortName || "Premier League",
    assists: row.value || row.stats?.goal_assist || 0,
    photo: playerPhotoUrl(row.owner),
  };
}

function playerPhotoUrl(player) {
  const opta = player?.altIds?.opta;
  return opta ? `https://resources.premierleague.com/premierleague/photos/players/250x250/${opta}.png` : "";
}

async function fetchCompetitionFixtures(competition) {
  const seasonId = competition.seasonId || (await findSeasonId(competition));
  if (!seasonId) return [];

  const params = new URLSearchParams({
    comps: String(competition.id),
    teams: String(UNITED.id),
    compSeasons: String(seasonId),
    page: "0",
    pageSize: "100",
    sort: "asc",
    altIds: "true",
  });

  const response = await fetch(`https://footballapi.pulselive.com/football/fixtures?${params}`);
  if (!response.ok) throw new Error(`Fixture lookup failed for ${competition.name}`);

  const payload = await response.json();
  const detailed = await Promise.all(
    (payload.content || []).map(async (fixture) => {
      if (fixture.status !== "C") return fixture;
      return fetchFixtureDetail(fixture.id).catch(() => fixture);
    }),
  );
  return detailed.map((fixture) => normalizeFixture(fixture, competition.name, competition.id, seasonId));
}

async function fetchFixtureDetail(fixtureId) {
  const response = await fetch(
    `https://footballapi.pulselive.com/football/fixtures/${fixtureId}?altIds=true`,
  );
  if (!response.ok) throw new Error(`Fixture detail lookup failed for ${fixtureId}`);
  return response.json();
}

async function findSeasonId(competition) {
  const response = await fetch(
    `https://footballapi.pulselive.com/football/competitions/${competition.id}/compseasons?page=0&pageSize=80&altIds=true`,
  );
  if (!response.ok) return null;

  const payload = await response.json();
  const seasons = payload.content || [];
  const hinted = seasons.find((season) =>
    String(season.label).includes(competition.seasonLabelHint || "2026"),
  );
  return hinted?.id || seasons[0]?.id || null;
}

function normalizeFixture(fixture, competitionName, competitionId, seasonId) {
  const homeTeam = fixture.teams[0]?.team;
  const awayTeam = fixture.teams[1]?.team;
  const opponent = homeTeam?.id === UNITED.id ? awayTeam : homeTeam;
  const score =
    fixture.teams[0]?.score !== undefined && fixture.teams[1]?.score !== undefined
      ? { home: fixture.teams[0].score, away: fixture.teams[1].score }
      : null;
  const playerNames = createPlayerNameMap(fixture);
  const events = fixture.events || fixture.goals || [];

  return {
    id: fixture.id,
    matchweek: fixture.gameweek?.gameweek || null,
    date: fixture.kickoff?.label || "Date TBC",
    timestamp: fixture.kickoff?.millis || Number.MAX_SAFE_INTEGER,
    home: homeTeam?.name || "Home TBC",
    away: awayTeam?.name || "Away TBC",
    opponent: opponent?.name || "Opponent TBC",
    opponentShort: opponent?.shortName || "TBC",
    opponentAbbr: opponent?.club?.abbr || "TBC",
    opponentId: opponent?.id || null,
    opponentOpta: opponent?.altIds?.opta || null,
    venue: fixture.ground?.name || "Venue TBC",
    city: fixture.ground?.city || "",
    homeAway: homeTeam?.id === UNITED.id ? "home" : "away",
    competition: competitionName,
    competitionId,
    seasonId,
    status: fixture.status || "U",
    score,
    scorers: normalizeScorers(events, playerNames),
    assists: normalizeAssists(events, playerNames),
  };
}

function createPlayerNameMap(fixture) {
  const map = new Map();
  (fixture.teamLists || []).forEach((teamList) => {
    [...(teamList.lineup || []), ...(teamList.substitutes || [])].forEach((player) => {
      if (player.id) map.set(player.id, player.name?.display || "Unknown player");
      if (player.playerId) map.set(player.playerId, player.name?.display || "Unknown player");
    });
  });
  return map;
}

function normalizeScorers(events, playerNames) {
  return events
    .filter((event) => event.type === "G" || event.description === "G")
    .map((event) => {
      const player = playerNames.get(event.personId) || `Player ${event.personId || "TBC"}`;
      const minute = event.clock?.label ? ` ${event.clock.label}` : "";
      return { label: `${player}${minute}` };
    });
}

function normalizeAssists(events, playerNames) {
  return events
    .map((event) => {
      const assistId =
        event.assistPersonId || event.assist?.personId || event.assistedBy?.personId || null;
      if (!assistId && !Array.isArray(event.assists)) return null;
      const assistIds = Array.isArray(event.assists)
        ? event.assists.map((assist) => assist.personId || assist.id).filter(Boolean)
        : [assistId];
      return assistIds.map((id) => {
        const player = playerNames.get(id) || `Player ${id}`;
        const minute = event.clock?.label ? ` ${event.clock.label}` : "";
        return { label: `${player}${minute}` };
      });
    })
    .flat()
    .filter(Boolean);
}

function mergeFixtures(fetched) {
  const byKey = new Map();
  [...SEEDED_FIXTURES, ...fetched].forEach((fixture) => {
    byKey.set(`${fixture.competitionId}-${fixture.id}`, fixture);
  });

  const merged = Array.from(byKey.values());
  const competitionsWithFixtures = new Set(merged.map((fixture) => fixture.competition));
  PENDING_TOURNAMENTS.forEach((pending) => {
    if (!competitionsWithFixtures.has(pending.competition)) merged.push(pending);
  });
  return merged;
}

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    activeCompetition = button.dataset.filter;
    renderMonthFilters();
    render();
  });
});

document.querySelectorAll(".venue-filter").forEach((button) => {
  button.addEventListener("click", () => {
    document
      .querySelectorAll(".venue-filter")
      .forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    activeVenue = button.dataset.venueFilter;
    renderMonthFilters();
    render();
  });
});

document.querySelectorAll(".page-tab").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".page-tab").forEach((item) => item.classList.remove("is-active"));
    document.querySelectorAll(".app-view").forEach((view) => view.classList.remove("is-active"));
    button.classList.add("is-active");
    document.querySelector(`#${button.dataset.view}`).classList.add("is-active");
    renderDashboard();
  });
});

completedToggle.addEventListener("click", () => {
  showCompleted = !showCompleted;
  completedToggle.classList.toggle("is-active", showCompleted);
  completedToggle.textContent = showCompleted ? "Hide completed" : "Show completed";
  renderMonthFilters();
  render();
});

refreshButton.addEventListener("click", () => refreshFixtures());

completedToggle.classList.toggle("is-active", showCompleted);
completedToggle.textContent = showCompleted ? "Hide completed" : "Show completed";

renderMonthFilters();
render();

if (AUTO_REFRESH_ON_LOAD) {
  refreshFixtures({ automatic: true });
}
