const FOOTBALL_DATA_ORIGIN = "https://api.football-data.org";
const COMPETITION_CODE = "CL";
const UNITED_FOOTBALL_DATA_ID = 66;
const CACHE_TTL_MS = 15 * 60 * 1000;

let cachedPayload = null;
let cachedAt = 0;

exports.handler = async () => {
  const token = process.env.FOOTBALL_DATA_TOKEN;
  if (!token) {
    return jsonResponse(503, {
      error: "Missing FOOTBALL_DATA_TOKEN",
      message: "Add a football-data.org token in Netlify to enable Champions League refresh.",
    });
  }

  if (cachedPayload && Date.now() - cachedAt < CACHE_TTL_MS) {
    return jsonResponse(200, cachedPayload, true);
  }

  try {
    const season = currentChampionsLeagueSeason();
    const [matchesPayload, standingsPayload, teamsPayload] = await Promise.all([
      fetchOptionalFootballData(`/v4/competitions/${COMPETITION_CODE}/matches?season=${season}`, token),
      fetchOptionalFootballData(`/v4/competitions/${COMPETITION_CODE}/standings?season=${season}`, token),
      fetchFootballData(`/v4/competitions/${COMPETITION_CODE}/teams?season=${season}`, token),
    ]);

    const teamMap = createTeamMap(teamsPayload.teams || []);
    const standings = normalizeStandings(standingsPayload?.standings || [], teamMap, teamsPayload.teams || []);
    const fixtures = normalizeUnitedFixtures(matchesPayload?.matches || [], teamMap, season);

    cachedPayload = {
      competition: {
        code: COMPETITION_CODE,
        name: "UEFA Champions League",
      },
      season,
      tableRound: standingsPayload?.standings?.[0]?.stage || "",
      updatedAt: new Date().toISOString(),
      fixtures,
      standings,
    };
    cachedAt = Date.now();

    return jsonResponse(200, cachedPayload, true);
  } catch (error) {
    return jsonResponse(502, {
      error: "Champions League feed unavailable",
      message: error.message,
    });
  }
};

async function fetchFootballData(pathAndQuery, token) {
  const response = await fetch(`${FOOTBALL_DATA_ORIGIN}${pathAndQuery}`, {
    headers: {
      accept: "application/json",
      "x-auth-token": token,
      "user-agent": "ManchesterUnited-Fixtures/1.0",
    },
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`football-data.org returned ${response.status}: ${body.slice(0, 160)}`);
  }

  return response.json();
}

async function fetchOptionalFootballData(pathAndQuery, token) {
  try {
    return await fetchFootballData(pathAndQuery, token);
  } catch {
    return null;
  }
}

function currentChampionsLeagueSeason(now = new Date()) {
  const month = now.getUTCMonth();
  return month >= 6 ? now.getUTCFullYear() : now.getUTCFullYear() - 1;
}

function createTeamMap(teams) {
  const map = new Map();
  teams.forEach((team) => {
    if (!team?.id) return;
    map.set(team.id, {
      id: team.id,
      name: team.name || team.shortName || team.tla || "Unknown club",
      shortName: team.shortName || team.tla || team.name || "Unknown",
      tla: team.tla || shortCode(team.name),
      crest: team.crest || "",
    });
  });
  return map;
}

function normalizeUnitedFixtures(matches, teamMap, season) {
  return matches
    .filter((match) => {
      const homeId = match.homeTeam?.id;
      const awayId = match.awayTeam?.id;
      return homeId === UNITED_FOOTBALL_DATA_ID || awayId === UNITED_FOOTBALL_DATA_ID;
    })
    .map((match) => normalizeFixture(match, teamMap, season))
    .sort((a, b) => a.timestamp - b.timestamp);
}

