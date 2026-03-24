# InnerCircle Website

Separate marketing website for InnerCircle built with Next.js App Router and Tailwind CSS.

## Run locally

1. Install dependencies:

```bash
npm install
```

2. Set the main app destination:

```bash
cp .env.example .env.local
```

3. Start the site:

```bash
npm run dev
```

The marketing website supports `NEXT_PUBLIC_INNERCIRCLE_APP_URL` and also reads `NEXT_PUBLIC_MAIN_APP_URL` for compatibility.

Point that variable at the existing InnerCircle app base URL, for example:

```bash
NEXT_PUBLIC_INNERCIRCLE_APP_URL=http://localhost:3000
```

Login redirects to `/dashboard` in the main app.
Signup redirects to `/onboarding` in the main app.
