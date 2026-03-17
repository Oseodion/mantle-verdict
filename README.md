# Mantle Verdict (Vercel-ready)

This project is built for Vercel:

- Frontend: `public/index.html`
- Backend (serverless):
  - `POST /api/chat` → calls Anthropic (keeps your API key secret)
  - `POST /api/snapshot` → Snapshot GraphQL proxy

## Local run

1) Install:

```bash
npm install
```

2) Create `.env` (local only):

```bash
cp .env.example .env
```

Set your key in `.env`:

```txt
ANTHROPIC_API_KEY=sk-ant-...
```

3) Run locally:

```bash
npm run dev
```

Open the URL that `vercel dev` prints (usually `http://localhost:3000`).

## Deploy on Vercel (no API leaks)

1) Push this repo to GitHub.
2) In Vercel, “New Project” → import your GitHub repo.
3) In Vercel Project Settings → **Environment Variables**, add:
   - `ANTHROPIC_API_KEY` = your key
4) Deploy.

Never commit `.env` (it is ignored by `.gitignore`).

