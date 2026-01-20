const promos = [
  {
    id: 'promo-standup',
    type: 'comedy',
    schemaType: 'https://schema.org/ComedyEvent',
    containerClasses: 'bg-gradient-to-r from-amber-500 to-orange-600 shadow-2xl transform hover:-translate-y-1 transition-transform duration-300',
    badge: {
      text: '😂 Noche de Comedia',
      classes: 'bg-white/20 backdrop-blur-sm text-white'
    },
    title: 'Stand Up en el Paseo',
    description: 'Los mejores comediantes locales te harán reír a carcajadas. Disfruta de un espectáculo único mientras haces tus compras. ¡Risas garantizadas para toda la familia!',
    cta: {
      text: 'Reservar Lugar',
      url: '#reservar',
      icon: 'fas fa-laugh-beam',
      classes: 'bg-white text-orange-600 hover:bg-gray-100 hover:shadow-xl focus:ring-white/50'
    },
    socials: [
      { url: 'https://wa.me/', icon: 'fab fa-whatsapp' },
      { url: 'https://www.facebook.com/', icon: 'fab fa-facebook-f' },
      { url: 'https://www.instagram.com/', icon: 'fab fa-instagram' }
    ],
    info: [
      { text: '12 Noviembre 2025', icon: 'fas fa-calendar-alt', datetime: '2025-11-12' },
      { text: '19:00 - 21:00 hs', icon: 'fas fa-clock' },
      { text: 'Primer piso', icon: 'fas fa-map-marker-alt' }
    ],
    image: {
      src: 'https://images.unsplash.com/photo-1611956425642-d5a8169abd63?q=80&w=1511&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Show de Stand Up Comedy en el Paseo del Sol',
      badge: 'ENTRADA GRATIS',
      badgeClasses: 'bg-green-500 text-white shadow-2xl discount-badge'
    },
    layout: 'normal' // image on right (or bottom in mobile)
  },
  {
    id: 'promo-apertura',
    type: 'opening',
    schemaType: 'https://schema.org/PromotionEvent',
    containerClasses: 'bg-gradient-to-r from-purple-600 to-pink-500 shadow-2xl transform hover:-translate-y-1 transition-transform duration-300',
    badge: {
      text: '🎉 Gran Apertura',
      classes: 'bg-white/20 backdrop-blur-sm text-white'
    },
    title: '¡Descubre Ofertas Exclusivas!',
    description: 'Más de 50 locales con descuentos especiales durante todo el mes de inauguración. Moda, gastronomía y tecnología en oferta.',
    cta: {
      text: 'Ver Ofertas',
      url: '#tiendas',
      icon: 'fas fa-tag',
      classes: 'bg-white text-pink-600 hover:bg-gray-100 hover:shadow-xl focus:ring-white/50'
    },
    socials: [
      { url: 'https://wa.me/', icon: 'fab fa-whatsapp' },
      { url: 'https://www.facebook.com/', icon: 'fab fa-facebook-f' },
      { url: 'https://www.instagram.com/', icon: 'fab fa-instagram' }
    ],
    info: [
      { text: '1 - 30 Noviembre 2024', icon: 'fas fa-calendar-alt', datetime: '2023-11-01' },
      { text: '10:00 - 22:00 hs', icon: 'fas fa-clock' }
    ],
    image: {
      src: 'https://images.unsplash.com/photo-1563014959-7aaa83350992?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Promoción especial de apertura del centro comercial',
      badge: '-50% OFF',
      badgeClasses: 'bg-red-500 text-white shadow-2xl discount-badge'
    },
    layout: 'normal'
  },
  {
    id: 'promo-tech',
    type: 'tech-offer',
    schemaType: 'https://schema.org/PromotionEvent',
    containerClasses: 'bg-gradient-to-l from-blue-600 to-indigo-700 shadow-2xl',
    badge: {
      text: '🔥 Oferta Limitada',
      classes: 'bg-white/20 backdrop-blur-sm text-white'
    },
    title: 'Tecnología en Oferta',
    description: 'Descubre las últimas novedades en tecnología con descuentos exclusivos. Smartphones, laptops, accesorios y más con hasta 40% de descuento.',
    cta: {
      text: 'Ver Tecnología',
      url: '#tiendas',
      icon: 'fas fa-laptop',
      classes: 'bg-white text-blue-600 hover:bg-gray-100 hover:shadow-xl focus:ring-white/50'
    },
    socials: [
      { url: 'https://wa.me/', icon: 'fab fa-whatsapp' },
      { url: 'https://www.facebook.com/', icon: 'fab fa-facebook-f' },
      { url: 'https://www.instagram.com/', icon: 'fab fa-instagram' }
    ],
    info: [
      { text: '1 - 15 Diciembre 2024', icon: 'fas fa-calendar-alt', datetime: '2023-12-01' },
      { text: '10:00 - 21:00 hs', icon: 'fas fa-clock' }
    ],
    image: {
      src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Ofertas de tecnología en Galería Central',
      // No badge for this one
    },
    layout: 'inverted', // image on left (desktop), but stored in order-1
    extraContent: `
      <div class="mt-4 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
        <p class="text-sm font-medium">🚀 <span class="font-bold">Últimos días:</span> La oferta termina en 15 días</p>
      </div>
    `
  }
];
