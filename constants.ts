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
      subtitle: 'Building a legacy of wisdom and light.',
      cta: 'Join Us'
    },
    footer: {
      connect: 'Connect with us',
      rights: 'All rights reserved.'
    },
    activities: {
      title: 'Activities & Collaboration',
      subtitle: 'Join us in our mission to bring light to the world through various initiatives.',
      collabTitle: 'Ways to Collaborate',
      collabText: 'We offer various paths for collaboration including volunteering, donations, and community partnerships.'
    },
    shop: {
      title: 'Foundation Store',
      subtitle: 'Support our cause with these exclusive items.',
      addToCart: 'Add to Cart'
    },
    profile: {
      title: 'Member Profile',
      welcome: 'Welcome back, seeker.',
      membership: 'Membership Status',
      active: 'Active',
      history: 'Donation History'
    }
  },
  [Language.ES]: {
    nav: {
      home: 'Inicio',
      profile: 'Perfil',
      shop: 'Tienda',
      activities: 'Actividades',
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
      subtitle: 'Construyendo un legado de sabiduría y luz.',
      cta: 'Únete'
    },
    footer: {
      connect: 'Conéctate con nosotros',
      rights: 'Todos los derechos reservados.'
    },
    activities: {
      title: 'Actividades y Colaboración',
      subtitle: 'Únete a nuestra misión de traer luz al mundo a través de diversas iniciativas.',
      collabTitle: 'Formas de Colaborar',
      collabText: 'Ofrecemos varios caminos para la colaboración, incluyendo voluntariado, donaciones y asociaciones comunitarias.'
    },
    shop: {
      title: 'Tienda de la Fundación',
      subtitle: 'Apoya nuestra causa con estos artículos exclusivos.',
      addToCart: 'Añadir al Carrito'
    },
    profile: {
      title: 'Perfil de Miembro',
      welcome: 'Bienvenido de nuevo, buscador.',
      membership: 'Estado de Membresía',
      active: 'Activo',
      history: 'Historial de Donaciones'
    }
  },
  [Language.QU]: {
    nav: {
      home: 'Qallariy',
      profile: 'Runa',
      shop: 'Qhatu',
      activities: 'Ruraykuna',
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
      subtitle: 'Yachaywan k\'anchaywan llamk\'aspa.',
      cta: 'Hukllawakuy'
    },
    footer: {
      connect: 'Ñuqaykuwan tinkuy',
      rights: 'Llapallan hayñikuna waqaychasqa.'
    },
    activities: {
      title: 'Ruraykuna & Ayninakuy',
      subtitle: 'Hukllawakuy kay hatun llamk\'aypi.',
      collabTitle: 'Imayna Yanapakuy',
      collabText: 'Imaymana ñankuna kan yanapanakuypaq, maki puririchiypaqpas.'
    },
    shop: {
      title: 'Wasi Qhatu',
      subtitle: 'Yanapakuy kay sumaq ruraykunawan.',
      addToCart: 'Qhatuman churay'
    },
    profile: {
      title: 'Wasi Runa',
      welcome: 'Allinmi hamusqayki.',
      membership: 'Suyu',
      active: 'Kawsachkan',
      history: 'Qusqaykuna'
    }
  }
};