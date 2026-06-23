const UNITED = {
  id: 12,
  name: "Manchester United",
  shortName: "Man Utd",
  abbr: "MUN",
  opta: "t1",
};

const PRE_SEASON_NAME = "Pre-Season";
const MUTV_URL = "https://www.manutd.com/en/mutv";
const MUTV_LOGO =
  "https://upload.wikimedia.org/wikipedia/en/thumb/b/b8/MUTV_logo.png/250px-MUTV_logo.png";

const TEAM_CREST_OVERRIDES = {
  "Atletico Madrid": "https://crests.football-data.org/78.png",
  "Atlético Madrid": "https://crests.football-data.org/78.png",
  "Milan": "https://crests.football-data.org/98.png",
  "Paris Saint Germain": "https://crests.football-data.org/524.png",
  "Paris Saint-Germain": "https://crests.football-data.org/524.png",
  "Rosenborg": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Rosenborg_logo_RGB.svg/250px-Rosenborg_logo_RGB.svg.png",
  "Wrexham": "https://upload.wikimedia.org/wikipedia/en/thumb/0/0d/Wrexham_A.F.C._Logo.svg/250px-Wrexham_A.F.C._Logo.svg.png",
};

const COMPETITIONS = [
  {
    name: PRE_SEASON_NAME,
    id: 14,
    seasonId: 831,
    seeded: true,
    source: "Premier League/Pulse friendlies feed",
  },
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
    seeded: false,
    source: "Premier League/Pulse competition feed",
  },
  {
    name: "FA Cup",
    id: 4,
    seeded: false,
    source: "Premier League/Pulse competition feed",
  },
  {
    name: "EFL Cup",
    id: 5,
    seeded: false,
    source: "Premier League/Pulse competition feed",
  },
];

const TARGET_SEASON_PATTERN = /(^|[^0-9])2026\s*[/-]\s*(?:2027|27)(?=$|[^0-9])/;

