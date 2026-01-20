// Imports removed for local file compatibility
// Data is loaded via script tags in index.html

// --- Rendering Logic ---

function renderStoreCard(store) {
    const specialtiesHtml = store.content.tags ? store.content.tags.map(tag =>
        `<span class="text-xs ${tag.class} px-2 py-1 rounded">${tag.text}</span>`
    ).join('') : '';

    const socialsHtml = store.socials.map(social =>
        `<a href="${social.url}" class="group w-12 h-12 rounded-full ${social.bg} flex items-center justify-center text-white 
            transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex-shrink-0">
            <i class="${social.icon} text-lg group-hover:scale-110 transition-transform duration-200"></i>
        </a>`
    ).join('');

    const thumbnailsHtml = store.thumbnails.map((thumb, index) => {
        let roundedClass = '';
        if (index === 0) roundedClass = 'rounded-lg lg:rounded-tr-xl lg:rounded-bl-none lg:rounded-br-none lg:rounded-tl-none';
        else if (index === 1) roundedClass = 'rounded-lg lg:rounded-tr-none lg:rounded-tl-none lg:rounded-br-none lg:rounded-bl-none'; // Simplified 
        else if (index === 2) roundedClass = 'rounded-lg lg:rounded-br-xl lg:rounded-tl-none lg:rounded-tr-none lg:rounded-bl-none';

        // Simpler approach for middle image ensuring it looks good
        if (index === 1) roundedClass = 'rounded-lg lg:rounded-none';

        return `<div class="flex-1 overflow-hidden ${roundedClass}">
            <img src="${thumb.src}" alt="${thumb.alt}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
        </div>`;
    }).join('');

    const badgeHtml = store.mainImage.badge
        ? `<span class="absolute top-4 left-4 ${store.mainImage.badgeColor || 'bg-pink-600'} text-white px-3 py-1 rounded-full text-xs font-semibold uppercase shadow-lg">${store.mainImage.badge}</span>`
        : '';

    const headerPreTitle = store.header.preTitle
        ? `<span class="inline-block ${store.header.preTitleClass} text-white px-4 py-2 rounded-full text-sm font-bold uppercase mb-3 shadow-md">${store.header.preTitle}</span>`
        : '';

    const headerData = store.header.data
        ? store.header.data.map(item => `
            <p class="flex items-center">
                <i class="${item.icon} mr-2 ${item.iconClass} w-4"></i>
                <strong>${item.label}:</strong> <span class="ml-1 ${item.valueClass || ''}">${item.value}</span>
            </p>`).join('')
        : `<p class="flex items-center">
                <i class="fas fa-tag mr-2 ${store.header.iconClass || 'text-pink-500'} w-4"></i>
                <strong>Categoría:</strong> <span class="ml-1" itemprop="keywords">${store.header.keywords}</span>
            </p>
            <p class="flex items-center">
                <i class="fas fa-clock mr-2 ${store.header.iconClass || 'text-pink-500'} w-4"></i>
                <strong>Horario:</strong> <time class="ml-1" itemprop="openingHours" datetime="${store.header.datetime}">${store.header.hours}</time>
            </p>`;

    return `
    <article id="${store.id}" class="snap-section flex items-center justify-center p-4 store-card" data-category="${store.category}"
      data-description="${store.description}" itemscope itemtype="${store.schemaType}">

      <div class="w-full max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden 
              flex flex-col md:grid md:grid-cols-12 ${store.minHeightClass}">

        <!-- Imagen principal -->
        <div class="h-64 md:h-full md:col-span-4 lg:col-span-4 relative overflow-hidden">
          <img src="${store.mainImage.src}" alt="${store.mainImage.alt}"
            class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy">
           ${badgeHtml}
        </div>

        <!-- Columna central -->
        <div class="flex-1 md:col-span-5 lg:col-span-5 flex flex-col p-6 min-h-0">
          <div class="mb-4 flex-shrink-0">
            ${headerPreTitle}
            <h3 class="text-2xl lg:text-3xl font-bold ${store.header.titleClass} mb-2" itemprop="name">
              ${store.name}
            </h3>
            <div class="space-y-1 text-sm text-gray-600 mb-3">
                ${headerData}
            </div>
          </div>

          <div class="flex-1 overflow-y-auto mb-4 pr-2 custom-scrollbar min-h-0">
            <p class="text-gray-700 leading-relaxed mb-4 text-sm lg:text-base" itemprop="description">
              ${store.content.text}
            </p>

            <div class="mb-4 p-3 ${store.content.specialtiesBg} rounded-lg border">
              <p class="text-sm font-semibold ${store.content.specialtiesTitleClass} mb-2">${store.content.specialtiesTitle}</p>
              <div class="flex flex-wrap gap-2">
                ${store.content.listItems ? store.content.listItems.map(item => `<div class="flex items-center"><i class="${item.icon} mr-2 text-xs"></i><span class="text-xs text-gray-600">${item.text}</span></div>`).join('') : specialtiesHtml}
              </div>
            </div>

            <div class="mb-4 flex-shrink-0">
              <a href="${store.website.url}" class="inline-flex items-center gap-2 bg-gradient-to-r ${store.website.classes} 
                    text-white px-4 py-2 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2" itemprop="url" target="_blank">
                <i class="${store.website.icon || 'fas fa-globe'}"></i>
                ${store.website.text}
              </a>
            </div>

            <div class="flex justify-center gap-4 flex-wrap flex-shrink-0">
              ${socialsHtml}
            </div>
          </div>

          <div class="hidden md:block flex-shrink-0 mt-auto">
            <a href="${store.detailLink.url}" class="w-full px-6 py-3 bg-gradient-to-r ${store.detailLink.classes} text-white 
                 rounded-lg font-medium text-center block transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2">
               ${store.detailLink.icon ? `<i class="${store.detailLink.icon} mr-2"></i>` : ''}
               ${store.detailLink.text || 'Ver más detalles'}
            </a>
          </div>
        </div>

        <div class="md:hidden p-4 bg-white border-t border-gray-100 sticky bottom-0 z-10 flex-shrink-0">
           <a href="${store.detailLink.url}" class="w-full px-6 py-3 bg-gradient-to-r ${store.detailLink.classes} text-white 
                rounded-lg font-medium text-center block transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
             ${store.detailLink.icon ? `<i class="${store.detailLink.icon} mr-2"></i>` : ''}
             ${store.detailLink.text || 'Ver más detalles'}
           </a>
        </div>

        <!-- Columna derecha -->
        <div class="md:col-span-3 lg:col-span-3 p-4 md:p-2 flex flex-col gap-2 h-full">
            ${thumbnailsHtml}
        </div>
      </div>
    </article>
    `;
}

