# MHR Hotels — web

Web de MHR Hotels (Mallorca), hecha con [Astro](https://astro.build) + Tailwind CSS.
Sustituye a la web anterior en WordPress: es estática, rápida, sin plugins ni base de datos.

## Uso

```bash
npm install
npm run dev      # desarrollo en http://localhost:4321
npm run build    # genera la web en dist/ (lista para Netlify, Vercel, Cloudflare Pages…)
```

## Dónde se edita el contenido

| Qué | Dónde |
| --- | --- |
| Establecimientos (textos, habitaciones, servicios, fotos, contacto, enlace de reserva) | `src/data/hotels.ts` |
| Datos de la empresa (dirección, email, teléfono, CIF) | `company` en `src/data/hotels.ts` |
| Textos generales en ES / EN / DE | `src/i18n/ui.ts` |
| Política de privacidad, cookies y aviso legal | `src/content/legal.es.html` |
| Declaración de accesibilidad | `src/content/accesibilidad.es.html` |
| Fotos | `public/images/<establecimiento>/` (la primera de la lista es la portada) |

## Páginas

- `/es/`, `/en/`, `/de/` — portada: quiénes somos, servicios, establecimientos y contacto.
- `/<idioma>/establecimientos/<hotel>/` — ficha de cada establecimiento.
- `/<idioma>/legal/` y `/<idioma>/accesibilidad/`.
- Las URLs antiguas de WordPress (`/quienes-somos`, `/contacto`, …) redirigen a las nuevas.

## Reservas

Todos los establecimientos usan Octorate. El botón «Reservar» lleva al motor de Octorate
(`bookingUrl`) o, si no está definido, a la web del hotel. Sa Vall no tiene web propia:
su botón abre un email de consulta.