const SEEDED_PRE_SEASON_FIXTURES = [
  { id: 128731, matchweek: 1, date: "Sat 18 Jul 2026, 16:00 BST", timestamp: 1784386800000, home: "Manchester United", away: "Wrexham", opponent: "Wrexham", opponentShort: "Wrexham", opponentAbbr: "WRX", opponentId: 195, opponentOpta: "t109", venue: "Helsinki Olympic Stadium", city: "Helsinki", homeAway: "neutral", competition: PRE_SEASON_NAME, competitionId: 14, seasonId: 831, status: "U" },
  { id: 128834, matchweek: 1, date: "Fri 24 Jul 2026, 17:00 BST", timestamp: 1784908800000, home: "Rosenborg", away: "Manchester United", opponent: "Rosenborg", opponentShort: "Rosenborg", opponentAbbr: "RSB", opponentId: 371, opponentOpta: "t197", venue: "Lerkendal Stadium", city: "Trondheim", homeAway: "neutral", competition: PRE_SEASON_NAME, competitionId: 14, seasonId: 831, status: "U" },
  { id: 128836, matchweek: 1, date: "Sat 1 Aug 2026, 14:00 BST", timestamp: 1785589200000, home: "Manchester United", away: "Atletico Madrid", opponent: "Atletico Madrid", opponentShort: "Atletico", opponentAbbr: "ATM", opponentId: 48, opponentOpta: "t175", venue: "Strawberry Arena", city: "Stockholm", homeAway: "neutral", competition: PRE_SEASON_NAME, competitionId: 14, seasonId: 831, status: "U" },
  { id: 128833, matchweek: 1, date: "Sat 8 Aug 2026, 16:00 BST", timestamp: 1786201200000, home: "Paris Saint Germain", away: "Manchester United", opponent: "Paris Saint Germain", opponentShort: "PSG", opponentAbbr: "PSG", opponentId: 67, opponentOpta: "t149", venue: "Ullevi Stadium", city: "Gothenburg", homeAway: "neutral", competition: PRE_SEASON_NAME, competitionId: 14, seasonId: 831, status: "U" },
  { id: 128825, matchweek: 1, date: "Wed 12 Aug 2026, 19:30 BST", timestamp: 1786559400000, home: "Leeds United", away: "Manchester United", opponent: "Leeds United", opponentShort: "Leeds", opponentAbbr: "LEE", opponentId: 9, opponentOpta: "t2", venue: "Croke Park", city: "Dublin", homeAway: "neutral", competition: PRE_SEASON_NAME, competitionId: 14, seasonId: 831, status: "U" },
  { id: 128906, matchweek: 1, date: "Sat 15 Aug 2026", timestamp: 1786752000000, home: "Milan", away: "Manchester United", opponent: "Milan", opponentShort: "Milan", opponentAbbr: "ACM", opponentId: 64, opponentOpta: "t120", venue: "Tarczynski Arena", city: "Wroclaw", homeAway: "neutral", competition: PRE_SEASON_NAME, competitionId: 14, seasonId: 831, status: "U" },
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
const APP_STATE_CACHE_KEY = "man-utd-fixtures-state-v2";
const APP_CACHE_SCHEMA_VERSION = 2;
const APP_CACHE_MAX_AGE_MS = 24 * 60 * 60 * 1000;
const LIVE_API_ORIGIN = "https://footballapi.pulselive.com";
const LIVE_API_PROXY = "/.netlify/functions/pl-api";
const CHAMPIONS_LEAGUE_LOGO = "champions-league.svg";
const SEEDED_STANDINGS = [
  createStandingEntry(1, "Arsenal", "Arsenal", 1, "t3"),
  createStandingEntry(2, "Aston Villa", "Aston Villa", 2, "t7"),
  createStandingEntry(3, "Bournemouth", "Bournemouth", 127, "t91"),
  createStandingEntry(4, "Brentford", "Brentford", 130, "t94"),
  createStandingEntry(5, "Brighton & Hove Albion", "Brighton", 131, "t36"),
  createStandingEntry(6, "Chelsea", "Chelsea", 4, "t8"),
  createStandingEntry(7, "Coventry City", "Coventry", 5, "t9"),
  createStandingEntry(8, "Crystal Palace", "Crystal Palace", 6, "t31"),
  createStandingEntry(9, "Everton", "Everton", 7, "t11"),
  createStandingEntry(10, "Fulham", "Fulham", 34, "t54"),
  createStandingEntry(11, "Hull City", "Hull", 41, "t88"),
  createStandingEntry(12, "Ipswich Town", "Ipswich", 8, "t40"),
  createStandingEntry(13, "Leeds United", "Leeds", 9, "t2"),
  createStandingEntry(14, "Liverpool", "Liverpool", 10, "t14"),
  createStandingEntry(15, "Manchester City", "Man City", 11, "t43"),
  createStandingEntry(16, "Manchester United", "Man Utd", 12, "t1"),
  createStandingEntry(17, "Newcastle United", "Newcastle", 23, "t4"),
  createStandingEntry(18, "Nottingham Forest", "Nott'm Forest", 15, "t17"),
  createStandingEntry(19, "Sunderland", "Sunderland", 29, "t56"),
  createStandingEntry(20, "Tottenham Hotspur", "Spurs", 21, "t6"),
];

const CHAMPIONS_LEAGUE_CLUBS = [
  { name: "Arsenal", crest: crestUrl("t3") },
  { name: "Atletico Madrid", crest: "https://crests.football-data.org/78.png" },
  { name: "Barcelona", crest: "https://crests.football-data.org/81.png" },
  { name: "Bayern Munich", crest: "https://crests.football-data.org/5.png" },
  { name: "Borussia Dortmund", crest: "https://crests.football-data.org/4.png" },
  { name: "Feyenoord", crest: "https://crests.football-data.org/675.png" },
  { name: "Galatasaray", crest: "https://a.espncdn.com/i/teamlogos/soccer/500/432.png" },
  { name: "Inter Milan", crest: "https://crests.football-data.org/108.png" },
  { name: "Lens", crest: "https://crests.football-data.org/546.png" },
  { name: "Manchester City", crest: crestUrl("t43") },
  { name: "Manchester United", crest: crestUrl(UNITED.opta), id: UNITED.id, opta: UNITED.opta },
  { name: "Paris Saint-Germain", crest: "https://crests.football-data.org/524.png" },
  { name: "Porto", crest: "https://crests.football-data.org/503.png" },
  { name: "PSV Eindhoven", crest: "https://crests.football-data.org/674.png" },
  { name: "RB Leipzig", crest: "https://crests.football-data.org/721.png" },
  { name: "Real Madrid", crest: "https://crests.football-data.org/86.png" },
  { name: "Shakhtar Donetsk", crest: "https://a.espncdn.com/i/teamlogos/soccer/500/493.png" },
  { name: "Villarreal", crest: "https://crests.football-data.org/94.png" },
];

const CHAMPIONS_LEAGUE_STANDINGS = [
  ...CHAMPIONS_LEAGUE_CLUBS,
  ...Array.from({ length: 18 }, () => ({ name: "TBC", crest: CHAMPIONS_LEAGUE_LOGO })),
].map((club, index) =>
  createStandingEntry(index + 1, club.name, club.name, club.id || null, club.opta || null, {
    crest: club.crest,
  }),
);

let fixtures = [...SEEDED_PRE_SEASON_FIXTURES, ...SEEDED_FIXTURES, ...PENDING_TOURNAMENTS];
let standingsHistory = [{ gameweek: 0, entries: SEEDED_STANDINGS }];
let topScorer = null;
let topAssister = null;
let activeCompetition = defaultCompetition();
let activeVenue = "all";
let activeMonth = "all";
let activeDashboardTable = "premier-league";
let showCompleted = false;
let isRefreshing = false;
let pullStartY = null;
let pullDistance = 0;
let pullReady = false;

const COMPETITION_THEMES = {
  [PRE_SEASON_NAME]: "pre-season",
  "Premier League": "premier-league",
  "UEFA Champions League": "champions-league",
  "FA Cup": "fa-cup",
  "EFL Cup": "efl-cup",
};

const PULL_REFRESH_THRESHOLD = 76;

const grid = document.querySelector("#fixture-grid");
const template = document.querySelector("#fixture-card-template");
const dataStatus = document.querySelector("#data-status");
const refreshButton = document.querySelector("#refresh-button");
const completedToggle = document.querySelector("#completed-toggle");
const competitionFilters = document.querySelector(".competition-filters");
const monthFilters = document.querySelector("#month-filters");
const tableBody = document.querySelector("#league-table-body");
const tableRound = document.querySelector("#table-round");
const dashboardTableLabel = document.querySelector("#dashboard-table-label");
const dashboardTableLink = document.querySelector("#dashboard-table-link");
const positionChip = document.querySelector("#position-chip");
const positionChart = document.querySelector("#position-chart");
const topScorerName = document.querySelector("#top-scorer-name");
const topScorerMeta = document.querySelector("#top-scorer-meta");
const topScorerPhoto = document.querySelector("#top-scorer-photo");
const topAssisterName = document.querySelector("#top-assister-name");
const topAssisterMeta = document.querySelector("#top-assister-meta");
const topAssisterPhoto = document.querySelector("#top-assister-photo");

function createStandingEntry(position, name, shortName, id = null, opta = null, stats = {}) {
  return {
    position,
    name,
    shortName,
    id,
    opta,
    crest: stats.crest ?? null,
    played: stats.played ?? 0,
    won: stats.won ?? 0,
    drawn: stats.drawn ?? 0,
    lost: stats.lost ?? 0,
    goalsFor: stats.goalsFor ?? 0,
    goalsAgainst: stats.goalsAgainst ?? 0,
    gd: stats.gd ?? 0,
    points: stats.points ?? 0,
  };
}

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
  const date = dateFromFixture(fixture);
  if (!date) {
    return parseDateParts(fixture.date);
  }

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
  const timestamp = Number(fixture.timestamp);
  if (!Number.isFinite(timestamp) || timestamp >= 8640000000000000) return null;
  const date = new Date(timestamp);
  return Number.isNaN(date.getTime()) ? null : date;
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
        .filter(matchesActiveVenue)
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
      updateCompetitionTheme();
      renderMonthFilters();
      render();
    });
    monthFilters.appendChild(button);
  });
}