function renderPromoCard(promo) {
    const socialsHtml = promo.socials.map(social =>
        `<a href="${social.url}" class="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center 
            text-white transition-all duration-300 hover:bg-white/30 hover:-translate-y-0.5 hover:shadow-lg">
            <i class="${social.icon} text-sm"></i>
        </a>`
    ).join('');

    const infoHtml = promo.info.map(item => `
        <div class="flex items-center">
            <i class="${item.icon} mr-3 text-white/80"></i>
            <span class="font-semibold">
                ${item.datetime ? `<time itemprop="startDate" datetime="${item.datetime}">${item.text}</time>` : item.text}
            </span>
        </div>`
    ).join('');

    const badgeHtml = promo.image.badge
        ? `<div class="absolute top-4 right-4 ${promo.image.badgeClasses || 'bg-green-500 text-white shadow-2xl'} px-4 py-2 rounded-full font-bold text-lg z-10">
            ${promo.image.badge}
           </div>`
        : '';

    // Check layout
    const imageOrderClass = promo.layout === 'inverted' ? 'order-1' : '';
    const contentOrderClass = promo.layout === 'inverted' ? 'order-2' : '';

    // Gradiente overlay only if normal? Original has it on both but slightly different.
    // Keeping generic logic
    const overlayGradient = 'bg-gradient-to-l from-amber-500/20 to-orange-600/10'; // Just default, not strict match to every color

    return `
    <section class="w-full max-w-6xl mx-auto my-8 rounded-2xl overflow-hidden ${promo.containerClasses}" itemscope itemtype="${promo.schemaType}">
      <div class="grid grid-cols-1 md:grid-cols-12">
        
        <div class="md:col-span-7 p-8 lg:p-10 flex flex-col justify-center text-white ${contentOrderClass}">
          <div class="inline-block ${promo.badge.classes} px-4 py-2 rounded-full text-sm font-bold uppercase mb-4 self-start">
            ${promo.badge.text}
          </div>
          <h2 class="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 leading-tight drop-shadow-lg" itemprop="name">
            ${promo.title}
          </h2>
          <p class="text-lg lg:text-xl mb-6 leading-relaxed opacity-90" itemprop="description">
            ${promo.description}
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-6">
            <a href="${promo.cta.url}" class="inline-flex items-center gap-3 rounded-full font-bold text-lg transition-all duration-300 
                px-6 py-3 hover:-translate-y-0.5 focus:outline-none focus:ring-4 ${promo.cta.classes}">
              <i class="${promo.cta.icon} text-lg"></i>
              ${promo.cta.text}
            </a>
            <div class="flex gap-3">
               ${socialsHtml}
            </div>
          </div>

          <div class="flex flex-col sm:flex-row gap-4 text-sm lg:text-base">
            ${infoHtml}
          </div>
          
          ${promo.extraContent || ''}
        </div>

        <div class="md:col-span-5 relative overflow-hidden ${imageOrderClass}">
          ${badgeHtml}
          <img src="${promo.image.src}" alt="${promo.image.alt}" class="w-full h-64 md:h-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" width="600" height="400" itemprop="image">
          <div class="absolute inset-0 md:hidden bg-black/10"></div>
        </div>

      </div>
    </section>
    `;
}

