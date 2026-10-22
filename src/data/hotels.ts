// Datos de los hoteles de la cadena.
// Los campos marcados con TODO deben completarse con la información real
// de cada web (textos, fotos, servicios, contacto y enlace de reservas).

export type Lang = 'es' | 'en' | 'de';
export type Localized = Record<Lang, string>;

export interface Hotel {
  slug: string;
  name: string;
  location: string;
  website: string;
  bookingUrl?: string; // TODO: URL del motor de reservas
  adultsOnly?: boolean;
  tagline?: Localized; // TODO
  description?: Localized; // TODO
  amenities?: Localized[]; // TODO
  images: string[]; // TODO: rutas en /public/images/<slug>/
  phone?: string; // TODO
  email?: string; // TODO
  address?: string; // TODO
}

export const hotels: Hotel[] = [
  {
    slug: 'filicumis',
    name: 'Filicumis',
    location: 'Mallorca',
    website: 'https://filicumis.com/',
    images: [],
  },
  {
    slug: 'hotel-martorell',
    name: 'Hotel Martorell',
    location: 'Ses Salines',
    website: 'https://www.hotelmartorell.com/es',
    images: [],
  },
  {
    slug: 'sa-vall-de-son-macia',
    name: 'Sa Vall de Son Macià',
    location: 'Son Macià',
    website: 'http://www.savalldesonmacia.com/inicio/',
    images: [],
  },
  {
    slug: 'son-sampoli',
    name: 'Son Sampoli',
    location: 'Mallorca',
    website: 'https://www.sonsampoli.com/es',
    images: [],
  },
  {
    slug: 'son-sampoli-suites',
    name: 'Son Sampoli Suites',
    location: 'Mallorca',
    website: 'https://www.suites.sonsampoli.com/es',
    adultsOnly: true,
    images: [],
  },
  {
    slug: 'es-rafal-roig',
    name: 'Es Rafal Roig',
    location: 'Mallorca',
    website: 'https://www.esrafalroig.com/es',
    images: [],
  },
  {
    slug: 'marivent-porto-colom',
    name: 'Marivent Porto Colom',
    location: 'Portocolom',
    website: 'https://www.mariventportocolom.com/index-es.html',
    images: [],
  },
];