function orderedCompetitions() {
  const preSeason = COMPETITIONS.find((competition) => competition.name === PRE_SEASON_NAME);
  const others = COMPETITIONS.filter((competition) => competition.name !== PRE_SEASON_NAME);
  if (!preSeason) return others;
  return isPreSeasonComplete() ? [...others, preSeason] : [preSeason, ...others];
}

function isPreSeasonComplete() {
  const preSeasonFixtures = realFixturesForCompetition(PRE_SEASON_NAME);
  return preSeasonFixtures.length > 0 && preSeasonFixtures.every(isCompleted);
}

function defaultCompetition() {
  return isPreSeasonComplete() ? "Premier League" : PRE_SEASON_NAME;
}

function syncDefaultCompetition() {
  const preferredCompetition = defaultCompetition();
  if (activeCompetition === PRE_SEASON_NAME || activeCompetition === "Premier League") {
    activeCompetition = preferredCompetition;
  }
}

function competitionButtonLabel(competitionName) {
  return competitionName === "UEFA Champions League" ? "Champions League" : competitionName;
}

function renderCompetitionFilters() {
  competitionFilters.replaceChildren();
  orderedCompetitions().forEach((competition) => {
    const button = document.createElement("button");
    button.className = "filter";
    button.type = "button";
    button.dataset.filter = competition.name;
    button.textContent = competitionButtonLabel(competition.name);
    button.addEventListener("click", () => setActiveCompetition(competition.name));
    competitionFilters.appendChild(button);
  });
  syncCompetitionButtons();
}

