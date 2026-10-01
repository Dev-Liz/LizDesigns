# Strapi content API

Create this CMS with Strapi v5, then copy these collection schemas into `src/api/<collection>/content-types/<collection>/schema.json`.

The frontend works immediately from local fallback data. To connect Strapi, set `NEXT_PUBLIC_STRAPI_URL` and an optional read-only `STRAPI_API_TOKEN`; expose only published entries to the Public role and set a revalidation webhook to `POST /api/revalidate` when production content changes.

Collections are intentionally separated by editorial concern:

- `site-setting` — global identity, hero, contact and social profiles.
- `project` + `project-category` — portfolio work and filters.
- `tool` + `tool-category` — stack/toolbox content.
- `experience` — career timeline.
- `workflow-step` — coding approach.
- `blog-post` + `blog-category` — writing.
- `dribbble-shot` — curated external design explorations.
- `contact-inquiry` — private form submissions, not public.

Use Strapi components for `shared.seo`, `shared.social-link`, `shared.link`, and `shared.media-block` to avoid repeating structures.
