export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const r = await fetch("https://hub.snapshot.org/graphql", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(req.body || {})
    });

    const text = await r.text();
    res.status(r.status);
    res.setHeader("content-type", "application/json; charset=utf-8");
    return res.send(text);
  } catch (e) {
    return res.status(502).json({ error: "Snapshot proxy failed", details: String(e?.message || e) });
  }
}