function hasRealFixturesInActiveCompetition() {
  return fixtures.some((fixture) => fixture.competition === activeCompetition && !fixture.pending);
}

function pendingFixtureForCompetition(competitionName) {
  return PENDING_TOURNAMENTS.find((fixture) => fixture.competition === competitionName) || null;
}

function realFixturesForCompetition(competitionName) {
  return fixtures.filter((fixture) => fixture.competition === competitionName && !fixture.pending);
}

function matchesActiveVenue(fixture) {
  return fixture.pending || activeVenue === "all" || fixture.homeAway === activeVenue;
}

function isPreSeasonSelected() {
  return activeCompetition === PRE_SEASON_NAME;
}

function updateVenueFilterStates() {
  const hasFixtures = hasRealFixturesInActiveCompetition();
  document.querySelectorAll(".venue-filter").forEach((button) => {
    const isHidden = isPreSeasonSelected();
    button.hidden = isHidden;
    button.disabled = isHidden || !hasFixtures;
    button.classList.toggle("is-disabled", !isHidden && !hasFixtures);
  });
}

function render() {
  renderCompetitionFilters();
  updateCompetitionTheme();
  updateVenueFilterStates();
  grid.replaceChildren();

  const selectedCompetition = activeCompetition;
  const pendingFixture = pendingFixtureForCompetition(selectedCompetition);
  const realCompetitionFixtures = realFixturesForCompetition(selectedCompetition);
  let filtered;

  if (pendingFixture && !realCompetitionFixtures.length) {
    filtered = [pendingFixture];
  } else {
    filtered = fixtures
      .filter((fixture) => selectedCompetition === "all" || fixture.competition === selectedCompetition)
      .filter(matchesActiveVenue)
      .filter((fixture) => activeMonth === "all" || String(monthKey(fixture)) === String(activeMonth))
      .filter((fixture) => showCompleted || !isCompleted(fixture))
      .sort((a, b) => a.timestamp - b.timestamp);
  }

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

function updateCompetitionTheme() {
  document.body.dataset.competitionTheme = COMPETITION_THEMES[activeCompetition] || "premier-league";
}

function syncVenueButtons() {
  document.querySelectorAll(".venue-filter").forEach((button) => {
    const isActive = button.dataset.venueFilter === activeVenue;
    button.classList.toggle("is-active", isActive);
  });
}

function syncCompetitionButtons() {
  document.querySelectorAll(".filter").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.filter === activeCompetition);
  });
}

function setActiveCompetition(competitionName) {
  grid.replaceChildren();
  activeCompetition = competitionName;
  activeMonth = "all";
  activeVenue = "all";
  syncCompetitionButtons();
  syncVenueButtons();
  updateCompetitionTheme();
  renderMonthFilters();
  render();
}

function createCard(fixture) {
  const node = template.content.firstElementChild.cloneNode(true);
  node.classList.add(fixture.homeAway);
  if (fixture.pending) node.classList.add("pending");

  const [homeNode, awayNode] = node.querySelectorAll(".team");
  const date = formatIstDateParts(fixture);

  node.querySelector(".competition-pill").textContent = fixture.competition;
  node.querySelector(".venue-pill").textContent = venuePillLabel(fixture);
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
  node.querySelector(".round").textContent = roundLabel(fixture);
  node.querySelector(".streaming").innerHTML = streamingMarkup(fixture.competition);
  node.querySelector(".match-status").textContent = matchStatusText(fixture);
  fillList(node.querySelector(".scorers"), fixture.scorers, "Available after full-time");
  fillList(node.querySelector(".assists"), fixture.assists, "Available after full-time");

  return node;
}

