const ALLOWED_ORIGIN = "https://footballapi.pulselive.com";

exports.handler = async (event) => {
  const target = event.queryStringParameters?.url;

  if (!target) {
    return jsonResponse(400, { error: "Missing url query parameter" });
  }

  let parsed;
  try {
    parsed = new URL(target);
  } catch {
    return jsonResponse(400, { error: "Invalid url query parameter" });
  }

  if (parsed.origin !== ALLOWED_ORIGIN || !parsed.pathname.startsWith("/football/")) {
    return jsonResponse(403, { error: "Blocked upstream URL" });
  }

  try {
    const upstream = await fetch(parsed.toString(), {
      headers: {
        accept: "application/json",
        "user-agent": "ManchesterUnited-Fixtures/1.0",
      },
    });
    const body = await upstream.text();

    return {
      statusCode: upstream.status,
      headers: {
        "access-control-allow-origin": "*",
        "cache-control": "public, max-age=300",
        "content-type": upstream.headers.get("content-type") || "application/json",
      },
      body,
    };
  } catch (error) {
    return jsonResponse(502, { error: "Premier League feed unavailable" });
  }
};

function jsonResponse(statusCode, body) {
  return {
    statusCode,
    headers: {
      "access-control-allow-origin": "*",
      "cache-control": "no-store",
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
  };
}
