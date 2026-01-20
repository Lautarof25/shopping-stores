const stores = [
  {
    id: 'tiendas',
    name: 'Boutique Luna',
    category: 'moda',
    description: 'ropa femenina moda accesorios colecciones exclusivas',
    schemaType: 'https://schema.org/Store',
    minHeightClass: 'min-h-[500px] md:min-h-[400px] lg:min-h-[450px]',
    mainImage: {
      src: 'https://images.unsplash.com/photo-1555529771-122e5d9f2341?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Boutique Luna - Ropa femenina de última tendencia',
      badge: 'Local 22',
      badgeColor: 'bg-pink-600'
    },
    header: {
      titleClass: 'text-pink-600',
      iconClass: 'text-pink-500',
      keywords: 'Moda',
      hours: '10:00 - 20:00',
      datetime: 'Mo-Sa 10:00-20:00'
    },
    content: {
      text: 'Ropa femenina de última tendencia, accesorios y colecciones exclusivas para esta temporada. Espacio con probadores y atención personalizada.',
      specialtiesTitle: '👗 Especialidades:',
      specialtiesTitleClass: 'text-pink-700',
      specialtiesBg: 'bg-pink-50 border-pink-100',
      tags: [
        { text: 'Vestidos', class: 'bg-pink-100 text-pink-700' },
        { text: 'Alta moda', class: 'bg-pink-100 text-pink-700' },
        { text: 'Accesorios', class: 'bg-pink-100 text-pink-700' },
        { text: 'Servicio costura', class: 'bg-pink-100 text-pink-700' }
      ]
    },
    website: {
      url: 'https://www.google.com',
      text: 'Visitar sitio web',
      classes: 'from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 focus:ring-pink-500'
    },
    socials: [
      { url: 'https://wa.me/', icon: 'fab fa-whatsapp', bg: 'bg-green-500' },
      { url: 'https://www.facebook.com/', icon: 'fab fa-facebook-f', bg: 'bg-blue-600' },
      { url: 'https://www.instagram.com/', icon: 'fab fa-instagram', bg: 'bg-gradient-to-r from-pink-500 to-purple-600' },
      { url: 'https://www.twitter.com/', icon: 'fab fa-twitter', bg: 'bg-blue-400' },
      { url: 'https://www.youtube.com/', icon: 'fab fa-youtube', bg: 'bg-red-600' }
    ],
    thumbnails: [
      { src: 'https://images.unsplash.com/photo-1576961453646-b4c376c7021b?q=80&w=1470', alt: 'Interior boutique' },
      { src: 'https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?q=80&w=1470', alt: 'Accesorios' },
      { src: 'https://images.unsplash.com/photo-1630905119003-329447458f85?q=80&w=1470', alt: 'Prendas' }
    ],
    detailLink: {
      url: 'detalle-boutique-luna.html',
      classes: 'from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 focus:ring-pink-500'
    }
  },
  {
    id: 'techworld',
    name: 'Tech World',
    category: 'tecnología',
    description: 'dispositivos tecnológicos smartphones tablets accesorios asesoramiento servicio técnico',
    schemaType: 'https://schema.org/Store',
    minHeightClass: 'min-h-[500px] md:min-h-[400px] lg:min-h-[450px]',
    mainImage: {
      src: 'https://images.unsplash.com/photo-1711397500624-4bd8d6170fff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Tech World - Dispositivos tecnológicos y electrónica',
      badge: 'Local 15',
      badgeColor: 'bg-blue-600'
    },
    header: {
      titleClass: 'text-blue-600',
      iconClass: 'text-blue-500',
      icon: 'fas fa-microchip',
      keywords: 'Tecnología',
      hours: '9:00 - 21:00',
      datetime: 'Mo-Sa 9:00-21:00'
    },
    content: {
      text: 'Los últimos dispositivos tecnológicos, smartphones, tablets y accesorios. Asesoramiento especializado y servicio técnico certificado.',
      specialtiesTitle: '🚀 Especialidades:',
      specialtiesTitleClass: 'text-blue-700',
      specialtiesBg: 'bg-blue-50 border-blue-100',
      tags: [
        { text: 'Smartphones', class: 'bg-blue-100 text-blue-700' },
        { text: 'Tablets', class: 'bg-blue-100 text-blue-700' },
        { text: 'Accesorios', class: 'bg-blue-100 text-blue-700' },
        { text: 'Servicio Técnico', class: 'bg-blue-100 text-blue-700' }
      ]
    },
    website: {
      url: 'https://www.techworld.example.com',
      text: 'Visitar sitio web',
      classes: 'from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 focus:ring-blue-500'
    },
    socials: [
      { url: 'https://wa.me/1234567890', icon: 'fab fa-whatsapp', bg: 'bg-green-500' },
      { url: 'https://www.facebook.com/techworld', icon: 'fab fa-facebook-f', bg: 'bg-blue-600' },
      { url: 'https://www.instagram.com/techworld', icon: 'fab fa-instagram', bg: 'bg-gradient-to-r from-pink-500 to-purple-600' },
      { url: 'https://www.twitter.com/techworld', icon: 'fab fa-twitter', bg: 'bg-blue-400' }
    ],
    thumbnails: [
      { src: 'https://images.unsplash.com/photo-1598965402089-897ce52e8355?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Smartphones en exhibición en Tech World' },
      { src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Audífonos y accesorios en Tech World' },
      { src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Servicio técnico en Tech World' }
    ],
    detailLink: {
      url: 'detalle-techworld.html',
      classes: 'from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:ring-blue-500'
    }
  },
  {
    id: 'deliciouspan',
    name: 'Delicious Pan',
    category: 'gastronomía',
    description: 'comida internacional sabores auténticos ambiente acogedor servicio excepcional platos especiales postres caseros',
    schemaType: 'https://schema.org/FoodEstablishment',
    minHeightClass: 'min-h-[500px] md:min-h-[400px] lg:min-h-[450px]',
    mainImage: {
      src: 'https://images.unsplash.com/photo-1556745750-68295fefafc5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Delicious Pan - Panadería y pastelería artesanal',
      badge: 'Local 08',
      badgeColor: 'bg-amber-600'
    },
    header: {
      titleClass: 'text-amber-600',
      iconClass: 'text-amber-500',
      icon: 'fas fa-utensils',
      keywords: 'Gastronomía',
      hours: '9:00 - 19:00',
      datetime: 'Mo-Su 9:00-19:00'
    },
    content: {
      text: 'Facturas, postres, café, con sabores auténticos. Ambiente acogedor y servicio excepcional. Disfruta de nuestros platos especiales y postres caseros.',
      specialtiesTitle: '🍰 Especialidades:',
      specialtiesTitleClass: 'text-amber-700',
      specialtiesBg: 'bg-amber-50 border-amber-100',
      tags: [
        { text: 'Panadería', class: 'bg-amber-100 text-amber-700' },
        { text: 'Pastelería', class: 'bg-amber-100 text-amber-700' },
        { text: 'Café', class: 'bg-amber-100 text-amber-700' },
        { text: 'Postres Caseros', class: 'bg-amber-100 text-amber-700' }
      ]
    },
    website: {
      url: 'google.com',
      text: 'Visitar sitio web',
      classes: 'from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 focus:ring-amber-500'
    },
    socials: [
      { url: 'https://wa.me/', icon: 'fab fa-whatsapp', bg: 'bg-green-500' },
      { url: 'https://www.facebook.com/', icon: 'fab fa-facebook-f', bg: 'bg-blue-600' },
      { url: 'https://www.instagram.com/', icon: 'fab fa-instagram', bg: 'bg-gradient-to-r from-pink-500 to-purple-600' },
      { url: 'https://www.tiktok.com/', icon: 'fab fa-tiktok', bg: 'bg-black' }
    ],
    thumbnails: [
      { src: 'https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Interior de Delicious Pan - ambiente acogedor' },
      { src: 'https://images.unsplash.com/photo-1623334044303-241021148842?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Productos de panadería en Delicious Pan' },
      { src: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Postres caseros en Delicious Pan' }
    ],
    detailLink: {
      url: 'detalle-deliciouspan.html',
      classes: 'from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 focus:ring-amber-500'
    }
  },
  {
    id: 'localdisponible',
    name: 'Espacio Comercial Disponible',
    category: 'alquiler',
    description: 'local disponible espacio físico y virtual para alquilar',
    schemaType: 'https://schema.org/RealEstateListing',
    minHeightClass: 'min-h-[500px] md:min-h-[400px] lg:min-h-[450px]',
    mainImage: {
      src: 'https://images.pexels.com/photos/112811/pexels-photo-112811.jpeg',
      alt: 'Local en alquiler - Espacio comercial disponible',
      badge: '✅ Disponible',
      badgeColor: 'bg-green-600 animate-pulse'
    },
    header: {
      isAvailableCard: true,
      titleClass: 'text-green-700',
      preTitle: 'Local 33 - Alquiler',
      preTitleClass: 'bg-green-600',
      data: [
        { label: 'Estado', value: 'Disponible para alquiler', valueClass: 'text-green-600 font-semibold', icon: 'fas fa-check-circle', iconClass: 'text-green-500' },
        { label: 'Superficie', value: '25 m²', icon: 'fas fa-ruler-combined', iconClass: 'text-green-500' },
        { label: 'Tipo', value: 'Físico + Virtual', icon: 'fas fa-store', iconClass: 'text-green-500' }
      ]
    },
    content: {
      text: 'Espacio comercial ideal para tu negocio o emprendimiento. Incluye <strong>local físico</strong> en ubicación privilegiada más <strong>espacio virtual</strong> en nuestro sitio web para promocionar tu marca.',
      specialtiesTitle: '✨ Incluye:',
      specialtiesTitleClass: 'text-green-700',
      specialtiesBg: 'bg-green-50 border-green-100',
      listItems: [
        { text: 'Espacio físico completamente equipado', icon: 'fas fa-check text-green-500' },
        { text: 'Página web promocional incluida', icon: 'fas fa-check text-green-500' },
        { text: 'Servicios básicos incluidos', icon: 'fas fa-check text-green-500' }
      ]
    },
    website: {
      url: 'mailto:alquileres@galeriacentral.com',
      text: 'Consultar disponibilidad',
      icon: 'fas fa-envelope',
      classes: 'from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 focus:ring-green-500'
    },
    socials: [
      { url: 'https://wa.me/?text=Hola,%20estoy%20interesado%20en%20el%20local%2033%20para%20alquiler', icon: 'fab fa-whatsapp', bg: 'bg-green-500' },
      { url: 'tel:+1234567890', icon: 'fas fa-phone', bg: 'bg-blue-500' },
      { url: 'mailto:alquileres@galeriacentral.com', icon: 'fas fa-envelope', bg: 'bg-indigo-500' }
    ],
    thumbnails: [
      { src: 'https://images.unsplash.com/photo-1576961453646-b4c376c7021b?q=80&w=1470', alt: 'Vista interior del local disponible' },
      { src: 'https://images.unsplash.com/photo-1668433258053-b4cfb63002b7?q=80&w=1074', alt: 'Plano o disposición del local disponible' },
      { src: 'https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=1470', alt: 'Ejemplo de negocio en local similar' }
    ],
    detailLink: {
      url: 'detalle-local-disponible.html',
      text: 'Ver detalles completos',
      icon: 'fas fa-info-circle',
      classes: 'from-green-700 to-emerald-700 hover:from-green-800 hover:to-emerald-800 focus:ring-green-500'
    }
  }
];