function roundLabel(fixture) {
  if (fixture.competition === PRE_SEASON_NAME) return "Friendly";
  return fixture.matchweek ? `Matchweek ${fixture.matchweek}` : "To be confirmed";
}

function venuePillLabel(fixture) {
  if (fixture.homeAway === "neutral") return "Neutral";
  if (fixture.homeAway === "home") return "Home";
  if (fixture.homeAway === "away") return "Away";
  return "Pending";
}

function isCompleted(fixture) {
  return fixture.status === "C";
}

function streamingInfo(competition) {
  const services = {
    [PRE_SEASON_NAME]: {
      name: "MUTV",
      initials: "MUTV",
      className: "mutv",
      logo: MUTV_LOGO,
      url: MUTV_URL,
    },
    "Premier League": {
      name: "JioHotstar",
      initials: "JH",
      className: "jio",
      logo: "https://www.hotstar.com/favicon.ico",
    },
    "UEFA Champions League": {
      name: "SonyLIV",
      initials: "SL",
      className: "sony",
      logo: "sonyliv.png",
    },
    "FA Cup": {
      name: "SonyLIV",
      initials: "SL",
      className: "sony",
      logo: "sonyliv.png",
    },
    "EFL Cup": {
      name: "FanCode",
      initials: "FC",
      className: "fancode",
      logo: "fc.jpg",
    },
  };
  return services[competition] || { name: "TBC", initials: "TBC", className: "tbc" };
}

function streamingMarkup(competition) {
  const service = streamingInfo(competition);
  const logo = service.logo
    ? `<img src="${service.logo}" alt="" onerror="this.remove()" />`
    : "";
  const content = `
      <span class="streaming-icon ${service.className}" aria-hidden="true">
        ${logo}
        <span>${service.initials}</span>
      </span>
      <span>${service.name}</span>
  `;
  if (service.url) {
    return `<a class="streaming-badge" href="${service.url}" target="_blank" rel="noreferrer">${content}</a>`;
  }
  return `<span class="streaming-badge">${content}</span>`;
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
  img.src = teamCrestUrl(name, optaId);
  img.alt = `${name} crest`;
  img.loading = "lazy";
  img.onerror = () => {
    img.src = crestUrl(null);
  };
  scoreNode.textContent = score === undefined || score === null ? "-" : String(score);
  scoreNode.classList.toggle("is-pending", score === undefined || score === null);
  node.querySelector(".team-name").textContent = name;
}

function teamCrestUrl(name, optaId) {
  return TEAM_CREST_OVERRIDES[name] || crestUrl(optaId);
}

function updateSummary(list) {
  const realFixtures = list.filter((fixture) => !fixture.pending);
  const nextFixture = nextGlobalFixture();

  document.querySelector("#total-count").textContent = String(realFixtures.length);
  document.querySelector("#home-count").textContent = String(
    realFixtures.filter((fixture) => fixture.homeAway === "home").length,
  );
  document.querySelector("#away-count").textContent = String(
    realFixtures.filter((fixture) => fixture.homeAway === "away").length,
  );
  document.querySelector("#next-match").textContent = nextFixture
    ? daysUntilFixtureLabel(nextFixture)
    : "TBC";
  document.querySelector("#next-match-date").textContent = nextFixture
    ? formatIstDateParts(nextFixture).primary.replace(/^[A-Za-z]{3},?\s/, "")
    : "Next fixture TBC";
}

function nextGlobalFixture() {
  const upcoming = fixtures
    .filter((fixture) => !fixture.pending && !isCompleted(fixture))
    .sort((a, b) => a.timestamp - b.timestamp);
  return upcoming[0] || null;
}

