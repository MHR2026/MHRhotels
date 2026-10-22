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
| Página de captación de propietarios | `src/i18n/owners.ts` |
| Política de privacidad, cookies y aviso legal | `src/content/legal.es.html` |
| Declaración de accesibilidad | `src/content/accesibilidad.es.html` |
| Fotos | `public/images/<establecimiento>/` (la primera de la lista es la portada) |

## Páginas

- `/es/`, `/en/`, `/de/` — portada: quiénes somos, servicios, establecimientos y contacto.
- `/<idioma>/establecimientos/<hotel>/` — ficha de cada establecimiento.
- `/<idioma>/propietarios/` — captación de nuevos establecimientos, con formulario.
- `/<idioma>/legal/` y `/<idioma>/accesibilidad/`.
- Las URLs antiguas de WordPress (`/quienes-somos`, `/contacto`, …) redirigen a las nuevas.

## Reservas

Todos los establecimientos usan Octorate. El botón «Reservar» lleva al motor de Octorate
(`bookingUrl`) o, si no está definido, a la web del hotel.

## Publicación en IONOS (1&1)

La web compilada (`dist/`) es HTML estático: basta con subirla al hosting.
`public/.htaccess` configura Apache: fuerza `https://mhrhotels.com` (sin www), idioma de la portada
según el navegador, redirecciones de las URLs antiguas de WordPress, página 404, cabeceras de
seguridad, caché y `noindex` en cualquier subdominio de pruebas. Incluye `sitemap.xml` y `robots.txt`.
Las fuentes se sirven desde el propio servidor (sin Google Fonts).

El workflow `.github/workflows/deploy.yml` compila y sube la web por SFTP en cada cambio
de `main`. Necesita los secretos `SFTP_HOST`, `SFTP_USER`, `SFTP_PASSWORD` y `SFTP_PATH`
(Settings → Secrets and variables → Actions del repositorio). Conviene subirla a una
carpeta nueva (p. ej. `/mhrhotels-web`) y, cuando esté revisada, apuntar el dominio a esa
carpeta desde el panel de IONOS (Dominios → Destino), sin tocar el WordPress actual.

## Formulario de propietarios

`public/api/propietarios.php` recibe el formulario y lo envía por email a
`admin@mhrhotels.com` (constante `TO`) con remitente `admin@mhrhotels.com` (`FROM`, debe ser un buzón existente del dominio).
Necesita PHP en el hosting (IONOS lo incluye). Lleva un campo trampa contra bots y
redirige a `/<idioma>/propietarios/gracias/`.

Envío fiable por el correo de IONOS: copiar `public/api/config.sample.php` como
`mhr-form-config.php` en la carpeta que contiene la web (un nivel por encima), con la
contraseña del buzón. Sin ese fichero se usa `mail()`.
Diagnóstico: `/api/propietarios.php?check=1`. Errores: `api/errores.log` (bloqueado desde la web).
