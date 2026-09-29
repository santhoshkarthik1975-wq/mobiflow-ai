# MobiFlow AI

**Predict. Optimize. Move.**

MobiFlow AI is a hackathon prototype for the problem statement **Urban Commute & Mobility Crisis**.

## What the prototype demonstrates

- Predictive congestion alerts
- Public transport crowd prediction
- Multi-modal route comparison
- Time / cost / crowd / carbon trade-offs
- City-wide Mobility Crisis Radar
- What-if intervention simulator
- Chennai-focused demo scenarios

> **Important:** The current prototype uses simulated mobility data for demonstration. It does not claim to provide live traffic or transit predictions.

## Tech Stack

- Next.js
- React
- Lucide React
- CSS
- Vercel-ready

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Import the repository into Vercel.
3. Framework preset: Next.js.
4. Build command: `next build`.
5. Deploy.

## Demo flow

1. Open the landing page.
2. Click **Plan my journey**.
3. Select a route and click **Analyze with MobiFlow AI**.
4. Show the congestion prediction and recommended route.
5. Open **Command Center**.
6. Show the crisis map.
7. Move the **What-if** slider and demonstrate the simulated intervention impact.

## Future scope

- Live traffic APIs
- GTFS public transport feeds
- Weather/event signals
- Real ML forecasting model
- Graph-based route optimization
- Citizen incident reporting
- Real-time WebSocket updates