function daysUntilFixtureLabel(fixture) {
  const date = dateFromFixture(fixture);
  if (!date) return "TBC";

  const now = new Date();
  const days = Math.ceil((date.getTime() - now.getTime()) / 86400000);
  if (days <= 0) return "Today";
  if (days === 1) return "1 day";
  return `${days} days`;
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
  const table =
    activeDashboardTable === "champions-league"
      ? { gameweek: null, entries: CHAMPIONS_LEAGUE_STANDINGS }
      : latestStandings();
  const isChampionsLeague = activeDashboardTable === "champions-league";
  dashboardTableLabel.textContent = isChampionsLeague ? "Champions League" : "Premier League";
  dashboardTableLink.href = isChampionsLeague
    ? "https://www.uefa.com/uefachampionsleague/standings/"
    : "https://www.premierleague.com/en/tables";
  tableRound.textContent = isChampionsLeague ? "MD 0" : `GW ${table.gameweek}`;
  tableBody.innerHTML = "";

  table.entries.forEach((entry) => {
    const row = document.createElement("tr");
    if (entry.id === UNITED.id) row.classList.add("is-united");
    if (entry.name === "TBC") row.classList.add("is-tbc");
    row.innerHTML = `
      <td>${entry.position}</td>
      <td>
        <span class="club-cell">
          ${standingCrestMarkup(entry)}
          <span>${entry.shortName}</span>
        </span>
      </td>
      <td>${entry.played}</td>
      <td>${entry.won}</td>
      <td>${entry.drawn}</td>
      <td>${entry.lost}</td>
      <td>${entry.goalsFor}</td>
      <td>${entry.goalsAgainst}</td>
      <td>${entry.gd}</td>
      <td>${entry.points}</td>
    `;
    tableBody.appendChild(row);
  });
}

function standingCrestMarkup(entry) {
  const src = entry.crest || (entry.opta ? crestUrl(entry.opta) : CHAMPIONS_LEAGUE_LOGO);
  const alt = entry.name === "TBC" ? "Champions League logo" : `${entry.shortName} crest`;
  return `<img src="${src}" alt="${alt}" loading="lazy" onerror="this.src='${CHAMPIONS_LEAGUE_LOGO}'" />`;
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

function renderApp() {
  renderMonthFilters();
  render();
  updateVenueFilterStates();
}

function currentAppState() {
  return {
    fixtures,
    standingsHistory,
    topScorer,
    topAssister,
  };
}

function applyAppState(state) {
  fixtures = Array.isArray(state.fixtures) ? state.fixtures : fixtures;
  standingsHistory = Array.isArray(state.standingsHistory) && state.standingsHistory.length
    ? state.standingsHistory
    : standingsHistory;
  topScorer = state.topScorer || topScorer;
  topAssister = state.topAssister || topAssister;
  syncDefaultCompetition();
}

function stateSignature(state) {
  return JSON.stringify(state);
}

function todayCacheKey() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function loadCachedState() {
  try {
    const raw = localStorage.getItem(APP_STATE_CACHE_KEY);
    if (!raw) return null;
    const cached = JSON.parse(raw);
    if (cached.schemaVersion !== APP_CACHE_SCHEMA_VERSION) return null;
    if (!Array.isArray(cached.fixtures) || !Array.isArray(cached.standingsHistory)) return null;
    return cached;
  } catch {
    return null;
  }
}

function saveCachedState({ markAutoRefresh = false } = {}) {
  try {
    const now = Date.now();
    const previous = loadCachedState();
    localStorage.setItem(
      APP_STATE_CACHE_KEY,
      JSON.stringify({
        schemaVersion: APP_CACHE_SCHEMA_VERSION,
        savedAt: now,
        lastAutoRefreshDate: markAutoRefresh
          ? todayCacheKey()
          : previous?.lastAutoRefreshDate || null,
        ...currentAppState(),
      }),
    );
  } catch {
    // Cache is an optimization; the app still works with seeded data.
  }
}

function shouldAutoRefreshToday(cached) {
  return !cached || cached.lastAutoRefreshDate !== todayCacheKey();
}

function cacheAgeText(cached) {
  if (!cached?.savedAt) return "";
  const ageMs = Date.now() - cached.savedAt;
  if (ageMs < 60000) return "just now";
  if (ageMs < 3600000) return `${Math.floor(ageMs / 60000)}m ago`;
  if (ageMs < APP_CACHE_MAX_AGE_MS) return `${Math.floor(ageMs / 3600000)}h ago`;
  return "over 24h ago";
}

function initializeApp() {
  const cached = loadCachedState();
  if (cached) {
    applyAppState(cached);
    dataStatus.textContent = `Loaded cached fixtures from ${cacheAgeText(cached)}`;
  }

  renderApp();

  if (AUTO_REFRESH_ON_LOAD && shouldAutoRefreshToday(cached)) {
    refreshFixtures({ automatic: true });
  } else if (cached) {
    dataStatus.textContent = `Using today's cached fixtures. Last updated ${cacheAgeText(cached)}`;
  }
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator) || window.location.protocol === "file:") return;
  navigator.serviceWorker.register("sw.js").catch(() => {});
}

