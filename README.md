# MHR Hotels — web

Web de la cadena MHR Hotels (Mallorca), hecha con [Astro](https://astro.build) + Tailwind CSS.
Sustituye a la web anterior en WordPress: es estática, rápida y no necesita plugins ni base de datos.

## Uso

```bash
npm install
npm run dev      # desarrollo en http://localhost:4321
npm run build    # genera la web en dist/
```

## Dónde se edita el contenido

- `src/data/hotels.ts` — los hoteles: nombre, zona, textos, servicios, fotos, contacto y enlace de reservas.
- `src/i18n/ui.ts` — textos generales en español, inglés y alemán.
- `public/images/<hotel>/` — fotos de cada hotel.

## Pendiente

Migrar el contenido real (textos, fotos, contacto, motor de reservas) de las webs actuales de cada hotel.
