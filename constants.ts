import { ValueItem, Language } from './types';

export const VALUES_LIST: ValueItem[] = [
  { icon: '🔥', key: 'focus' },
  { icon: '🌙', key: 'grace' },
  { icon: '🦁', key: 'honor' },
  { icon: '⚖️', key: 'integrity' },
  { icon: '😝', key: 'joy' },
  { icon: '♥️', key: 'love' },
  { icon: '🌌', key: 'peace' },
  { icon: '⚛️', key: 'presence' },
  { icon: '✨️', key: 'prosperity' },
  { icon: '🙏', key: 'respect' },
  { icon: '🦚', key: 'royalty' },
  { icon: '🧬', key: 'sovereignty' },
  { icon: '🦚', key: 'wisdom' },
];

export const TRANSLATIONS = {
  [Language.EN]: {
    nav: {
      home: 'Home',
      profile: 'Profile',
      shop: 'Shop',
      activities: 'Activities',
      events: 'Events',
      temple: 'Temple',
      food: 'Food',
      login: 'Login'
    },
    values: {
      integrity: 'Integrity',
      honor: 'Honor',
      sovereignty: 'Sovereignty',
      prosperity: 'Prosperity',
      grace: 'Grace',
      royalty: 'Royalty',
      respect: 'Respect',
      joy: 'Joy',
      presence: 'Presence',
      focus: 'Focus',
      love: 'Love',
      peace: 'Peace',
      wisdom: 'Wisdom',
      title: 'Our Core Values'
    },
    hero: {
      title: 'Where community, creativity and collective consciousness thrive',
      subtitle: 'Building a legacy of wisdom and light.',
      cta: 'Join Us',
      p1: 'Ayni means sacred reciprocity and interconnectedness. It is the timeless principle that all of life thrives through balance, harmony, and mutual care. From this ancient Andean wisdom, the Ayni Foundation was born as a living movement dedicated to restoring right relationship between humanity, nature, and spirit.',
      p2: 'Under its guiding light, the Ayni Sanctuary emerged as a heart centered home in the Sacred Valley of Peru. It is a place where the teachings of Ayni are not only remembered but lived. Built upon the principles of regeneration, authenticity, and mastery, the Sanctuary serves as a space for deep healing, conscious evolution, and the embodiment of a new way of being.',
      p3: 'The Ayni Team is a constellation of practitioners and creatives including meditation and yoga guides, musicians, storytellers, hospitality stewards, digital visionaries, and wisdom keepers of ancestral plant traditions. Each brings a unique mastery that forms a living tapestry of healing, creativity, and grounded leadership. United in purpose, they hold the Sanctuary with integrity, presence, and the spirit of sacred reciprocity.',
      p4: 'Ayni Sanctuary is a living ecosystem where community, land, and spirit co-create a regenerative way of being. Through organic living, sacred arts, energy medicine, and self mastery, it invites each person to remember their true nature. Here, harmony is not just taught, it is lived.'
    },
    footer: {
      connect: 'Connect with us',
      rights: 'All rights reserved.'
    },
    activities: {
      title: 'Activities & Collaboration',
      subtitle: 'Join us in our mission to bring light to the world through various initiatives.',
      collabTitle: 'Ways to Collaborate',
      collabText: 'We offer various paths for collaboration including volunteering, donations, and community partnerships.',
      excursionsTitle: 'Sacred Sites & Excursions',
      excursionsSubtitle: 'Discover the profound energy of the Sacred Valley through these guided experiences.',
      featured: {
        tag: 'Featured Initiative',
        title: 'The Ayni Circle',
        desc: 'A global initiative bringing together members and locals to exchange knowledge, stories, and cultural heritage.',
        btn: 'Learn More'
      },
      types: {
        outreach: { title: 'Community Outreach', desc: 'Direct engagement with local communities to spread our core values and support those in need.' },
        sustainable: { title: 'Sustainable Projects', desc: 'Building long-term infrastructure for sovereignty and prosperity in under-served regions.' },
        partnerships: { title: 'Partnerships', desc: 'Strategic alliances with other organizations that share our vision of Integrity and Honor.' },
        volunteer: { title: 'Volunteer Program', desc: 'Hands-on opportunities to serve with Love and Presence in our daily operations.' }
      },
      items: {
        pitusiray: {
          title: 'Apu Pitusiray & Lake Qan Qan',
          desc: 'Mountain of wisdom and protection. Serene lakeside space ideal for meditation, ceremony, and reflection.'
        },
        urco: {
          title: 'Urco – Temple of Water',
          desc: 'Nearby Incan ceremonial site dedicated to water and fertility. Flowing channels for purification, renewal, and gratitude.'
        },
        chinchero: {
          title: 'Chinchero, Moray & Maras Salt Mines',
          desc: 'Moray’s ancient agricultural terraces. Maras’ pre-Incan salt pools. Chinchero’s traditional weaving and living culture.'
        },
        huchuy: {
          title: 'Huchuy Qosqo (Little Cusco)',
          desc: 'Gentle trek to an ancient Incan royal estate. Panoramic views, Incan terraces, and a strong historical presence.'
        },
        pisac: {
          title: 'Pisac & Ancient Citadel',
          desc: 'Star-aligned ceremonial temples. Artisan market with sacred crafts, textiles, and instruments.'
        },
        ollantaytambo: {
          title: 'Ollantaytambo & Gateway to Machu Picchu',
          desc: '“Living Inca City” with potent energetic architecture. Starting point for travel to Aguas Calientes and Machu Picchu.'
        }
      }
    },
    events: {
        title: 'Events & Gatherings',
        subtitle: 'Celebrate with us in sacred space and community.',
        zonesTitle: 'Event Zones',
        zonesText: 'Experience the flow of energy across our dedicated spaces.',
        featured: {
            tag: 'New Year\'s Eve',
            title: 'Ecstatic Dance Festival',
            subtitle: 'Featuring Liquid Bloom, Calagna, and many more.',
            p1: 'Hosted at Ayni Sanctuary in Peru’s Sacred Valley, Casa de Oso presents an epic New Year’s Eve ecstatic dance festival featuring international artists, DJs, and musicians dedicated to community-centered celebration. As the hosting venue, Ayni Sanctuary is honored to hold this gathering in a safe, alcohol-free environment that supports free movement, genuine connection, and full self-expression.',
            p2: 'The experience unfolds across two immersive dance floors — Condor Shala and Puma Hall — each offering a distinct sonic journey, alongside Ukhu Temple, an acoustic tea space for rest, warmth, and gentle sound. As music and movement carry us into the new year, we gather to celebrate renewal in a space rooted in care, creativity, and conscious community in the Sacred Valley of Peru.',
            cta: 'Come as you are. Dance as you feel.',
            btn: 'Tickets via Casa de Oso'
        },
        zones: {
            condor: { title: 'Condor Shala', desc: 'An immersive dance floor offering a distinct sonic journey elevating the spirit.' },
            puma: { title: 'Puma Hall', desc: 'A grounded space for movement, connecting us deeply to the rhythm of the earth.' },
            ukhu: { title: 'Ukhu Temple', desc: 'An acoustic tea space for rest, warmth, and gentle sound healing.' },
            garden: { title: 'Sanctuary Gardens', desc: 'Open spaces to breathe under the stars of the Sacred Valley.' }
        }
    },
    food: {
      title: 'Healthy food made with love',
      subtitle: 'At Ayni Sanctuary, food is ceremony.',
      featured: {
        tag: 'Nourishment',
        title: 'Conscious Cuisine',
        p1: 'Our dining experience centers on fresh, locally sourced ingredients prepared with intention, transforming each meal into nourishment for both body and spirit. Whether you’re attending a retreat, hosting an event, or enjoying a personal stay, our kitchen offers custom menus that support your journey, detoxifying, energizing, grounding, or comforting.',
        p2: 'We honor all dietary needs with vegan, vegetarian, gluten-free, dairy-free, and allergen-sensitive options, as well as balanced omnivorous dishes. Guests can dine in the Lodge or outdoors with mountain views, sharing meals that foster connection, gratitude, and wellbeing.',
        btn: 'View Sample Menu'
      },
      features: {
        local: { title: 'Locally Sourced', desc: 'Fresh ingredients sourced directly from local Sacred Valley farmers.' },
        dietary: { title: 'Dietary Inclusive', desc: 'Vegan, gluten-free, and allergen-sensitive options prepared with care.' },
        intention: { title: 'Prepared with Intention', desc: 'Transforming each meal into nourishment for both body and spirit.' },
        community: { title: 'Community Dining', desc: 'Sharing meals that foster connection, gratitude, and wellbeing.' }
      }
    },
    temple: {
      title: 'Ayni Temple',
      subtitle: 'A sacred space for contemplation, ceremony, and connection.',
      featured: {
        tag: 'Sacred Space',
        title: 'Sanctuary of Light',
        desc: 'Built with intention and aligned with the elements, our temple serves as the heart of spiritual practice, inviting deep silence and reverence.',
        btn: 'Visit Us'
      },
      offerings: {
        ceremonies: { title: 'Ceremonies', desc: 'Traditional Andean ceremonies honoring the earth and cosmos.' },
        meditation: { title: 'Meditation', desc: 'Daily guided and silent meditation sessions.' },
        workshops: { title: 'Workshops', desc: 'Educational gatherings on ancient wisdom and modern healing.' },
        healing: { title: 'Healing Arts', desc: 'Private sessions with holistic practitioners.' }
      }
    },
    shop: {
      title: 'Ayni Store',
      subtitle: 'Support our cause with these exclusive items.',
      addToCart: 'Add to Cart',
      productDesc: 'Beautifully crafted to represent the values of our foundation.'
    },
    profile: {
      title: 'Member Profile',
      welcome: 'Welcome back, seeker.',
      membership: 'Membership Status',
      active: 'Active',
      history: 'Contribution History',
      edit: 'Edit Profile',
      since: 'Member since',
      impact: 'Impact Score',
      favoritePlant: 'Favorite Plant',
      hours: 'Volunteer Hours',
      contribution: 'Community Contribution'
    }
  },
  [Language.ES]: {
    nav: {
      home: 'Inicio',
      profile: 'Perfil',
      shop: 'Tienda',
      activities: 'Actividades',
      events: 'Eventos',
      temple: 'Templo',
      food: 'Comida',
      login: 'Entrar'
    },
    values: {
      integrity: 'Integridad',
      honor: 'Honor',
      sovereignty: 'Soberanía',
      prosperity: 'Prosperidad',
      grace: 'Gracia',
      royalty: 'Realeza',
      respect: 'Respeto',
      joy: 'Alegría',
      presence: 'Presencia',
      focus: 'Enfoque',
      love: 'Amor',
      peace: 'Paz',
      wisdom: 'Sabiduría',
      title: 'Nuestros Valores'
    },
    hero: {
      title: 'Donde prosperan la comunidad, la creatividad y la conciencia colectiva',
      subtitle: 'Construyendo un legado de sabiduría y luz.',
      cta: 'Únete',
      p1: 'Ayni significa reciprocidad sagrada e interconexión. Es el principio atemporal de que toda la vida prospera a través del equilibrio, la armonía y el cuidado mutuo. De esta antigua sabiduría andina, nació la Fundación Ayni como un movimiento vivo dedicado a restaurar la relación correcta entre la humanidad, la naturaleza y el espíritu.',
      p2: 'Bajo su luz guía, el Santuario Ayni surgió como un hogar centrado en el corazón en el Valle Sagrado de Perú. Es un lugar donde las enseñanzas de Ayni no solo se recuerdan sino que se viven. Construido sobre los principios de regeneración, autenticidad y maestría, el Santuario sirve como un espacio para la sanación profunda, la evolución consciente y la encarnación de una nueva forma de ser.',
      p3: 'El Equipo Ayni es una constelación de practicantes y creativos que incluyen guías de meditación y yoga, músicos, narradores, administradores de hospitalidad, visionarios digitales y guardianes de la sabiduría de las tradiciones ancestrales de plantas. Cada uno aporta una maestría única que forma un tapiz vivo de sanación, creatividad y liderazgo fundamentado. Unidos en propósito, sostienen el Santuario con integridad, presencia y el espíritu de reciprocidad sagrada.',
      p4: 'El Santuario Ayni es un ecosistema vivo donde la comunidad, la tierra y el espíritu co-crean una forma regenerativa de ser. A través de la vida orgánica, las artes sagradas, la medicina energética y la automaestría, invita a cada persona a recordar su verdadera naturaleza. Aquí, la armonía no solo se enseña, se vive.'
    },
    footer: {
      connect: 'Conéctate con nosotros',
      rights: 'Todos los derechos reservados.'
    },
    activities: {
      title: 'Actividades y Colaboración',
      subtitle: 'Únete a nuestra misión de traer luz al mundo a través de diversas iniciativas.',
      collabTitle: 'Formas de Colaborar',
      collabText: 'Ofrecemos varios caminos para la colaboración, incluyendo voluntariado, donaciones y asociaciones comunitarias.',
      excursionsTitle: 'Sitios Sagrados y Excursiones',
      excursionsSubtitle: 'Descubre la profunda energía del Valle Sagrado a través de estas experiencias guiadas.',
      featured: {
        tag: 'Iniciativa Destacada',
        title: 'El Círculo Ayni',
        desc: 'Una iniciativa global que reúne a miembros y locales para intercambiar conocimientos, historias y patrimonio cultural.',
        btn: 'Aprender Más'
      },
      types: {
        outreach: { title: 'Alcance Comunitario', desc: 'Compromiso directo con las comunidades locales para difundir nuestros valores fundamentales y apoyar a los necesitados.' },
        sustainable: { title: 'Proyectos Sostenibles', desc: 'Construcción de infraestructura a largo plazo para la soberanía y la prosperidad en regiones desatendidas.' },
        partnerships: { title: 'Alianzas', desc: 'Alianzas estratégicas con otras organizaciones que comparten nuestra visión de Integridad y Honor.' },
        volunteer: { title: 'Programa de Voluntariado', desc: 'Oportunidades prácticas para servir con Amor y Presencia en nuestras operaciones diarias.' }
      },
      items: {
        pitusiray: {
          title: 'Apu Pitusiray & Lake Qan Qan',
          desc: 'Mountain of wisdom and protection. Serene lakeside space ideal for meditation, ceremony, and reflection.'
        },
        urco: {
          title: 'Urco – Temple of Water',
          desc: 'Nearby Incan ceremonial site dedicated to water and fertility. Flowing channels for purification, renewal, and gratitude.'
        },
        chinchero: {
          title: 'Chinchero, Moray & Maras Salt Mines',
          desc: 'Moray’s ancient agricultural terraces. Maras’ pre-Incan salt pools. Chinchero’s traditional weaving and living culture.'
        },
        huchuy: {
          title: 'Huchuy Qosqo (Little Cusco)',
          desc: 'Gentle trek to an ancient Incan royal estate. Panoramic views, Incan terraces, and a strong historical presence.'
        },
        pisac: {
          title: 'Pisac & Ancient Citadel',
          desc: 'Star-aligned ceremonial temples. Artisan market with sacred crafts, textiles, and instruments.'
        },
        ollantaytambo: {
          title: 'Ollantaytambo & Gateway to Machu Picchu',
          desc: '“Living Inca City” with potent energetic architecture. Starting point for travel to Aguas Calientes and Machu Picchu.'
        }
      }
    },
    events: {
        title: 'Eventos y Reuniones',
        subtitle: 'Celebra con nosotros en espacio sagrado y comunidad.',
        zonesTitle: 'Zonas del Evento',
        zonesText: 'Experimenta el flujo de energía a través de nuestros espacios dedicados.',
        featured: {
            tag: 'Año Nuevo',
            title: 'Festival de Danza Extática',
            subtitle: 'Con Liquid Bloom, Calagna y muchos más.',
            p1: 'Organizado en el Santuario Ayni en el Valle Sagrado de Perú, Casa de Oso presenta un épico festival de danza extática de Nochevieja con artistas internacionales, DJs y músicos dedicados a la celebración centrada en la comunidad. Como sede anfitriona, Ayni Sanctuary tiene el honor de celebrar esta reunión en un ambiente seguro y libre de alcohol que apoya el movimiento libre, la conexión genuina y la plena autoexpresión.',
            p2: 'La experiencia se desarrolla en dos pistas de baile inmersivas: Condor Shala y Puma Hall, cada una ofreciendo un viaje sonoro distinto, junto con el Templo Ukhu, un espacio acústico de té para el descanso, la calidez y el sonido suave. A medida que la música y el movimiento nos llevan al nuevo año, nos reunimos para celebrar la renovación en un espacio arraigado en el cuidado, la creatividad y la comunidad consciente en el Valle Sagrado de Perú.',
            cta: 'Ven como eres. Baila como te sientes.',
            btn: 'Entradas vía Casa de Oso'
        },
        zones: {
            condor: { title: 'Condor Shala', desc: 'Una pista de baile inmersiva que ofrece un viaje sonoro distinto elevando el espíritu.' },
            puma: { title: 'Puma Hall', desc: 'Un espacio conectado a tierra para el movimiento, conectándonos profundamente con el ritmo de la tierra.' },
            ukhu: { title: 'Templo Ukhu', desc: 'Un espacio acústico de té para el descanso, la calidez y la curación con sonido suave.' },
            garden: { title: 'Jardines del Santuario', desc: 'Espacios abiertos para respirar bajo las estrellas del Valle Sagrado.' }
        }
    },
    food: {
      title: 'Comida saludable hecha con amor',
      subtitle: 'En el Santuario Ayni, la comida es ceremonia.',
      featured: {
        tag: 'Nutrición',
        title: 'Cocina Consciente',
        p1: 'Nuestra experiencia gastronómica se centra en ingredientes frescos y locales preparados con intención, transformando cada comida en nutrición tanto para el cuerpo como para el espíritu. Ya sea que asista a un retiro, organice un evento o disfrute de una estadía personal, nuestra cocina ofrece menús personalizados que apoyan su viaje, desintoxicando, energizando, conectando con la tierra o reconfortando.',
        p2: 'Honramos todas las necesidades dietéticas con opciones veganas, vegetarianas, sin gluten, sin lácteos y sensibles a los alérgenos, así como platos omnívoros equilibrados. Los huéspedes pueden cenar en el Lodge o al aire libre con vistas a la montaña, compartiendo comidas que fomentan la conexión, la gratitud y el bienestar.',
        btn: 'Ver Menú de Muestra'
      },
      features: {
        local: { title: 'Origen Local', desc: 'Ingredientes frescos obtenidos directamente de agricultores locales del Valle Sagrado.' },
        dietary: { title: 'Dieta Inclusiva', desc: 'Opciones veganas, sin gluten y sensibles a alérgenos preparadas con cuidado.' },
        intention: { title: 'Preparado con Intención', desc: 'Transformando cada comida en nutrición tanto para el cuerpo como para el espíritu.' },
        community: { title: 'Comida en Comunidad', desc: 'Compartir comidas que fomentan la conexión, la gratitud y el bienestar.' }
      }
    },
    temple: {
      title: 'El Templo Ayni',
      subtitle: 'Un espacio sagrado para la contemplación, la ceremonia y la conexión.',
      featured: {
        tag: 'Espacio Sagrado',
        title: 'Santuario de Luz',
        desc: 'Construido con intención y alineado con los elementos, nuestro templo sirve como el corazón de la práctica espiritual, invitando al silencio profundo y la reverencia.',
        btn: 'Visítanos'
      },
      offerings: {
        ceremonies: { title: 'Ceremonias', desc: 'Ceremonias andinas tradicionales honrando a la tierra y al cosmos.' },
        meditation: { title: 'Meditación', desc: 'Sesiones diarias de meditación guiada y silenciosa.' },
        workshops: { title: 'Talleres', desc: 'Reuniones educativas sobre sabiduría antigua y sanación moderna.' },
        healing: { title: 'Artes Curativas', desc: 'Sesiones privadas con practicantes holísticos.' }
      }
    },
    shop: {
      title: 'Tienda Ayni',
      subtitle: 'Apoya nuestra causa con estos artículos exclusivos.',
      addToCart: 'Añadir al Carrito',
      productDesc: 'Hermosamente elaborado para representar los valores de nuestra fundación.'
    },
    profile: {
      title: 'Perfil de Miembro',
      welcome: 'Bienvenido de nuevo, buscador.',
      membership: 'Estado de Membresía',
      active: 'Activo',
      history: 'Historial de Contribuciones',
      edit: 'Editar Perfil',
      since: 'Miembro desde',
      impact: 'Puntaje de Impacto',
      favoritePlant: 'Planta Favorita',
      hours: 'Horas de Voluntariado',
      contribution: 'Contribución Comunitaria'
    }
  },
  [Language.QU]: {
    nav: {
      home: 'Qallariy',
      profile: 'Runa',
      shop: 'Qhatu',
      activities: 'Ruraykuna',
      events: 'Raymikuna',
      temple: 'Willka Wasi',
      food: 'Mikhuna',
      login: 'Yaykuy'
    },
    values: {
      integrity: 'Chiqan Kay',
      honor: 'Alli Kay',
      sovereignty: 'Qispikay',
      prosperity: 'Qapaq Kay',
      grace: 'Sumaq Kay',
      royalty: 'Inka Kay',
      respect: 'Yupaychay',
      joy: 'Kusikuy',
      presence: 'Kaypi Kay',
      focus: 'Yuyay',
      love: 'Munay',
      peace: 'Qasi Kay',
      wisdom: 'Yachay',
      title: 'Ñawpaqman Purinapaq'
    },
    hero: {
      title: 'Maypichus ayllu, kamay, huk yuyay ima wiñanku',
      subtitle: 'Yachaywan k\'anchaywan llamk\'aspa.',
      cta: 'Hukllawakuy',
      p1: 'Ayni simiqa, ayninakuy niyta munan. Tukuy kawsayqa yanapanakuymanta paqarin. Kay ñawpa yachaymanta Ayni Tantanakuy paqarimurqa, runa, pacha, apukuna ima allinta kawsanankupaq.',
      p2: 'Sumaq k\'anchayninwan, Ayni Sanctuary paqarimurqa Valle Sagrado nisqapi. Kaypiqa Ayni yachaykuna mana yuyayllachu, kawsaymi. Hampiymanta, chiqan kaymanta, sumaq kawsaymanta ima yachachin.',
      p3: 'Ayni llamk\'aqkunaqa imaymana yachaqkunam kanku: yachachiqkuna, takiqkuna, willakuqkuna, hampi yachaqkuna ima. Sapa hukninku sumaq yachayninkuwan yanapakunku, Ayni sunquwan.',
      p4: 'Ayni Sanctuaryqa huk kawsay pacha, maypichus ayllu, allpa, apukuna ima kuska llamk\'anku. Hampiwan, k\'acha ruraykunwan, sumaq yuyaywan, sapa runata yanapan chiqan kayninta tarinankupaq.'
    },
    footer: {
      connect: 'Ñuqaykuwan tinkuy',
      rights: 'Llapallan hayñikuna waqaychasqa.'
    },
    activities: {
      title: 'Ruraykuna & Ayninakuy',
      subtitle: 'Hukllawakuy kay hatun llamk\'aypi.',
      collabTitle: 'Imayna Yanapakuy',
      collabText: 'Imaymana ñankuna kan yanapanakuypaq, maki puririchiypaqpas.',
      excursionsTitle: 'Willka Suyukuna',
      excursionsSubtitle: 'Kawsay kallpata riqsiy kay suyukunapi.',
      featured: {
        tag: 'Hatun Ruray',
        title: 'Ayni Muyu',
        desc: 'Tukuy tiksimuyumanta runakuna huñunakunku yachayta, willakuyta, kawsayta ima ayninakunankupaq.',
        btn: 'Yachay'
      },
      types: {
        outreach: { title: 'Aylluwan Llamk\'ay', desc: 'Ayllukunawan kuskachakuspa yanapanakuy.' },
        sustainable: { title: 'Wiñaypaq Ruraykuna', desc: 'Allin kawsaypaq ruraykuna qispichiy.' },
        partnerships: { title: 'Masichakuy', desc: 'Huk tantanakuykunawan yanapanakuy.' },
        volunteer: { title: 'Maki Puririchiy', desc: 'Sunquwan llamk\'ay sapa p\'unchaw ruraykunapi.' }
      },
      items: {
        pitusiray: {
          title: 'Apu Pitusiray & Lake Qan Qan',
          desc: 'Mountain of wisdom and protection. Serene lakeside space ideal for meditation, ceremony, and reflection.'
        },
        urco: {
          title: 'Urco – Temple of Water',
          desc: 'Nearby Incan ceremonial site dedicated to water and fertility. Flowing channels for purification, renewal, and gratitude.'
        },
        chinchero: {
          title: 'Chinchero, Moray & Maras Salt Mines',
          desc: 'Moray’s ancient agricultural terraces. Maras’ pre-Incan salt pools. Chinchero’s traditional weaving and living culture.'
        },
        huchuy: {
          title: 'Huchuy Qosqo (Little Cusco)',
          desc: 'Gentle trek to an ancient Incan royal estate. Panoramic views, Incan terraces, and a strong historical presence.'
        },
        pisac: {
          title: 'Pisac & Ancient Citadel',
          desc: 'Star-aligned ceremonial temples. Artisan market with sacred crafts, textiles, and instruments.'
        },
        ollantaytambo: {
          title: 'Ollantaytambo & Gateway to Machu Picchu',
          desc: '“Living Inca City” with potent energetic architecture. Starting point for travel to Aguas Calientes and Machu Picchu.'
        }
      }
    },
    events: {
        title: 'Raymikuna & Huñunakuykuna',
        subtitle: 'Ñuqaykuwan raymichay ch\'uya pachapi.',
        zonesTitle: 'Raymi Suyukuna',
        zonesText: 'Kawsay kallpata riqsiy kay suyukunapi.',
        featured: {
            tag: 'Musuq Wata',
            title: 'Tusuy Raymi',
            subtitle: 'Liquid Bloom, Calagna, huk takiqkunawan.',
            p1: 'Ayni Sanctuarypi, Valle Sagradopi, Casa de Oso rikuchin hatun Musuq Wata tusuy raymita. Kaypiqa allin takiqkuna, DJkuna ima hamunquku. Ayni Sanctuaryqa kay hatun huñunakuyta chaskikun sunquwan, mana machaywan, libre kawsaywan.',
            p2: 'Iskay hatun tusuna wasi kanqa: Condor Shala, Puma Hall ima. Chaymanta Ukhu Temple kanqa, samana wasi, upyana wasi, qasi kayta tarinapaq. Takiwan tusuywan musuq wataman yaykusun.',
            cta: 'Imayna kanki chay hina hamuy. Munayniyki hina tusuy.',
            btn: 'Entradas Casa de Osopi'
        },
        zones: {
            condor: { title: 'Condor Shala', desc: 'Tusuna wasi, sumaq takiwan nunanchikta uqarinapaq.' },
            puma: { title: 'Puma Hall', desc: 'Pachamamawan tinkunapaq tusuna wasi.' },
            ukhu: { title: 'Ukhu Temple', desc: 'Samana wasi, qasi kayta, hampi takita tarinapaq.' },
            garden: { title: 'Santuario Muya', desc: 'Ch\'askakunata qhawanapaq kichasqa pacha.' }
        }
    },
    food: {
      title: 'Allin mikhuna munaywan rurasqa',
      subtitle: 'Ayni Sanctuarypi, mikhuyqa huk raymim.',
      featured: {
        tag: 'Kawsay',
        title: 'Munay Mikhuna',
        p1: 'Ñuqaykupa mikhunaykuqa musuq, kay pachamanta rurasqa. Sapa mikhuyqa cuerpota nunatawan kallpachan.',
        p2: 'Tukuy laya mikhuytam rurayku: vegano, vegetariano, mana glutenyuq. Huñunakuspa, urqukunata qhawaspa mikhusunchik.',
        btn: 'Qhaway Mikhunata'
      },
      features: {
        local: { title: 'Kay Pachamanta', desc: 'Valle Sagrado chakrakunamanta musuq mikhuykuna.' },
        dietary: { title: 'Tukuy Laya', desc: 'Vegano, mana glutenyuq mikhuykuna k\'achalla rurasqa.' },
        intention: { title: 'Munaywan Rurasqa', desc: 'Mikhuyqa cuerpota nunatawan kallpachan.' },
        community: { title: 'Ayllu Mikhuy', desc: 'Kuska mikhuspa, sunqunchikta t\'ikarichisun.' }
      }
    },
    temple: {
      title: 'Ayni Willka Wasi',
      subtitle: 'Huk ch\'uya pacha yuyaymananapaq, raymichanapaq, tinkunapaq.',
      featured: {
        tag: 'Ch\'uya Pacha',
        title: 'K\'anchay Wasi',
        desc: 'Allin yuyaywan rurasqa, tawantin suyuman chiqanchasqa, kay wasiqa sunqunchikmi, ch\'inlla kayta yachachin.',
        btn: 'Rikumuy'
      },
      offerings: {
        ceremonies: { title: 'Raymikuna', desc: 'Pachamamaman Apukunaman haywarikuy.' },
        meditation: { title: 'Yuyaymanay', desc: 'Sapa p\'unchaw ch\'inlla kay, sunquta uyariypaq.' },
        workshops: { title: 'Yachachinakuy', desc: 'Ñawpa yachaykunamanta kunan hampiymantawan rimanakuy.' },
        healing: { title: 'Hampiy', desc: 'Hampi yachaqkunawan sapalla tinkuy.' }
      }
    },
    shop: {
      title: 'Ayni Qhatu',
      subtitle: 'Yanapakuy kay sumaq ruraykunawan.',
      addToCart: 'Qhatuman churay',
      productDesc: 'Sumaq rurasqa, wasinchikpa chaninkunata rikuchinapaq.'
    },
    profile: {
      title: 'Wasi Runa',
      welcome: 'Allinmi hamusqayki.',
      membership: 'Suyu',
      active: 'Kawsachkan',
      history: 'Yanapaykuna',
      edit: 'Allichay',
      since: 'Kaymanta pacha',
      impact: 'Yanapay Tupu',
      favoritePlant: 'Yura',
      hours: 'Llamk\'asqa Pachakuna',
      contribution: 'Ayllu Yanapay'
    }
  }
};