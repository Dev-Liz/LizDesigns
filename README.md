# Liz Bassey Portfolio

A Next.js, React, Tailwind CSS and Motion portfolio for Liz Bassey: frontend developer, UX-minded product thinker, and documentation engineer.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Copy `.env.example` to `.env.local` to connect a Strapi API and enable the AI response route. Without either integration, the portfolio runs from its local curated content data and the Ask Liz panel supplies a relevant offline answer.

## Structure

- `app/` — Next App Router pages and the protected server-side Ask Liz route.
- `components/` — the landing page, theme switching and AI search dialog.
- `lib/content.js` — meaningful fallback/seed data, ready to replace with Strapi responses.
- `lib/strapi.js` — cached REST client for published Strapi entries.
- `cms/` — Strapi v5 schema definitions and setup notes.

## CMS setup

See [cms/README.md](cms/README.md). Create the Strapi app separately, then place the schema files in its `src` folder. The data model splits global settings, projects, categories, tools, workflow, experience, blog content, Dribbble curation, and private contact inquiries.

## AI answers

`POST /api/ask` never exposes `OPENAI_API_KEY` to the client. Before deploying, add rate limiting and replace the local knowledge array with an embedding search built from published Strapi content if the corpus becomes large.
