# Mtaani Love Connect

Location-based dating website for people in Kenya.

## Features

- User profiles with photos, bio, interests
- GPS / location-based matching
- County filters (Nairobi, Mombasa, Kisumu, Kiambu, etc.)
- Swipe / Like / Match UI
- Chat (placeholder)
- Kenyan localization: Sheng vibes, M-Pesa ready
- Safety tools (report/block planned)

## Tech Stack

- Frontend: Next.js 16 + React + Tailwind CSS
- Hosting: Netlify (continuous deploy from GitHub)
- Future backend: Node.js / Supabase or Firebase for auth, real-time chat, database

## Getting Started

```bash
npm install
npm run dev
```

## Deploy

Connect this repo to Netlify. Build command: `npm run build`. The Netlify Next.js plugin is included.

## Roadmap

1. Authentication (email / phone / Google)
2. Real profile creation & photo upload
3. Actual geolocation distance calculation
4. Real-time chat (Socket.io or Supabase)
5. Matching algorithm
6. Notifications
7. Premium subscriptions with M-Pesa
8. Admin moderation & safety reports
