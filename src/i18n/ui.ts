import type { Lang } from '../data/hotels';

export const languages: Record<Lang, string> = { es: 'Español', en: 'English', de: 'Deutsch' };

export const ui = {
  es: {
    'nav.hotels': 'Hoteles',
    'nav.about': 'Nosotros',
    'nav.contact': 'Contacto',
    'cta.book': 'Reservar',
    'cta.discover': 'Descubrir',
    'cta.website': 'Web del hotel',
    'hero.title': 'Hoteles con alma mediterránea en Mallorca',
    'hero.subtitle': 'Una colección de hoteles con carácter propio, entre el mar y la tierra.',
    'hotels.title': 'Nuestros hoteles',
    'hotels.adultsOnly': 'Solo adultos',
    'about.title': 'Sobre MHR Hotels',
    'about.text': 'Texto pendiente: historia y filosofía de la cadena.',
    'contact.title': 'Contacto',
    'contact.text': 'Datos de contacto pendientes.',
    'hotel.amenities': 'Servicios',
    'hotel.pending': 'Contenido pendiente de migrar desde la web actual.',
    'hotel.back': 'Todos los hoteles',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.legal': 'Aviso legal',
    'footer.privacy': 'Privacidad',
    'footer.cookies': 'Cookies',
  },
  en: {
    'nav.hotels': 'Hotels',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'cta.book': 'Book now',
    'cta.discover': 'Discover',
    'cta.website': 'Hotel website',
    'hero.title': 'Hotels with a Mediterranean soul in Mallorca',
    'hero.subtitle': 'A collection of hotels with their own character, between the sea and the countryside.',
    'hotels.title': 'Our hotels',
    'hotels.adultsOnly': 'Adults only',
    'about.title': 'About MHR Hotels',
    'about.text': 'Pending text: history and philosophy of the group.',
    'contact.title': 'Contact',
    'contact.text': 'Contact details pending.',
    'hotel.amenities': 'Amenities',
    'hotel.pending': 'Content pending migration from the current website.',
    'hotel.back': 'All hotels',
    'footer.rights': 'All rights reserved.',
    'footer.legal': 'Legal notice',
    'footer.privacy': 'Privacy',
    'footer.cookies': 'Cookies',
  },
  de: {
    'nav.hotels': 'Hotels',
    'nav.about': 'Über uns',
    'nav.contact': 'Kontakt',
    'cta.book': 'Buchen',
    'cta.discover': 'Entdecken',
    'cta.website': 'Hotel-Website',
    'hero.title': 'Hotels mit mediterraner Seele auf Mallorca',
    'hero.subtitle': 'Eine Sammlung von Hotels mit eigenem Charakter, zwischen Meer und Land.',
    'hotels.title': 'Unsere Hotels',
    'hotels.adultsOnly': 'Nur für Erwachsene',
    'about.title': 'Über MHR Hotels',
    'about.text': 'Text ausstehend: Geschichte und Philosophie der Gruppe.',
    'contact.title': 'Kontakt',
    'contact.text': 'Kontaktdaten ausstehend.',
    'hotel.amenities': 'Ausstattung',
    'hotel.pending': 'Inhalte werden von der aktuellen Website übernommen.',
    'hotel.back': 'Alle Hotels',
    'footer.rights': 'Alle Rechte vorbehalten.',
    'footer.legal': 'Impressum',
    'footer.privacy': 'Datenschutz',
    'footer.cookies': 'Cookies',
  },
} as const;

export type UIKey = keyof (typeof ui)['es'];

export function useTranslations(lang: Lang) {
  return (key: UIKey) => ui[lang][key] ?? ui.es[key];
}

export const langPaths = () => (Object.keys(languages) as Lang[]).map((lang) => ({ params: { lang } }));
