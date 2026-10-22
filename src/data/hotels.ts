// Establecimientos gestionados por MHR Hotels.
// Contenido migrado de la web de cada hotel (octubre 2026).
// Las fotos están en /public/images/<slug>/; la primera de la lista es la portada.

export type Lang = 'es' | 'en' | 'de';
export type Localized = Record<Lang, string>;

export interface Room {
  name: Localized;
  size?: string;
}

export interface Hotel {
  slug: string;
  name: string;
  type: Localized;
  location: string;
  adultsOnly?: boolean;
  tagline: Localized;
  description: Localized;
  rooms: Room[];
  amenities: Localized[];
  images: string[];
  address?: string;
  phone: string;
  email?: string;
  website?: string;
  bookingUrl?: string;
}

const img = (slug: string, ...files: (number | string)[]) =>
  files.map((f) => `/images/${slug}/${f}.webp`);

const t = (es: string, en: string, de: string): Localized => ({ es, en, de });

const GROUP_PHONE = '+34 971 824 914';
const OCTORATE = 'https://book.octorate.com/octobook/site/reservation/index.xhtml?codice=';

const agroturismo = t('Agroturismo', 'Agritourism', 'Agroturismo');

export const hotels: Hotel[] = [
  {
    slug: 'filicumis',
    name: 'Finca Filicumis',
    type: agroturismo,
    location: 'Lloseta · Serra de Tramuntana',
    tagline: t(
      'Finca de 1828 en las faldas de la Serra de Tramuntana.',
      'An 1828 estate at the foot of the Serra de Tramuntana.',
      'Ein Landgut von 1828 am Fuße der Serra de Tramuntana.',
    ),
    description: t(
      'Situada en un tranquilo valle en las faldas de la Serra de Tramuntana, la finca de Filicumis tiene 80 hectáreas de bosques y cultivos de almendros, olivos y naranjos. La edificación principal data de 1828 y, con su “clastra” (patio central con pozo), es hoy un modélico agroturismo que mantiene todo el encanto de las possessions mallorquinas gracias a una esmerada intervención arquitectónica. Filicumis mantiene su actividad agrícola y ganadera, y conserva su historia en un poblado talayótico y una cueva funeraria situados en la finca. Un lugar de descanso y evasión donde reencontrarse con la naturaleza.',
      'Set in a quiet valley at the foot of the Serra de Tramuntana, the Filicumis estate covers 80 hectares of woodland and almond, olive and orange groves. The main house dates from 1828 and, with its “clastra” (central courtyard with a well), is now a model agritourism that keeps all the charm of a traditional Mallorcan possessió thanks to a careful architectural restoration. Filicumis is still a working farm, and its history lives on in a Talayotic settlement and a burial cave on the estate. A place to rest, unwind and reconnect with nature.',
      'In einem ruhigen Tal am Fuße der Serra de Tramuntana gelegen, umfasst das Landgut Filicumis 80 Hektar Wald sowie Mandel-, Oliven- und Orangenhaine. Das Haupthaus stammt aus dem Jahr 1828 und ist mit seiner „Clastra“ (Innenhof mit Brunnen) heute ein vorbildliches Agroturismo, das dank einer sorgfältigen Restaurierung den ganzen Charme einer mallorquinischen Possessió bewahrt. Filicumis wird weiterhin landwirtschaftlich betrieben; eine talayotische Siedlung und eine Grabhöhle auf dem Gelände erzählen von seiner Geschichte. Ein Ort zum Entspannen und um die Natur neu zu entdecken.',
    ),
    rooms: [
      { name: t('S’Alcadena — vistas al huerto y las montañas', 'S’Alcadena — views over the orchard and mountains', 'S’Alcadena — Blick auf Garten und Berge') },
      { name: t('S’Estorell — amplio salón-comedor con cocina', 'S’Estorell — spacious living-dining room with kitchen', 'S’Estorell — großer Wohn-Essbereich mit Küche') },
      { name: t('Es Castellot — planta baja con acceso a la clastra', 'Es Castellot — ground floor opening onto the courtyard', 'Es Castellot — Erdgeschoss mit Zugang zum Innenhof') },
      { name: t('S’Aljub — terraza privada orientada al sur', 'S’Aljub — private south-facing terrace', 'S’Aljub — private Südterrasse') },
      { name: t('S’Era — terraza privada orientada al sur', 'S’Era — private south-facing terrace', 'S’Era — private Südterrasse') },
    ],
    amenities: [
      t('Piscina', 'Swimming pool', 'Pool'),
      t('Desayuno', 'Breakfast', 'Frühstück'),
      t('Finca agrícola con animales', 'Working farm with animals', 'Bauernhof mit Tieren'),
      t('Senderismo y ciclismo', 'Hiking and cycling', 'Wandern und Radfahren'),
    ],
    images: img('filicumis', 6, 4, 5, 1, 2, 3, 8, 9, 7),
    phone: GROUP_PHONE,
    website: 'https://filicumis.com/',
    bookingUrl: OCTORATE + '328744',
  },
  {
    slug: 'hotel-martorell',
    name: 'Hotel Martorell',
    type: t('Hotel', 'Hotel', 'Hotel'),
    location: 'Ses Salines · Colònia de Sant Jordi',
    tagline: t(
      'Un hotel acogedor cerca de las playas más bonitas del sur de la isla.',
      'A cosy hotel close to the most beautiful beaches in the south of the island.',
      'Ein gemütliches Hotel nahe den schönsten Stränden im Süden der Insel.',
    ),
    description: t(
      'En el sur de Mallorca, junto a la Colònia de Sant Jordi, el Hotel Martorell es el lugar ideal para unas vacaciones inolvidables. Ambiente acogedor, servicio cercano y una ubicación privilegiada cerca de las playas más bonitas de la isla: perfecto para quienes buscan relajarse y explorar.',
      'In the south of Mallorca, next to Colònia de Sant Jordi, Hotel Martorell is the perfect place for an unforgettable holiday. A welcoming atmosphere, friendly service and a privileged location near the island’s most beautiful beaches — ideal for both relaxing and exploring.',
      'Im Süden Mallorcas, nahe der Colònia de Sant Jordi, ist das Hotel Martorell der ideale Ort für einen unvergesslichen Urlaub. Gemütliche Atmosphäre, herzlicher Service und eine privilegierte Lage nahe den schönsten Stränden der Insel – perfekt zum Entspannen und Entdecken.',
    ),
    rooms: [
      { name: t('Habitación Doble con terraza privada y vista piscina', 'Double room with private terrace and pool view', 'Doppelzimmer mit privater Terrasse und Poolblick') },
      { name: t('Habitación Doble con terraza privada y vista calle', 'Double room with private terrace and street view', 'Doppelzimmer mit privater Terrasse und Straßenblick') },
      { name: t('Habitación Individual con terraza privada y vista calle', 'Single room with private terrace and street view', 'Einzelzimmer mit privater Terrasse und Straßenblick') },
    ],
    amenities: [
      t('Piscina', 'Swimming pool', 'Pool'),
      t('Desayuno incluido', 'Breakfast included', 'Frühstück inklusive'),
      t('Bar', 'Bar', 'Bar'),
      t('Terraza privada en todas las habitaciones', 'Private terrace in every room', 'Private Terrasse in allen Zimmern'),
    ],
    images: img('martorell', 7, 1, 2, 3, 4, 5, 6),
    address: 'Carrer Cervantes 2, 07638 Ses Salines',
    phone: GROUP_PHONE,
    email: 'info@mhrhotels.com',
    website: 'https://www.hotelmartorell.com/es',
  },
  {
    slug: 'sa-vall-de-son-macia',
    name: 'Agroturismo Sa Vall',
    type: agroturismo,
    location: 'Son Macià · Manacor',
    tagline: t(
      'Casa de campo mallorquina del siglo XVI rodeada de montañas.',
      'A restored 16th-century Mallorcan farmhouse surrounded by hills.',
      'Ein restauriertes mallorquinisches Landhaus aus dem 16. Jahrhundert.',
    ),
    description: t(
      'Una antigua casa de campo mallorquina del siglo XVI, restaurada con un estilo rústico y moderno, en el tranquilo pueblo de Son Macià, a unos 15 minutos de Manacor. Cuenta con cuatro apartamentos y dos habitaciones, todos con baño privado, y una gran terraza con piscina, hamacas y vistas a las montañas.',
      'A restored 16th-century Mallorcan farmhouse in a rustic-modern style, in the quiet village of Son Macià, about 15 minutes from Manacor. It offers four apartments and two rooms, all with private bathrooms, plus a large terrace with a pool, sun loungers and mountain views.',
      'Ein restauriertes mallorquinisches Landhaus aus dem 16. Jahrhundert im rustikal-modernen Stil, im ruhigen Dorf Son Macià, etwa 15 Minuten von Manacor entfernt. Vier Apartments und zwei Zimmer, alle mit eigenem Bad, dazu eine große Terrasse mit Pool, Liegen und Bergblick.',
    ),
    rooms: [
      { name: t('Habitación Doble con acceso a la piscina', 'Double room with pool access', 'Doppelzimmer mit Poolzugang') },
      { name: t('Estudio con terraza y vistas a la montaña', 'Studio with terrace and mountain views', 'Studio mit Terrasse und Bergblick') },
    ],
    amenities: [
      t('Piscina', 'Swimming pool', 'Pool'),
      t('Wifi gratis', 'Free Wi-Fi', 'Kostenloses WLAN'),
      t('Aparcamiento gratuito', 'Free parking', 'Kostenlose Parkplätze'),
      t('Apartamentos con cocina equipada', 'Apartments with fully equipped kitchen', 'Apartments mit voll ausgestatteter Küche'),
    ],
    images: img('sa-vall-de-son-macia', 1, 2, 3, 4, 5),
    address: '07509 Son Macià, Manacor',
    phone: GROUP_PHONE,
    website: 'http://www.savalldesonmacia.com/',
  },
  {
    slug: 'son-sampoli',
    name: 'Agroturismo Son Sampoli',
    type: agroturismo,
    location: 'Llucmajor',
    tagline: t(
      'Un refugio de tranquilidad en el corazón de Llucmajor.',
      'A haven of tranquillity in the heart of Llucmajor.',
      'Eine Oase der Ruhe im Herzen von Llucmajor.',
    ),
    description: t(
      'Son Sampoli es un lugar donde la tradición mallorquina se une con el confort moderno para ofrecer una experiencia inolvidable de agroturismo. Situado en un entorno rural privilegiado, es el destino perfecto para desconectar y disfrutar de la auténtica esencia de la isla.',
      'Son Sampoli is a place where Mallorcan tradition meets modern comfort for an unforgettable agritourism experience. Set in a privileged rural setting, it is the perfect place to switch off and enjoy the authentic essence of the island.',
      'Auf Son Sampoli verbinden sich mallorquinische Tradition und moderner Komfort zu einem unvergesslichen Agroturismo-Erlebnis. In privilegierter ländlicher Lage ist es der perfekte Ort, um abzuschalten und die authentische Seele der Insel zu genießen.',
    ),
    rooms: [
      { name: t('Apartamento Cuádruple con terraza', 'Quadruple apartment with terrace', 'Apartment für 4 Personen mit Terrasse'), size: '60 m²' },
      { name: t('Apartamento Doble con terraza', 'Double apartment with terrace', 'Apartment für 2 Personen mit Terrasse'), size: '40 m²' },
      { name: t('Habitación Doble con terraza y desayuno', 'Double room with terrace and breakfast', 'Doppelzimmer mit Terrasse und Frühstück'), size: '35 m²' },
      { name: t('Habitación Doble con desayuno', 'Double room with breakfast', 'Doppelzimmer mit Frühstück'), size: '30 m²' },
    ],
    amenities: [
      t('Piscina', 'Swimming pool', 'Pool'),
      t('Desayuno', 'Breakfast', 'Frühstück'),
      t('Bar', 'Bar', 'Bar'),
      t('Cuna y cama supletoria', 'Cot and extra bed', 'Kinderbett und Zustellbett'),
    ],
    images: img('son-sampoli', 5, 1, 2, 3, 4, 6, 8),
    address: 'Camí de Son Pons 16, 07620 Llucmajor',
    phone: GROUP_PHONE,
    email: 'info@mhrhotels.com',
    website: 'https://www.sonsampoli.com/es',
  },
  {
    slug: 'son-sampoli-suites',
    name: 'Suites Son Sampoli',
    type: t('Hotel boutique', 'Boutique hotel', 'Boutique-Hotel'),
    location: 'Llucmajor',
    adultsOnly: true,
    tagline: t(
      'Exclusividad y tranquilidad, solo para adultos.',
      'Exclusivity and tranquillity, for adults only.',
      'Exklusivität und Ruhe, nur für Erwachsene.',
    ),
    description: t(
      'Suites Son Sampoli es un refugio diseñado exclusivamente para adultos, donde el lujo, la serenidad y la belleza natural de Mallorca se combinan para ofrecer una experiencia inolvidable. Un espacio pensado para desconectar, relajarse y disfrutar de un ambiente sofisticado, rodeado de la esencia auténtica de la isla.',
      'Suites Son Sampoli is a retreat designed exclusively for adults, where luxury, serenity and Mallorca’s natural beauty come together for an unforgettable stay. A space to switch off, relax and enjoy a sophisticated atmosphere, surrounded by the authentic essence of the island.',
      'Suites Son Sampoli ist ein Rückzugsort exklusiv für Erwachsene, an dem Luxus, Gelassenheit und die natürliche Schönheit Mallorcas zu einem unvergesslichen Aufenthalt verschmelzen. Ein Ort zum Abschalten und Entspannen in stilvoller Atmosphäre, umgeben von der authentischen Seele der Insel.',
    ),
    rooms: [
      { name: t('Suite de 2 habitaciones con terraza y vistas', 'Two-bedroom suite with terrace and views', 'Suite mit 2 Schlafzimmern, Terrasse und Aussicht'), size: '70 m²' },
      { name: t('Suite de 1 habitación con terraza y vistas', 'One-bedroom suite with terrace and views', 'Suite mit 1 Schlafzimmer, Terrasse und Aussicht'), size: '45 m²' },
      { name: t('Habitación Doble con terraza grande y vistas', 'Double room with large terrace and views', 'Doppelzimmer mit großer Terrasse und Aussicht'), size: '35 m²' },
      { name: t('Habitación Doble con terraza y vistas', 'Double room with terrace and views', 'Doppelzimmer mit Terrasse und Aussicht'), size: '31 m²' },
      { name: t('Habitación Doble', 'Double room', 'Doppelzimmer'), size: '22 m²' },
    ],
    amenities: [
      t('Solo adultos', 'Adults only', 'Nur für Erwachsene'),
      t('Desayuno', 'Breakfast', 'Frühstück'),
      t('Bar', 'Bar', 'Bar'),
      t('Eventos', 'Events', 'Veranstaltungen'),
    ],
    images: img('son-sampoli-suites', 3, 4, 2),
    address: 'Camí de Binificat, buzón 38, 07620 Llucmajor',
    phone: GROUP_PHONE,
    email: 'info@mhrhotels.com',
    website: 'https://www.suites.sonsampoli.com/es',
  },
  {
    slug: 'es-rafal-roig',
    name: 'Agroturismo Es Rafal Roig',
    type: agroturismo,
    location: 'Manacor',
    tagline: t(
      'El sitio ideal para unas vacaciones en familia.',
      'The perfect place for a family holiday.',
      'Der ideale Ort für Familienurlaub.',
    ),
    description: t(
      'Es Rafal Roig es un agroturismo pensado para familias, a pocos kilómetros de Manacor. Cuenta con nueve apartamentos y estudios independientes, de 30 a 80 m², rodeados de campo mallorquín y con una gran piscina.',
      'Es Rafal Roig is a family-friendly agritourism just a few kilometres from Manacor. It has nine independent apartments and studios, from 30 to 80 m², surrounded by Mallorcan countryside and with a large swimming pool.',
      'Es Rafal Roig ist ein familienfreundliches Agroturismo nur wenige Kilometer von Manacor entfernt. Neun unabhängige Apartments und Studios von 30 bis 80 m², umgeben von mallorquinischer Landschaft und mit großem Pool.',
    ),
    rooms: [
      { name: t('Apartamento 2 Es Verd', 'Apartment 2 Es Verd', 'Apartment 2 Es Verd'), size: '80 m²' },
      { name: t('Apartamento 3 Es Blau', 'Apartment 3 Es Blau', 'Apartment 3 Es Blau'), size: '70 m²' },
      { name: t('Apartamento 9 Es Nou', 'Apartment 9 Es Nou', 'Apartment 9 Es Nou'), size: '69 m²' },
      { name: t('Apartamento 5 S’Aboal', 'Apartment 5 S’Aboal', 'Apartment 5 S’Aboal'), size: '67 m²' },
      { name: t('Estudio 8 Es Nord', 'Studio 8 Es Nord', 'Studio 8 Es Nord'), size: '50 m²' },
      { name: t('Apartamento 7 Es Cestador', 'Apartment 7 Es Cestador', 'Apartment 7 Es Cestador'), size: '48 m²' },
      { name: t('Estudio 1', 'Studio 1', 'Studio 1'), size: '45 m²' },
      { name: t('Apartamento 4 Es Graner', 'Apartment 4 Es Graner', 'Apartment 4 Es Graner'), size: '40 m²' },
      { name: t('Estudio 6 Es Galiner', 'Studio 6 Es Galiner', 'Studio 6 Es Galiner'), size: '30 m²' },
    ],
    amenities: [
      t('Piscina', 'Swimming pool', 'Pool'),
      t('Ideal para familias', 'Ideal for families', 'Ideal für Familien'),
      t('9 apartamentos independientes', '9 independent apartments', '9 unabhängige Apartments'),
    ],
    images: img('es-rafal-roig', 1, 4, 2, 3),
    address: 'Es Rafal Roig, 07500 Manacor',
    phone: GROUP_PHONE,
    email: 'info@esrafalroig.com',
    website: 'https://www.esrafalroig.com/es',
  },
  {
    slug: 'mar-i-vent-portocolom',
    name: 'Mar i Vent Portocolom',
    type: t('Apartamentos', 'Apartments', 'Apartments'),
    location: 'Portocolom',
    tagline: t(
      'Apartamentos con vistas al mar a 100 m de la playa.',
      'Sea-view apartments 100 m from the beach.',
      'Apartments mit Meerblick, 100 m vom Strand.',
    ),
    description: t(
      'Mar i Vent está en Portocolom, a solo 100 metros de la playa y a 57 km del aeropuerto de Palma. Los apartamentos tienen zona de estar con sofá, TV de pantalla plana vía satélite, cocina totalmente equipada y baño privado. Hay una piscina con zona de relax y un campo de golf a 5 km.',
      'Mar i Vent is in Portocolom, just 100 metres from the beach and 57 km from Palma airport. The apartments have a seating area with a sofa, satellite flat-screen TV, a fully equipped kitchen and a private bathroom. There is a pool with a relaxation area, and a golf course 5 km away.',
      'Mar i Vent liegt in Portocolom, nur 100 Meter vom Strand und 57 km vom Flughafen Palma entfernt. Die Apartments verfügen über einen Wohnbereich mit Sofa, Flachbild-Sat-TV, voll ausgestattete Küche und eigenes Bad. Es gibt einen Pool mit Ruhebereich und einen Golfplatz in 5 km Entfernung.',
    ),
    rooms: [
      { name: t('Apartamento con terraza y vista al mar — desde 86 €/noche', 'Apartment with terrace and sea view — from €86/night', 'Apartment mit Terrasse und Meerblick — ab 86 €/Nacht') },
      { name: t('Estudio con balcón y vistas al mar — desde 75 €/noche', 'Studio with balcony and sea view — from €75/night', 'Studio mit Balkon und Meerblick — ab 75 €/Nacht') },
      { name: t('Estudio con balcón — desde 70 €/noche', 'Studio with balcony — from €70/night', 'Studio mit Balkon — ab 70 €/Nacht') },
    ],
    amenities: [
      t('Piscina', 'Swimming pool', 'Pool'),
      t('Vistas al mar', 'Sea views', 'Meerblick'),
      t('Cocina equipada', 'Fully equipped kitchen', 'Voll ausgestattete Küche'),
      t('A 100 m de la playa', '100 m from the beach', '100 m vom Strand'),
    ],
    images: img('mar-i-vent-portocolom', 2, 5, 1, 6, 7, 8, 9, 10, 11),
    address: 'Carrer de l’Assumpció 14, 07670 Portocolom',
    phone: GROUP_PHONE,
    email: 'info@mariventportocolom.com',
    website: 'https://www.mariventportocolom.com/index-es.html',
    bookingUrl: OCTORATE + '589470',
  },
];

export const company = {
  name: 'MHR Hotels',
  legalName: 'MHR Hotels SL',
  cif: 'B06845960',
  address: 'Calle Algar 17, 07200 Felanitx, Illes Balears',
  email: 'admin@mallorcahouserent.com',
  phone: '+34 971 824 914',
  phoneHref: '+34971824914',
  parent: { name: 'Mallorca House Rent', url: 'https://mallorcahouserent.com/' },
};