async function refreshFixtures({ automatic = false } = {}) {
  if (isRefreshing) return;
  isRefreshing = true;
  refreshButton.disabled = true;
  dataStatus.textContent = automatic ? "Checking latest fixtures..." : "Checking tournament feeds...";
  let shouldRender = false;

  try {
    const [fetchedGroups, fetchedStandings, fetchedTopScorer, fetchedTopAssister] = await Promise.all([
      Promise.all(COMPETITIONS.map(fetchCompetitionFixtures)),
      fetchStandings(),
      fetchTopScorer(),
      fetchTopAssister(),
    ]);
    const fetched = fetchedGroups.flat();
    const nextState = {
      fixtures: mergeFixtures(fetched),
      standingsHistory: fetchedStandings.length ? fetchedStandings : standingsHistory,
      topScorer: fetchedTopScorer || topScorer,
      topAssister: fetchedTopAssister || topAssister,
    };
    shouldRender = stateSignature(currentAppState()) !== stateSignature(nextState);
    applyAppState(nextState);
    saveCachedState({ markAutoRefresh: true });
    const checkedAt = new Date().toLocaleString([], {
      dateStyle: "medium",
      timeStyle: "short",
    });
    dataStatus.textContent = shouldRender ? `Updated ${checkedAt}` : `Already up to date ${checkedAt}`;
  } catch (error) {
    const cached = loadCachedState();
    if (cached) {
      applyAppState(cached);
      dataStatus.textContent = `Live refresh failed. Showing cached fixtures from ${cacheAgeText(cached)}`;
    } else {
      dataStatus.textContent = "Live refresh needs the serverless proxy. Showing seeded fixtures.";
      fixtures = [...SEEDED_PRE_SEASON_FIXTURES, ...SEEDED_FIXTURES, ...PENDING_TOURNAMENTS];
      syncDefaultCompetition();
    }
    shouldRender = true;
  } finally {
    isRefreshing = false;
    refreshButton.disabled = false;
    if (shouldRender) renderApp();
  }
}

async function fetchLiveJson(pathAndQuery, { optional = false } = {}) {
  const liveUrl = `${LIVE_API_ORIGIN}${pathAndQuery}`;
  const attempts = liveFetchAttempts(liveUrl);
  let lastError = null;

  for (const requestUrl of attempts) {
    try {
      const response = await fetch(requestUrl);
      if (!response.ok) {
        lastError = new Error(`Live API returned ${response.status}`);
        continue;
      }
      return response.json();
    } catch (error) {
      lastError = error;
    }
  }

  if (optional) return null;
  throw lastError || new Error("Live API request failed");
}

function liveFetchAttempts(liveUrl) {
  if (window.location.protocol === "http:" || window.location.protocol === "https:") {
    const proxyUrl = new URL(LIVE_API_PROXY, window.location.origin);
    proxyUrl.searchParams.set("url", liveUrl);
    return [proxyUrl.toString(), liveUrl];
  }

  return [liveUrl];
}

async function fetchStandings() {
  const payload = await fetchLiveJson("/football/standings?comps=1&compSeasons=841&altIds=true");
  return (payload.tables || []).map((table) => ({
    gameweek: table.gameWeek || 0,
    entries: (table.entries || []).map((entry) =>
      createStandingEntry(
        entry.position,
        entry.team?.name || "Unknown club",
        entry.team?.shortName || entry.team?.name || "Unknown",
        entry.team?.id,
        entry.team?.altIds?.opta,
        {
          played: entry.overall?.played ?? 0,
          won: entry.overall?.won ?? entry.overall?.wins ?? 0,
          drawn: entry.overall?.drawn ?? entry.overall?.draws ?? 0,
          lost: entry.overall?.lost ?? entry.overall?.losses ?? 0,
          goalsFor: entry.overall?.goalsFor ?? entry.overall?.goalsScored ?? 0,
          goalsAgainst: entry.overall?.goalsAgainst ?? entry.overall?.goalsConceded ?? 0,
          gd: entry.overall?.goalsDifference ?? 0,
          points: entry.overall?.points ?? 0,
        },
      ),
    ),
  }));
}

