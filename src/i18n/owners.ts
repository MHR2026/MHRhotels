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
    title: '¿Tienes un pequeño hotel, agroturismo o apartamentos en Mallorca?',
    subtitle: 'Nos encargamos de comercializarlo y gestionarlo para que tu establecimiento alcance su máximo potencial, mientras tú ganas tranquilidad.',
    cta: 'Hablemos de tu establecimiento',
    benefitsTitle: 'Qué ganas trabajando con nosotros',
    benefits: [
      { title: 'Más ingresos', text: 'Revenue management y una red de comercialización sólida para aprovechar cada oportunidad de venta y adaptar los precios al mercado.' },
      { title: 'Tranquilidad', text: 'Nos ocupamos del día a día: personal, mantenimiento de las instalaciones y atención a los huéspedes.' },
      { title: 'Tecnología', text: 'Motor de reservas online, gestión de inventario y control de calidad. Te ayudamos a implantar las herramientas adecuadas.' },
      { title: 'Experiencia local', text: 'Formamos parte de Mallorca House Rent, con más de una década gestionando y comercializando alojamientos en la isla.' },
    ],
    modesTitle: 'Elige cómo trabajamos juntos',
    modesSubtitle: 'Nos adaptamos a lo que necesita tu establecimiento.',
    modes: [
      { title: 'Comercialización', text: 'Tú sigues al frente de la operación y nosotros nos encargamos de vender: canales online, venta directa y revenue management.' },
      { title: 'Gestión integral', text: 'Nos ocupamos de todo para que tu hotel o bloque de apartamentos funcione de forma eficiente y rentable.' },
      { title: 'Asesoría tecnológica', text: 'Te ayudamos a elegir e implantar sistemas de reservas, gestión y control de calidad.' },
    ],
    forTitle: 'Trabajamos con',
    forList: ['Pequeños hoteles y hoteles boutique', 'Agroturismos y fincas', 'Bloques de apartamentos', 'Hoteles de interior'],
    stepsTitle: 'Cómo empezamos',
    steps: [
      { title: 'Nos cuentas tu proyecto', text: 'Rellena el formulario o llámanos. Te contactamos en breve.' },
      { title: 'Conocemos tu establecimiento', text: 'Lo visitamos y analizamos su potencial y su situación actual.' },
      { title: 'Te proponemos un plan', text: 'Una propuesta a medida, adaptada a tus objetivos.' },
      { title: 'Lo ponemos en marcha', text: 'Nos encargamos de la puesta en marcha y del seguimiento.' },
    ],
    portfolioTitle: 'Establecimientos que ya gestionamos',
    portfolioSubtitle: 'Agroturismos, hoteles y apartamentos repartidos por toda Mallorca.',
    faqTitle: 'Preguntas frecuentes',
    faq: [
      { title: '¿Qué tipo de alojamientos gestionáis?', text: 'Pequeños hoteles, agroturismos, fincas y bloques de apartamentos en Mallorca.' },
      { title: '¿Tengo que ceder la gestión completa?', text: 'No. Puedes contratar solo la comercialización, la gestión integral o la asesoría tecnológica, según lo que necesites.' },
      { title: '¿En qué zonas trabajáis?', text: 'En toda la isla: ya gestionamos establecimientos en la Serra de Tramuntana, el Llevant y el sur de Mallorca.' },
      { title: '¿Cuánto cuesta?', text: 'Depende del establecimiento y del servicio. Después de conocerlo te preparamos una propuesta a medida.' },
    ],
    form: {
      title: 'Cuéntanos tu proyecto',
      subtitle: 'Te contactaremos lo antes posible.',
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
      submit: 'Enviar',
      error: 'No se ha podido enviar el formulario. Inténtalo de nuevo o escríbenos a',
      required: 'obligatorio',
    },
    thanks: {
      title: '¡Gracias! Hemos recibido tu mensaje',
      text: 'Te contactaremos lo antes posible para hablar de tu establecimiento.',
      back: 'Volver al inicio',
    },
    band: {
      title: '¿Tienes un alojamiento en Mallorca?',
      text: 'Comercializamos y gestionamos pequeños hoteles, agroturismos y apartamentos. Cuéntanos tu proyecto.',
      cta: 'Quiero más información',
    },
  },
  en: {
    nav: 'Owners',
    metaTitle: 'Hotel and agritourism management in Mallorca · MHR Hotels',
    metaDescription: 'Do you own a small hotel, agritourism or apartments in Mallorca? We market and manage it so it reaches its full potential.',
    kicker: 'For owners',
    title: 'Do you own a small hotel, agritourism or apartments in Mallorca?',
    subtitle: 'We market and manage it so your property reaches its full potential, while you gain peace of mind.',
    cta: 'Let’s talk about your property',
    benefitsTitle: 'What you gain',
    benefits: [
      { title: 'More revenue', text: 'Revenue management and a strong sales network to seize every booking opportunity and keep prices in line with the market.' },
      { title: 'Peace of mind', text: 'We take care of day-to-day operations: staff, building maintenance and guest service.' },
      { title: 'Technology', text: 'Online booking engine, inventory management and quality control. We help you adopt the right tools.' },
      { title: 'Local experience', text: 'We are part of Mallorca House Rent, with more than a decade managing and marketing accommodation on the island.' },
    ],
    modesTitle: 'Choose how we work together',
    modesSubtitle: 'We adapt to what your property needs.',
    modes: [
      { title: 'Sales & marketing', text: 'You keep running operations and we handle sales: online channels, direct bookings and revenue management.' },
      { title: 'Full management', text: 'We take care of everything so your hotel or apartment block runs efficiently and profitably.' },
      { title: 'Technology consulting', text: 'We help you choose and implement booking, management and quality-control systems.' },
    ],
    forTitle: 'We work with',
    forList: ['Small and boutique hotels', 'Agritourisms and country estates', 'Apartment blocks', 'Inland hotels'],
    stepsTitle: 'How we get started',
    steps: [
      { title: 'Tell us about your project', text: 'Fill in the form or give us a call. We will get back to you shortly.' },
      { title: 'We get to know your property', text: 'We visit it and analyse its potential and current situation.' },
      { title: 'We propose a plan', text: 'A tailored proposal that fits your goals.' },
      { title: 'We get it running', text: 'We handle the launch and ongoing follow-up.' },
    ],
    portfolioTitle: 'Properties we already manage',
    portfolioSubtitle: 'Agritourisms, hotels and apartments all over Mallorca.',
    faqTitle: 'Frequently asked questions',
    faq: [
      { title: 'What kind of properties do you manage?', text: 'Small hotels, agritourisms, country estates and apartment blocks in Mallorca.' },
      { title: 'Do I have to hand over full management?', text: 'No. You can choose sales & marketing only, full management or technology consulting, depending on your needs.' },
      { title: 'Which areas do you cover?', text: 'The whole island: we already manage properties in the Serra de Tramuntana, the east and the south of Mallorca.' },
      { title: 'How much does it cost?', text: 'It depends on the property and the service. Once we know it, we prepare a tailored proposal.' },
    ],
    form: {
      title: 'Tell us about your project',
      subtitle: 'We will get back to you as soon as possible.',
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
      submit: 'Send',
      error: 'The form could not be sent. Please try again or write to us at',
      required: 'required',
    },
    thanks: {
      title: 'Thank you! We have received your message',
      text: 'We will contact you as soon as possible to talk about your property.',
      back: 'Back to home',
    },
    band: {
      title: 'Do you own accommodation in Mallorca?',
      text: 'We market and manage small hotels, agritourisms and apartments. Tell us about your project.',
      cta: 'Find out more',
    },
  },
  de: {
    nav: 'Eigentümer',
    metaTitle: 'Management von Hotels und Agroturismos auf Mallorca · MHR Hotels',
    metaDescription: 'Sie besitzen ein kleines Hotel, ein Agroturismo oder Apartments auf Mallorca? Wir vermarkten und führen es, damit es sein volles Potenzial erreicht.',
    kicker: 'Für Eigentümer',
    title: 'Sie besitzen ein kleines Hotel, ein Agroturismo oder Apartments auf Mallorca?',
    subtitle: 'Wir vermarkten und führen Ihren Betrieb, damit er sein volles Potenzial ausschöpft – und Sie gewinnen Ruhe.',
    cta: 'Sprechen wir über Ihren Betrieb',
    benefitsTitle: 'Ihre Vorteile',
    benefits: [
      { title: 'Mehr Umsatz', text: 'Revenue Management und ein starkes Vertriebsnetz, um jede Buchungschance zu nutzen und die Preise am Markt auszurichten.' },
      { title: 'Ruhe', text: 'Wir kümmern uns um das Tagesgeschäft: Personal, Instandhaltung und Gästebetreuung.' },
      { title: 'Technologie', text: 'Online-Buchungssystem, Bestandsverwaltung und Qualitätskontrolle. Wir helfen bei der Einführung der richtigen Werkzeuge.' },
      { title: 'Lokale Erfahrung', text: 'Wir gehören zu Mallorca House Rent und verwalten und vermarkten seit über zehn Jahren Unterkünfte auf der Insel.' },
    ],
    modesTitle: 'Wählen Sie, wie wir zusammenarbeiten',
    modesSubtitle: 'Wir passen uns an die Bedürfnisse Ihres Betriebs an.',
    modes: [
      { title: 'Vermarktung', text: 'Sie führen den Betrieb weiter, wir übernehmen den Verkauf: Online-Kanäle, Direktbuchungen und Revenue Management.' },
      { title: 'Komplettes Management', text: 'Wir kümmern uns um alles, damit Ihr Hotel oder Ihre Apartmentanlage effizient und rentabel läuft.' },
      { title: 'Technologieberatung', text: 'Wir helfen bei Auswahl und Einführung von Buchungs-, Verwaltungs- und Qualitätssystemen.' },
    ],
    forTitle: 'Wir arbeiten mit',
    forList: ['Kleinen Hotels und Boutique-Hotels', 'Agroturismos und Fincas', 'Apartmentanlagen', 'Hotels im Inselinneren'],
    stepsTitle: 'So starten wir',
    steps: [
      { title: 'Erzählen Sie uns von Ihrem Projekt', text: 'Füllen Sie das Formular aus oder rufen Sie uns an. Wir melden uns in Kürze.' },
      { title: 'Wir lernen Ihren Betrieb kennen', text: 'Wir besuchen ihn und analysieren sein Potenzial und die aktuelle Situation.' },
      { title: 'Wir schlagen einen Plan vor', text: 'Ein maßgeschneidertes Angebot passend zu Ihren Zielen.' },
      { title: 'Wir setzen ihn um', text: 'Wir übernehmen den Start und die laufende Betreuung.' },
    ],
    portfolioTitle: 'Unterkünfte, die wir bereits führen',
    portfolioSubtitle: 'Agroturismos, Hotels und Apartments auf ganz Mallorca.',
    faqTitle: 'Häufige Fragen',
    faq: [
      { title: 'Welche Unterkünfte betreuen Sie?', text: 'Kleine Hotels, Agroturismos, Fincas und Apartmentanlagen auf Mallorca.' },
      { title: 'Muss ich das gesamte Management abgeben?', text: 'Nein. Sie können nur die Vermarktung, das komplette Management oder die Technologieberatung wählen.' },
      { title: 'In welchen Gegenden sind Sie tätig?', text: 'Auf der ganzen Insel: Wir betreuen bereits Unterkünfte in der Serra de Tramuntana, im Osten und im Süden Mallorcas.' },
      { title: 'Was kostet es?', text: 'Das hängt vom Betrieb und der Leistung ab. Nachdem wir ihn kennengelernt haben, erstellen wir ein individuelles Angebot.' },
    ],
    form: {
      title: 'Erzählen Sie uns von Ihrem Projekt',
      subtitle: 'Wir melden uns so schnell wie möglich.',
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
      submit: 'Senden',
      error: 'Das Formular konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie an',
      required: 'Pflichtfeld',
    },
    thanks: {
      title: 'Vielen Dank! Wir haben Ihre Nachricht erhalten',
      text: 'Wir melden uns so schnell wie möglich, um über Ihren Betrieb zu sprechen.',
      back: 'Zur Startseite',
    },
    band: {
      title: 'Sie besitzen eine Unterkunft auf Mallorca?',
      text: 'Wir vermarkten und führen kleine Hotels, Agroturismos und Apartments. Erzählen Sie uns von Ihrem Projekt.',
      cta: 'Mehr erfahren',
    },
  },
};