function renderContent() {
    const container = document.getElementById('content-container');
    if (!container) return;

    let html = '';

    stores.forEach((store, index) => {
        html += renderStoreCard(store);
        if (promos[index]) {
            html += renderPromoCard(promos[index]);
        }
    });

    container.innerHTML = html;
}

// --- Menu & Filter Logic (Adapted) ---

// Funcionalidad del menú móvil
const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');
const menuOverlay = document.getElementById('menuOverlay');
const closeMenu = document.getElementById('closeMenu');

if (menuButton) menuButton.addEventListener('click', function () {
    mobileMenu.classList.add('open');
    menuOverlay.classList.remove('hidden');
});

if (closeMenu) closeMenu.addEventListener('click', function () {
    mobileMenu.classList.remove('open');
    menuOverlay.classList.add('hidden');
});

if (menuOverlay) menuOverlay.addEventListener('click', function () {
    mobileMenu.classList.remove('open');
    menuOverlay.classList.add('hidden');
});

// Ajustar altura de las secciones en dispositivos móviles
function adjustHeights() {
    if (window.innerWidth < 768) {
        const sections = document.querySelectorAll('.snap-section');
        const vh = window.innerHeight;
        sections.forEach(section => {
            section.style.minHeight = `${vh}px`;
        });
    }
}

// Obtener la categoría seleccionada
function getSelectedCategory() {
    const desktopSelected = document.querySelector('input[name="category"]:checked');
    const mobileSelected = document.querySelector('input[name="category-mobile"]:checked');
    return desktopSelected ? desktopSelected.value : (mobileSelected ? mobileSelected.value : 'todos');
}