async function fetchTopScorer() {
  const payload = await fetchLiveJson(
    "/football/stats/ranked/players/goals?comps=1&compSeasons=841&page=0&pageSize=1&altIds=true",
    { optional: true },
  );
  if (!payload) return null;

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
  const payload = await fetchLiveJson(
    "/football/stats/ranked/players/goal_assist?comps=1&compSeasons=841&page=0&pageSize=1&altIds=true",
    { optional: true },
  );
  if (!payload) return null;

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

  const payload = await fetchLiveJson(`/football/fixtures?${params}`);
  const detailed = await Promise.all(
    (payload.content || []).map(async (fixture) => {
      if (fixture.status !== "C") return fixture;
      return fetchFixtureDetail(fixture.id).catch(() => fixture);
    }),
  );
  return detailed.map((fixture) => normalizeFixture(fixture, competition.name, competition.id, seasonId));
}

async function fetchFixtureDetail(fixtureId) {
  return fetchLiveJson(`/football/fixtures/${fixtureId}?altIds=true`);
}

async function findSeasonId(competition) {
  const payload = await fetchLiveJson(
    `/football/competitions/${competition.id}/compseasons?page=0&pageSize=80&altIds=true`,
    { optional: true },
  );
  if (!payload) return null;

  const seasons = payload.content || [];
  const exactSeason = seasons.find(isTargetSeason);
  return exactSeason?.id || null;
}

function isTargetSeason(season) {
  const label = [season.label, season.description, season.name].filter(Boolean).join(" ");
  return TARGET_SEASON_PATTERN.test(label);
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
  const homeAway = competitionName === PRE_SEASON_NAME
    ? "neutral"
    : homeTeam?.id === UNITED.id
      ? "home"
      : "away";

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
    homeAway,
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
  [...SEEDED_PRE_SEASON_FIXTURES, ...SEEDED_FIXTURES, ...fetched].forEach((fixture) => {
    byKey.set(`${fixture.competitionId}-${fixture.id}`, fixture);
  });

  const merged = Array.from(byKey.values());
  const competitionsWithFixtures = new Set(merged.map((fixture) => fixture.competition));
  PENDING_TOURNAMENTS.forEach((pending) => {
    if (!competitionsWithFixtures.has(pending.competition)) merged.push(pending);
  });
  return merged;
}

document.querySelectorAll(".venue-filter").forEach((button) => {
  button.addEventListener("click", () => {
    // Prevent clicking disabled venue filters
    if (button.disabled) return;
    
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

document.querySelectorAll(".table-filter").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".table-filter").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    activeDashboardTable = button.dataset.tableFilter;
    renderLeagueTable();
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

function isPullRefreshAvailable() {
  return (
    window.matchMedia("(max-width: 1180px)").matches &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0)
  );
}

function isPageScrolledToTop() {
  const scroller = document.scrollingElement || document.documentElement;
  return scroller.scrollTop <= 0;
}

function setupPullToRefresh() {
  document.addEventListener(
    "touchstart",
    (event) => {
      if (!isPullRefreshAvailable() || !isPageScrolledToTop() || event.touches.length !== 1) {
        pullStartY = null;
        return;
      }

      pullStartY = event.touches[0].clientY;
      pullDistance = 0;
      pullReady = false;
    },
    { passive: true },
  );

  document.addEventListener(
    "touchmove",
    (event) => {
      if (!isPullRefreshAvailable() || event.touches.length !== 1) return;
      if (!isPageScrolledToTop()) {
        pullStartY = null;
        pullDistance = 0;
        pullReady = false;
        return;
      }

      if (pullStartY === null) {
        pullStartY = event.touches[0].clientY;
      }

      pullDistance = event.touches[0].clientY - pullStartY;
      pullReady = pullDistance >= PULL_REFRESH_THRESHOLD;
    },
    { passive: true },
  );

  document.addEventListener(
    "touchend",
    () => {
      if (pullReady && !isRefreshing) {
        refreshFixtures();
      }

      pullStartY = null;
      pullDistance = 0;
      pullReady = false;
    },
    { passive: true },
  );
}

setupPullToRefresh();

registerServiceWorker();

completedToggle.classList.toggle("is-active", showCompleted);
completedToggle.textContent = showCompleted ? "Hide completed" : "Show completed";

initializeApp();
