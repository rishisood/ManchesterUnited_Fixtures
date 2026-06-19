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

const PENDING_TOURNAMENTS = COMPETITIONS.filter((competition) => !competition.seeded).map(
  (competition, index) => ({
    id: `pending-${competition.id}`,
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
    competition: competition.name,
    competitionId: competition.id,
    seasonId: null,
    pending: true,
  }),
);

let fixtures = [...SEEDED_FIXTURES, ...PENDING_TOURNAMENTS];
let activeCompetition = "all";
let activeVenue = "all";
let searchTerm = "";

const grid = document.querySelector("#fixture-grid");
const template = document.querySelector("#fixture-card-template");
const dataStatus = document.querySelector("#data-status");
const refreshButton = document.querySelector("#refresh-button");
const searchInput = document.querySelector("#search-input");

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

function render() {
  const filtered = fixtures
    .filter((fixture) => activeCompetition === "all" || fixture.competition === activeCompetition)
    .filter((fixture) => activeVenue === "all" || fixture.homeAway === activeVenue)
    .filter((fixture) => {
      const haystack = [
        fixture.home,
        fixture.away,
        fixture.opponent,
        fixture.venue,
        fixture.city,
        fixture.competition,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(searchTerm.toLowerCase());
    })
    .sort((a, b) => a.timestamp - b.timestamp);

  grid.innerHTML = "";

  if (!filtered.length) {
    grid.innerHTML = `<div class="empty-state">No fixtures match the current filters.</div>`;
    updateSummary(filtered);
    return;
  }

  filtered.forEach((fixture) => grid.appendChild(createCard(fixture)));
  updateSummary(filtered);
}

function createCard(fixture) {
  const node = template.content.firstElementChild.cloneNode(true);
  node.classList.add(fixture.homeAway);
  if (fixture.pending) node.classList.add("pending");

  const [homeNode, awayNode] = node.querySelectorAll(".team");
  const date = parseDateParts(fixture.date);

  node.querySelector(".competition-pill").textContent = fixture.competition;
  node.querySelector(".venue-pill").textContent =
    fixture.homeAway === "home" ? "Home" : fixture.homeAway === "away" ? "Away" : "Pending";
  node.querySelector(".match-date strong").textContent = date.primary;
  node.querySelector(".match-date span").textContent = date.secondary;

  fillTeam(homeNode, fixture.home, fixture.home === UNITED.name ? UNITED.opta : fixture.opponentOpta);
  fillTeam(awayNode, fixture.away, fixture.away === UNITED.name ? UNITED.opta : fixture.opponentOpta);

  node.querySelector(".venue").textContent =
    fixture.city && fixture.venue !== "Awaiting draw"
      ? `${fixture.venue}, ${fixture.city}`
      : fixture.venue;
  node.querySelector(".round").textContent = fixture.matchweek
    ? `Matchweek ${fixture.matchweek}`
    : "To be confirmed";

  return node;
}

function fillTeam(node, name, optaId) {
  const img = node.querySelector("img");
  img.src = crestUrl(optaId);
  img.alt = `${name} crest`;
  img.loading = "lazy";
  img.onerror = () => {
    img.src = crestUrl(null);
  };
  node.querySelector("span").textContent = name;
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
    ? parseDateParts(firstFixture.date).primary.replace(/^[A-Za-z]{3}\s/, "")
    : "TBC";
}

async function refreshFixtures() {
  refreshButton.disabled = true;
  dataStatus.textContent = "Checking tournament feeds...";

  try {
    const fetchedGroups = await Promise.all(COMPETITIONS.map(fetchCompetitionFixtures));
    const fetched = fetchedGroups.flat();
    fixtures = mergeFixtures(fetched);
    dataStatus.textContent = `Updated ${new Date().toLocaleString([], {
      dateStyle: "medium",
      timeStyle: "short",
    })}`;
  } catch (error) {
    dataStatus.textContent = "Live refresh blocked. Showing seeded PL fixtures.";
    fixtures = [...SEEDED_FIXTURES, ...PENDING_TOURNAMENTS];
  } finally {
    refreshButton.disabled = false;
    render();
  }
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
  return (payload.content || []).map((fixture) =>
    normalizeFixture(fixture, competition.name, competition.id, seasonId),
  );
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
  };
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
    render();
  });
});

searchInput.addEventListener("input", (event) => {
  searchTerm = event.target.value.trim();
  render();
});

refreshButton.addEventListener("click", refreshFixtures);

render();