// Funcionalidad de filtrado
function filterStores(category, searchText) {
    const storeCards = document.querySelectorAll('.store-card');
    let visibleCards = 0;

    storeCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        const cardDescription = card.getAttribute('data-description');
        const categoryMatch = category === 'todos' || cardCategory === category;
        const searchMatch = !searchText || cardDescription.toLowerCase().includes(searchText.toLowerCase());

        if (categoryMatch && searchMatch) {
            card.classList.remove('hidden');
            visibleCards++;
        } else {
            card.classList.add('hidden');
        }
    });

    // Mostrar u ocultar mensaje de no resultados
    const noResults = document.getElementById('noResults');
    if (noResults) {
        if (visibleCards === 0) {
            noResults.classList.remove('hidden');
            noResults.setAttribute('aria-hidden', 'false');
        } else {
            noResults.classList.add('hidden');
            noResults.setAttribute('aria-hidden', 'true');
        }
    }

    return visibleCards;
}

// Desplazar a la primera tarjeta visible después de filtrar
function scrollToFirstVisible() {
    setTimeout(() => {
        const firstVisible = document.querySelector('.store-card:not(.hidden)');
        const noResults = document.getElementById('noResults');

        if (firstVisible) {
            firstVisible.scrollIntoView({ behavior: 'smooth' });
        } else if (noResults && !noResults.classList.contains('hidden')) {
            noResults.scrollIntoView({ behavior: 'smooth' });
        }
    }, 100);
}

// Configurar eventos de filtrado para radios
document.querySelectorAll('input[type="radio"][name="category"], input[type="radio"][name="category-mobile"]').forEach(radio => {
    radio.addEventListener('change', function () {
        const category = this.value;
        const searchInput = document.getElementById('search') || document.getElementById('search-mobile');
        const searchText = searchInput ? searchInput.value : '';
        filterStores(category, searchText);
        scrollToFirstVisible();
        if (window.innerWidth < 768 && mobileMenu && mobileMenu.classList.contains('open')) {
            mobileMenu.classList.remove('open');
            menuOverlay.classList.add('hidden');
        }
    });
});

// Configurar búsqueda en tiempo real
function setupSearchInput(inputId, clearButtonId) {
    const input = document.getElementById(inputId);
    const clearButton = document.getElementById(clearButtonId);

    if (input && clearButton) {
        input.addEventListener('input', function () {
            const searchText = this.value;
            const category = getSelectedCategory();
            filterStores(category, searchText);
            if (searchText.length >= 2 || searchText.length === 0) {
                scrollToFirstVisible();
            }
        });

        clearButton.addEventListener('click', function () {
            input.value = '';
            const category = getSelectedCategory();
            filterStores(category, '');
            scrollToFirstVisible();
            input.focus();
        });
    }
}

// Global functions for no-results buttons (needs to be attached to window for inline onclick)
window.clearSearch = function () {
    const searchInputs = document.querySelectorAll('#search, #search-mobile');
    searchInputs.forEach(input => input.value = '');
    const category = getSelectedCategory();
    filterStores(category, '');
    scrollToFirstVisible();
};

window.showAllStores = function () {
    const radios = document.querySelectorAll('input[value="todos"]');
    radios.forEach(radio => {
        radio.checked = true;
        radio.dispatchEvent(new Event('change'));
    });
};


// Initialization
document.addEventListener('DOMContentLoaded', () => {
    renderContent();
    setupSearchInput('search', 'clearSearch');
    setupSearchInput('search-mobile', 'clearSearchMobile');

    // Initialize contact links
    document.querySelectorAll('.contact-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            if (mobileMenu) mobileMenu.classList.remove('open');
            if (menuOverlay) menuOverlay.classList.add('hidden');
            const contacto = document.getElementById('contacto');
            if (contacto) contacto.scrollIntoView({ behavior: 'smooth' });
        });
    });

    adjustHeights();
});

window.addEventListener('resize', adjustHeights);

// --- Scroll Behavior ---
const snapContainer = document.querySelector('.snap-container');
const mainHeader = document.getElementById('mainHeader');
let lastScrollTop = 0;

if (snapContainer && mainHeader) {
    snapContainer.addEventListener('scroll', () => {
        const scrollTop = snapContainer.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down & past top offset - Hide Header
            mainHeader.classList.add('-translate-y-full');
        } else {
            // Scrolling up - Show Header
            mainHeader.classList.remove('-translate-y-full');
        }

        lastScrollTop = scrollTop;
    });
}