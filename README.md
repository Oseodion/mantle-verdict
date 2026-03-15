# Mantle Verdict

> Your vote. Your verdict.

**Mantle Verdict** is an AI-powered governance tool built for the Mantle ecosystem. It pulls live proposals directly from Mantle's Snapshot governance space, breaks them down in plain English using AI, and helps any $MNT holder understand what they're voting on — before they vote.

Built for the **Mantle Squad Bounty: When AI Meets Mantle**.

---

## The Problem

Mantle governance proposals are long, technical, and written for insiders. Most $MNT holders skip voting not because they don't care — but because they don't understand what's at stake. Governance participation suffers and decisions get made by a small group of delegates.

## The Solution

Mantle Verdict makes every proposal accessible to everyone:

- **AI Breakdown** - plain English summary of what the proposal actually wants to do
- **If it passes / If it fails** - clear consequences on both sides
- **Live vote data** - real-time vote distribution pulled from Snapshot
- **Ask AI a question** - chat with AI scoped to the specific proposal you're reading
- **Vote on Snapshot** - one tap to go cast your real vote

## How It Works

```
Snapshot GraphQL API → Live proposals → Claude AI → Plain English breakdown
```

1. On load, the app fetches live proposals from `snapshot.org/#/bitdao.eth` (Mantle's official governance space)
2. Each proposal body is sent to Claude (Anthropic API) with a structured prompt
3. Claude returns a JSON breakdown: summary, for/against analysis
4. Users can ask follow-up questions in an inline chat scoped to the proposal

## Tech Stack

- **Frontend** - Vanilla HTML, CSS, JavaScript. No frameworks, no build step
- **AI** - Anthropic API (claude-haiku) with direct browser access
- **Governance data** - Snapshot GraphQL API (free, no API key needed)
- **Hosting** - GitHub Pages (free)

## Setup

1. Clone or download this repo
2. Open `index.html`
3. Replace `YOUR_API_KEY_HERE` with your [Anthropic API key](https://console.anthropic.com)
4. Open in browser or deploy to any static host

For the live demo, the API key is embedded for demonstration purposes as part of the Mantle bounty submission.

## Live Demo

[mantle-verdict.github.io/mantle-verdict](https://mantle-verdict.github.io/mantle-verdict)

## Why Mantle

Governance is one of the most important and most underserved areas in any blockchain ecosystem. Mantle has one of the largest DAO treasuries in crypto and an active governance process — but participation is low because complexity is high. Mantle Verdict directly addresses this gap by bringing AI into the governance flow, making every proposal readable and every vote informed.

---

Built with Claude AI · Data from [Mantle Governance](https://snapshot.org/#/bitdao.eth) · Submitted to Mantle Squad Bounty March 2026
