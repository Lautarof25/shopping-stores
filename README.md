# 🛍️ Galería Central - Shopping Stores

Una aplicación web moderna y responsive para mostrar locales comerciales en un centro comercial, con funcionalidades de búsqueda, filtrado y páginas de detalle interactivas.

![Galería Central](https://img.shields.io/badge/Status-Complete-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Demo](#-demo)
- [Instalación](#-instalación)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Funcionalidades](#-funcionalidades)
- [Responsive Design](#-responsive-design)
- [Capturas de Pantalla](#-capturas-de-pantalla)
- [Contribuir](#-contribuir)
- [Licencia](#-licencia)

## ✨ Características

### 🏪 **Página Principal**
- **Sidebar fijo** con navegación y filtros
- **Menú móvil** deslizable con overlay
- **Sistema de búsqueda** en tiempo real
- **Filtros por categoría** (Moda, Gastronomía, Tecnología)
- **Cards responsivas** con scroll snap
- **Botones "Ver más"** siempre visibles en móviles

### 🛍️ **Páginas de Detalle**
- **Hero section** con información del local
- **Imagen principal horizontal** para mejor visualización
- **Productos destacados** con imágenes reales y precios
- **Formulario de consulta** integrado con WhatsApp
- **Slider de fotos** del local con navegación
- **Botones de WhatsApp** para consultas directas

### 📱 **Experiencia Móvil**
- **Diseño responsive** optimizado para todos los dispositivos
- **Scroll snap** para navegación fluida entre secciones
- **Botones fijos** que siempre están visibles
- **Menú hamburguesa** intuitivo
- **Imágenes adaptativas** con diferentes tamaños

## 🚀 Demo

Puedes ver el proyecto en acción abriendo `index.html` en tu navegador web.

### Enlaces de Navegación:
- **Página Principal**: `index.html`
- **Detalle Boutique Luna**: `detalle-boutique-luna.html`

## 🛠️ Instalación

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/shopping-stores.git
   cd shopping-stores
   ```

2. **Abre el proyecto:**
   - Simplemente abre `index.html` en tu navegador web
   - O usa un servidor local:
   ```bash
   # Con Python
   python -m http.server 8000
   
   # Con Node.js
   npx serve .
   
   # Con PHP
   php -S localhost:8000
   ```

3. **¡Listo!** El proyecto estará disponible en `http://localhost:8000`

## 📁 Estructura del Proyecto

```
shoppingStores/
├── index.html                    # Página principal
├── detalle-boutique-luna.html    # Página de detalle de Boutique Luna
├── style.css                     # Estilos CSS personalizados
├── script.js                     # Funcionalidad JavaScript
└── README.md                     # Documentación del proyecto
```

## 🛠️ Tecnologías Utilizadas

### **Frontend:**
- **HTML5** - Estructura semántica
- **CSS3** - Estilos personalizados y animaciones
- **JavaScript (ES6+)** - Funcionalidad interactiva
- **Tailwind CSS** - Framework de utilidades CSS
- **Font Awesome** - Iconografía

### **Características Técnicas:**
- **Responsive Design** - Mobile-first approach
- **CSS Grid & Flexbox** - Layouts modernos
- **CSS Custom Properties** - Variables CSS
- **Scroll Snap** - Navegación fluida
- **Intersection Observer** - Optimización de rendimiento
- **Local Storage** - Persistencia de datos

## ⚡ Funcionalidades

### 🔍 **Sistema de Búsqueda y Filtrado**
- Búsqueda en tiempo real por descripción de locales
- Filtros por categorías (Todos, Moda, Gastronomía, Tecnología)
- Sincronización entre sidebar desktop y móvil
- Mensaje de "No se encontraron resultados"

### 📱 **Navegación Móvil**
- Menú hamburguesa deslizable
- Overlay de fondo para mejor UX
- Botones de navegación fijos en la parte inferior
- Scroll snap para navegación entre secciones

### 🛍️ **Páginas de Detalle**
- Información completa del local
- Galería de productos con imágenes reales
- Precios y badges (Top Venta, Nuevo, Oferta)
- Formulario de consulta integrado
- Slider de fotos del local

### 💬 **Integración WhatsApp**
- Botones de consulta directa por producto
- Formulario que genera mensajes preformateados
- Enlaces con datos de contacto estructurados

## 📱 Responsive Design

### **Breakpoints:**
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### **Características Responsive:**
- **Imágenes adaptativas** con diferentes tamaños
- **Texto responsivo** con clamp() para escalado fluido
- **Layout flexible** que se adapta al contenido
- **Botones optimizados** para touch en móviles

## 📸 Capturas de Pantalla

### Desktop View
- Sidebar fijo con filtros y búsqueda
- Cards de locales con información completa
- Navegación fluida entre secciones

### Mobile View
- Menú hamburguesa deslizable
- Cards optimizadas para pantallas pequeñas
- Botones fijos siempre visibles

### Página de Detalle
- Hero section con información del local
- Productos destacados con imágenes
- Formulario de consulta integrado
- Slider de fotos del local

## 🎨 Personalización

### **Colores Principales:**
- **Rosa**: `#EC4899` (Botones principales)
- **Azul**: `#3754FA` (Logo y acentos)
- **Gris**: `#6B7280` (Texto secundario)

### **Tipografía:**
- **Títulos**: Font-weight bold, responsive sizing
- **Texto**: Font-weight normal, clamp() para escalado
- **Botones**: Font-weight semibold

### **Espaciado:**
- **Padding**: Sistema consistente de 1rem, 2rem, 4rem
- **Margins**: Espaciado vertical entre secciones
- **Gaps**: Espaciado en grids y flexbox

## 🚀 Próximas Características

- [ ] Más páginas de detalle para otros locales
- [ ] Sistema de favoritos
- [ ] Integración con mapas
- [ ] Sistema de reseñas
- [ ] Modo oscuro
- [ ] PWA (Progressive Web App)

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Tu Nombre**
- GitHub: [@tu-usuario](https://github.com/tu-usuario)
- LinkedIn: [Tu Perfil](https://linkedin.com/in/tu-perfil)

## 🙏 Agradecimientos

- [Tailwind CSS](https://tailwindcss.com/) por el framework de utilidades
- [Font Awesome](https://fontawesome.com/) por los iconos
- [Picsum](https://picsum.photos/) por las imágenes de placeholder

---

⭐ **¡Si te gusta este proyecto, no olvides darle una estrella!** ⭐