function normalizeFixture(match, teamMap, season) {
  const home = teamDetails(match.homeTeam, teamMap);
  const away = teamDetails(match.awayTeam, teamMap);
  const isHome = home.id === UNITED_FOOTBALL_DATA_ID;
  const opponent = isHome ? away : home;
  const utcDate = match.utcDate ? new Date(match.utcDate) : null;
  const score = normalizeScore(match.score);

  return {
    id: `ucl-${match.id}`,
    matchweek: match.matchday || null,
    date: utcDate ? formatFixtureDate(utcDate) : "Date TBC",
    timestamp: utcDate && !Number.isNaN(utcDate.getTime()) ? utcDate.getTime() : Number.MAX_SAFE_INTEGER,
    home: home.name,
    homeTeamId: appTeamId(home.id),
    homeOpta: null,
    homeCrest: home.crest,
    away: away.name,
    awayTeamId: appTeamId(away.id),
    awayOpta: null,
    awayCrest: away.crest,
    opponent: opponent.name,
    opponentShort: opponent.shortName,
    opponentAbbr: opponent.tla,
    opponentId: appTeamId(opponent.id),
    opponentOpta: null,
    opponentCrest: opponent.crest,
    venue: "Venue TBC",
    city: "",
    homeAway: isHome ? "home" : "away",
    competition: "UEFA Champions League",
    competitionId: 2,
    seasonId: season,
    status: normalizeStatus(match.status),
    phase: match.status || "",
    clockLabel: "",
    score,
    scorers: [],
    assists: [],
    lineups: null,
  };
}

function normalizeStandings(standings, teamMap, teams) {
  const table = standings.find((standing) => Array.isArray(standing.table) && standing.table.length)
    || standings[0]
    || null;
  const entries = (table?.table || []).map((entry) => {
    const team = teamDetails(entry.team, teamMap);
    return {
      position: entry.position,
      name: team.name,
      shortName: team.shortName,
      id: appTeamId(team.id),
      opta: null,
      crest: team.crest,
      played: entry.playedGames ?? 0,
      won: entry.won ?? 0,
      drawn: entry.draw ?? 0,
      lost: entry.lost ?? 0,
      goalsFor: entry.goalsFor ?? 0,
      goalsAgainst: entry.goalsAgainst ?? 0,
      gd: entry.goalDifference ?? 0,
      points: entry.points ?? 0,
    };
  });

  if (!entries.length) {
    teams
      .map((team) => teamDetails(team, teamMap))
      .sort((a, b) => a.name.localeCompare(b.name))
      .forEach((team, index) => {
        entries.push({
          position: index + 1,
          name: team.name,
          shortName: team.shortName,
          id: appTeamId(team.id),
          opta: null,
          crest: team.crest,
          played: 0,
          won: 0,
          drawn: 0,
          lost: 0,
          goalsFor: 0,
          goalsAgainst: 0,
          gd: 0,
          points: 0,
        });
      });
  }

  return {
    gameweek: null,
    roundLabel: table?.stage ? table.stage.replaceAll("_", " ") : "Qualified teams",
    entries,
  };
}

function teamDetails(team, teamMap) {
  const fromMap = teamMap.get(team?.id);
  return {
    id: team?.id || fromMap?.id || null,
    name: team?.name || fromMap?.name || "Unknown club",
    shortName: team?.shortName || fromMap?.shortName || team?.tla || team?.name || "Unknown",
    tla: team?.tla || fromMap?.tla || shortCode(team?.name),
    crest: team?.crest || fromMap?.crest || "",
  };
}

function normalizeScore(score) {
  const home = score?.fullTime?.home ?? score?.regularTime?.home ?? null;
  const away = score?.fullTime?.away ?? score?.regularTime?.away ?? null;
  if (home === null || away === null) return null;
  return { home, away };
}

function normalizeStatus(status) {
  if (status === "FINISHED") return "C";
  if (["IN_PLAY", "PAUSED"].includes(status)) return "LIVE";
  return "U";
}

function appTeamId(teamId) {
  if (!teamId) return null;
  return teamId === UNITED_FOOTBALL_DATA_ID ? 12 : `ucl-${teamId}`;
}

function formatFixtureDate(date) {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-GB", {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Europe/London",
      timeZoneName: "short",
    })
      .formatToParts(date)
      .map((part) => [part.type, part.value]),
  );

  return `${parts.weekday} ${parts.day} ${parts.month} ${parts.year}, ${parts.hour}:${parts.minute} ${parts.timeZoneName}`;
}

function shortCode(name = "") {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 3)
    .toUpperCase() || "TBC";
}

function jsonResponse(statusCode, body, cache = false) {
  return {
    statusCode,
    headers: {
      "access-control-allow-origin": "*",
      "cache-control": cache
        ? "public, max-age=900, s-maxage=3600, stale-while-revalidate=86400"
        : "no-store",
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
  };
}
