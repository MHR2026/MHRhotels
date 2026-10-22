import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://mhrhotels.com',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'de'],
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: true },
  },
  // URLs de la antigua web en WordPress
  redirects: {
    '/quienes-somos': '/es/#nosotros',
    '/como-lo-hacemos': '/es/#servicios',
    '/contacto': '/es/#contacto',
    '/politica-de-privacidad-cookies-y-aviso-legal': '/es/legal/',
    '/declaracion-de-accesibilidad': '/es/accesibilidad/',
  },
  vite: { plugins: [tailwindcss()] },
});
