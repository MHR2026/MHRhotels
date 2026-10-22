import type { APIRoute } from 'astro';
import { hotels } from '../data/hotels';
import { languages } from '../i18n/ui';

const langs = Object.keys(languages);
const pages = ['', 'propietarios/', 'legal/', 'accesibilidad/', ...hotels.map((h) => `establecimientos/${h.slug}/`)];

export const GET: APIRoute = ({ site }) => {
  const url = (lang: string, page: string) => new URL(`/${lang}/${page}`, site).href;
  const entries = pages.flatMap((page) =>
    langs.map(
      (lang) => `  <url>
    <loc>${url(lang, page)}</loc>
${langs.map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${url(l, page)}"/>`).join('\n')}
    <xhtml:link rel="alternate" hreflang="x-default" href="${url('es', page)}"/>
  </url>`,
    ),
  );
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
