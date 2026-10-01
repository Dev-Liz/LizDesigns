const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

/** Fetch published Strapi entries. The UI falls back to lib/content.js until a CMS is connected. */
export async function getCollection(collection, query = "") {
  if (!STRAPI_URL) return null;
  const response = await fetch(`${STRAPI_URL}/api/${collection}?${query}`, {
    headers: process.env.STRAPI_API_TOKEN ? { Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}` } : {},
    next: { revalidate: 3600 }
  });
  if (!response.ok) throw new Error(`Unable to load ${collection}`);
  return response.json();
}
