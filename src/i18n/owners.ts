// Textos de la página para propietarios (captación de nuevos establecimientos).
import type { Lang } from '../data/hotels';

type Item = { title: string; text: string };

interface OwnersCopy {
  nav: string;
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  title: string;
  subtitle: string;
  cta: string;
  benefitsTitle: string;
  benefits: Item[];
  modesTitle: string;
  modesSubtitle: string;
  modes: Item[];
  forTitle: string;
  forList: string[];
  stepsTitle: string;
  steps: Item[];
  portfolioTitle: string;
  portfolioSubtitle: string;
  faqTitle: string;
  faq: Item[];
  form: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    phone: string;
    type: string;
    types: string[];
    location: string;
    units: string;
    status: string;
    statuses: string[];
    interest: string;
    message: string;
    messagePlaceholder: string;
    consent: string;
    consentLink: string;
    submit: string;
    error: string;
    required: string;
  };
  thanks: { title: string; text: string; back: string };
  band: { title: string; text: string; cta: string };
}

export const owners: Record<Lang, OwnersCopy> = {
  es: {
    nav: 'Propietarios',
    metaTitle: 'Gestión de hoteles y agroturismos en Mallorca · MHR Hotels',
    metaDescription: '¿Tienes un pequeño hotel, agroturismo o apartamentos en Mallorca? Nos encargamos de comercializarlo y gestionarlo para que sea más rentable.',
    kicker: 'Para propietarios',
    title: 'Hablemos de tu hotel',
    subtitle: '¿Eres propietario de un hotel y buscas mejorar sus resultados o delegar su gestión? En MHR Hotels estudiamos tu proyecto y te proponemos la mejor fórmula de colaboración.',
    cta: 'Solicitar propuesta',
    benefitsTitle: '¿Por qué MHR Hotels?',
    benefits: [
      { title: 'Especialistas en pequeños hoteles', text: 'Trabajamos con hoteles independientes, hoteles boutique y agroturismos.' },
      { title: 'Rentabilidad y control de costes', text: 'Nuestra gestión está orientada a mejorar los resultados de tu establecimiento.' },
      { title: 'Gestión cercana y flexible', text: 'Un trato personalizado y una fórmula de colaboración adaptada a ti.' },
      { title: 'Conocimiento de Mallorca', text: 'Conocemos el mercado turístico de la isla y respetamos la identidad de cada establecimiento.' },
    ],
    modesTitle: 'Elige cómo trabajamos juntos',
    modesSubtitle: 'Nos adaptamos a lo que necesita tu establecimiento.',
    modes: [
      { title: 'Gestión integral', text: 'Dirección y gestión operativa del hotel, control de costes y optimización de resultados.' },
      { title: 'Comercialización y Revenue Management', text: 'Estrategia de ventas, gestión de canales, reservas y optimización de tarifas.' },
      { title: 'Explotación hotelera', text: 'Estudiamos acuerdos de arrendamiento y explotación adaptados a cada establecimiento.' },
    ],
    forTitle: 'Trabajamos con',
    forList: ['Pequeños hoteles independientes', 'Hoteles boutique', 'Agroturismos y fincas', 'Bloques de apartamentos'],
    stepsTitle: 'Cómo empezamos',
    steps: [
      { title: 'Nos cuentas tu proyecto', text: 'Rellena el formulario o llámanos. Te contactamos en breve.' },
      { title: 'Conocemos tu establecimiento', text: 'Lo visitamos y analizamos su potencial y su situación actual.' },
      { title: 'Te proponemos la mejor fórmula', text: 'Un estudio personalizado y sin compromiso, adaptado a tus objetivos.' },
      { title: 'Lo ponemos en marcha', text: 'Nos encargamos de la puesta en marcha y del seguimiento.' },
    ],
    portfolioTitle: 'Establecimientos que ya gestionamos',
    portfolioSubtitle: 'Agroturismos, hoteles y apartamentos repartidos por toda Mallorca.',
    faqTitle: 'Preguntas frecuentes',
    faq: [
      { title: '¿Qué tipo de alojamientos gestionáis?', text: 'Pequeños hoteles, agroturismos, fincas y bloques de apartamentos en Mallorca.' },
      { title: '¿Tengo que ceder la gestión completa?', text: 'No. Puedes elegir la gestión integral, solo la comercialización y el revenue management, o un acuerdo de arrendamiento y explotación.' },
      { title: '¿En qué zonas trabajáis?', text: 'En toda la isla: ya gestionamos establecimientos en la Serra de Tramuntana, el Llevant y el sur de Mallorca.' },
      { title: '¿Cuánto cuesta?', text: 'Depende del establecimiento y de la fórmula de colaboración. Te preparamos un estudio personalizado y sin compromiso.' },
    ],
    form: {
      title: 'Descubre el potencial de tu hotel',
      subtitle: 'Solicita un estudio personalizado y sin compromiso.',
      name: 'Nombre',
      email: 'Email',
      phone: 'Teléfono',
      type: 'Tipo de establecimiento',
      types: ['Hotel', 'Agroturismo / finca', 'Apartamentos', 'Otro'],
      location: 'Municipio',
      units: 'Nº de habitaciones o unidades',
      status: 'Situación actual',
      statuses: ['Ya está en funcionamiento', 'Es un proyecto nuevo', 'Quiero reabrirlo'],
      interest: 'Me interesa',
      message: 'Mensaje',
      messagePlaceholder: 'Cuéntanos lo que quieras sobre tu establecimiento',
      consent: 'He leído y acepto la',
      consentLink: 'política de privacidad',
      submit: 'Solicitar propuesta',
      error: 'No se ha podido enviar el formulario. Inténtalo de nuevo o escríbenos a',
      required: 'obligatorio',
    },
    thanks: {
      title: '¡Gracias! Hemos recibido tu mensaje',
      text: 'Te contactaremos lo antes posible para hablar de tu establecimiento.',
      back: 'Volver al inicio',
    },
    band: {
      title: 'Hablemos de tu hotel',
      text: '¿Eres propietario de un hotel y buscas mejorar sus resultados o delegar su gestión? Estudiamos tu proyecto y te proponemos la mejor fórmula de colaboración.',
      cta: 'Solicitar propuesta',
    },
  },
  en: {
    nav: 'Owners',
    metaTitle: 'Hotel and agritourism management in Mallorca · MHR Hotels',
    metaDescription: 'Do you own a small hotel, agritourism or apartments in Mallorca? We market and manage it so it reaches its full potential.',
    kicker: 'For owners',
    title: 'Let’s talk about your hotel',
    subtitle: 'Do you own a hotel and want to improve its results or hand over its management? At MHR Hotels we study your project and propose the best way to work together.',
    cta: 'Request a proposal',
    benefitsTitle: 'Why MHR Hotels?',
    benefits: [
      { title: 'Small hotel specialists', text: 'We work with independent hotels, boutique hotels and agritourisms.' },
      { title: 'Profitability and cost control', text: 'Our management is focused on improving your property’s results.' },
      { title: 'Close, flexible management', text: 'A personal approach and a partnership model that fits you.' },
      { title: 'Knowledge of Mallorca', text: 'We know the island’s tourism market and respect the identity of each property.' },
    ],
    modesTitle: 'Choose how we work together',
    modesSubtitle: 'We adapt to what your property needs.',
    modes: [
      { title: 'Full management', text: 'Hotel direction and operations, cost control and results optimisation.' },
      { title: 'Sales and Revenue Management', text: 'Sales strategy, channel management, reservations and rate optimisation.' },
      { title: 'Hotel operation', text: 'We study lease and operating agreements tailored to each property.' },
    ],
    forTitle: 'We work with',
    forList: ['Small independent hotels', 'Boutique hotels', 'Agritourisms and country estates', 'Apartment blocks'],
    stepsTitle: 'How we get started',
    steps: [
      { title: 'Tell us about your project', text: 'Fill in the form or give us a call. We will get back to you shortly.' },
      { title: 'We get to know your property', text: 'We visit it and analyse its potential and current situation.' },
      { title: 'We propose the best model', text: 'A personalised, no-obligation study that fits your goals.' },
      { title: 'We get it running', text: 'We handle the launch and ongoing follow-up.' },
    ],
    portfolioTitle: 'Properties we already manage',
    portfolioSubtitle: 'Agritourisms, hotels and apartments all over Mallorca.',
    faqTitle: 'Frequently asked questions',
    faq: [
      { title: 'What kind of properties do you manage?', text: 'Small hotels, agritourisms, country estates and apartment blocks in Mallorca.' },
      { title: 'Do I have to hand over full management?', text: 'No. You can choose full management, sales and revenue management only, or a lease and operating agreement.' },
      { title: 'Which areas do you cover?', text: 'The whole island: we already manage properties in the Serra de Tramuntana, the east and the south of Mallorca.' },
      { title: 'How much does it cost?', text: 'It depends on the property and the partnership model. We prepare a personalised, no-obligation study.' },
    ],
    form: {
      title: 'Discover your hotel’s potential',
      subtitle: 'Request a personalised, no-obligation study.',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      type: 'Type of property',
      types: ['Hotel', 'Agritourism / estate', 'Apartments', 'Other'],
      location: 'Town',
      units: 'Number of rooms or units',
      status: 'Current situation',
      statuses: ['Already operating', 'New project', 'I want to reopen it'],
      interest: 'I am interested in',
      message: 'Message',
      messagePlaceholder: 'Tell us anything about your property',
      consent: 'I have read and accept the',
      consentLink: 'privacy policy',
      submit: 'Request a proposal',
      error: 'The form could not be sent. Please try again or write to us at',
      required: 'required',
    },
    thanks: {
      title: 'Thank you! We have received your message',
      text: 'We will contact you as soon as possible to talk about your property.',
      back: 'Back to home',
    },
    band: {
      title: 'Let’s talk about your hotel',
      text: 'Do you own a hotel and want to improve its results or hand over its management? We study your project and propose the best way to work together.',
      cta: 'Request a proposal',
    },
  },
  de: {
    nav: 'Eigentümer',
    metaTitle: 'Management von Hotels und Agroturismos auf Mallorca · MHR Hotels',
    metaDescription: 'Sie besitzen ein kleines Hotel, ein Agroturismo oder Apartments auf Mallorca? Wir vermarkten und führen es, damit es sein volles Potenzial erreicht.',
    kicker: 'Für Eigentümer',
    title: 'Sprechen wir über Ihr Hotel',
    subtitle: 'Sie besitzen ein Hotel und möchten die Ergebnisse verbessern oder das Management abgeben? Wir prüfen Ihr Projekt und schlagen Ihnen die beste Form der Zusammenarbeit vor.',
    cta: 'Angebot anfordern',
    benefitsTitle: 'Warum MHR Hotels?',
    benefits: [
      { title: 'Spezialisten für kleine Hotels', text: 'Wir arbeiten mit unabhängigen Hotels, Boutique-Hotels und Agroturismos.' },
      { title: 'Rentabilität und Kostenkontrolle', text: 'Unser Management zielt darauf ab, die Ergebnisse Ihres Betriebs zu verbessern.' },
      { title: 'Persönlich und flexibel', text: 'Individuelle Betreuung und eine Form der Zusammenarbeit, die zu Ihnen passt.' },
      { title: 'Kenntnis von Mallorca', text: 'Wir kennen den Tourismusmarkt der Insel und respektieren die Identität jedes Betriebs.' },
    ],
    modesTitle: 'Wählen Sie, wie wir zusammenarbeiten',
    modesSubtitle: 'Wir passen uns an die Bedürfnisse Ihres Betriebs an.',
    modes: [
      { title: 'Komplettes Management', text: 'Hotelleitung und operatives Management, Kostenkontrolle und Ergebnisoptimierung.' },
      { title: 'Vermarktung und Revenue Management', text: 'Vertriebsstrategie, Kanalmanagement, Reservierungen und Preisoptimierung.' },
      { title: 'Hotelbetrieb', text: 'Wir prüfen Pacht- und Betreiberverträge, zugeschnitten auf jeden Betrieb.' },
    ],
    forTitle: 'Wir arbeiten mit',
    forList: ['Kleinen unabhängigen Hotels', 'Boutique-Hotels', 'Agroturismos und Fincas', 'Apartmentanlagen'],
    stepsTitle: 'So starten wir',
    steps: [
      { title: 'Erzählen Sie uns von Ihrem Projekt', text: 'Füllen Sie das Formular aus oder rufen Sie uns an. Wir melden uns in Kürze.' },
      { title: 'Wir lernen Ihren Betrieb kennen', text: 'Wir besuchen ihn und analysieren sein Potenzial und die aktuelle Situation.' },
      { title: 'Wir schlagen das beste Modell vor', text: 'Eine individuelle, unverbindliche Analyse passend zu Ihren Zielen.' },
      { title: 'Wir setzen ihn um', text: 'Wir übernehmen den Start und die laufende Betreuung.' },
    ],
    portfolioTitle: 'Unterkünfte, die wir bereits führen',
    portfolioSubtitle: 'Agroturismos, Hotels und Apartments auf ganz Mallorca.',
    faqTitle: 'Häufige Fragen',
    faq: [
      { title: 'Welche Unterkünfte betreuen Sie?', text: 'Kleine Hotels, Agroturismos, Fincas und Apartmentanlagen auf Mallorca.' },
      { title: 'Muss ich das gesamte Management abgeben?', text: 'Nein. Sie können das komplette Management, nur Vermarktung und Revenue Management oder einen Pacht- und Betreibervertrag wählen.' },
      { title: 'In welchen Gegenden sind Sie tätig?', text: 'Auf der ganzen Insel: Wir betreuen bereits Unterkünfte in der Serra de Tramuntana, im Osten und im Süden Mallorcas.' },
      { title: 'Was kostet es?', text: 'Das hängt vom Betrieb und der Form der Zusammenarbeit ab. Wir erstellen eine individuelle, unverbindliche Analyse.' },
    ],
    form: {
      title: 'Entdecken Sie das Potenzial Ihres Hotels',
      subtitle: 'Fordern Sie eine individuelle, unverbindliche Analyse an.',
      name: 'Name',
      email: 'E-Mail',
      phone: 'Telefon',
      type: 'Art der Unterkunft',
      types: ['Hotel', 'Agroturismo / Finca', 'Apartments', 'Andere'],
      location: 'Gemeinde',
      units: 'Anzahl Zimmer oder Einheiten',
      status: 'Aktuelle Situation',
      statuses: ['Bereits in Betrieb', 'Neues Projekt', 'Ich möchte wiedereröffnen'],
      interest: 'Ich interessiere mich für',
      message: 'Nachricht',
      messagePlaceholder: 'Erzählen Sie uns von Ihrer Unterkunft',
      consent: 'Ich habe die',
      consentLink: 'Datenschutzerklärung gelesen und akzeptiere sie',
      submit: 'Angebot anfordern',
      error: 'Das Formular konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie an',
      required: 'Pflichtfeld',
    },
    thanks: {
      title: 'Vielen Dank! Wir haben Ihre Nachricht erhalten',
      text: 'Wir melden uns so schnell wie möglich, um über Ihren Betrieb zu sprechen.',
      back: 'Zur Startseite',
    },
    band: {
      title: 'Sprechen wir über Ihr Hotel',
      text: 'Sie besitzen ein Hotel und möchten die Ergebnisse verbessern oder das Management abgeben? Wir prüfen Ihr Projekt und schlagen die beste Form der Zusammenarbeit vor.',
      cta: 'Angebot anfordern',
    },
  },
};
