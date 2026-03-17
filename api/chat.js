export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = String(process.env.ANTHROPIC_API_KEY || "").trim().replace(/^["']|["']$/g, "");
  if (!apiKey) {
    return res.status(500).json({ error: "Missing ANTHROPIC_API_KEY" });
  }

  const body = req.body || {};
  const requestedModel = body.model || "claude-haiku-4-5";
  const payload = {
    model: requestedModel,
    max_tokens: Number.isFinite(body.max_tokens) ? body.max_tokens : 400,
    system: body.system || "",
    messages: Array.isArray(body.messages) ? body.messages : []
  };

  async function callAnthropic(model) {
    return await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({ ...payload, model })
    });
  }

  try {
    let r = await callAnthropic(requestedModel);
    let data = await r.json().catch(() => null);

    if (!r.ok) {
      const errType = data?.error?.type;
      if (r.status === 404 || errType === "not_found_error") {
        const fallback = "claude-haiku-4-5";
        r = await callAnthropic(fallback);
        data = await r.json().catch(() => null);
      }
    }

    if (!r.ok) {
      return res.status(r.status).json({ error: "Anthropic error", details: data || null });
    }

    // Frontend expects { content: [{type:'text', text:'...'}] }
    return res.status(200).json({ content: data?.content || [] });
  } catch (e) {
    return res.status(500).json({ error: "Server error", details: String(e?.message || e) });
  }
}
