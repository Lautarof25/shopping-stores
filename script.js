// Funcionalidad del menú móvil
document.getElementById('menuButton').addEventListener('click', function() {
    document.getElementById('mobileMenu').classList.add('open');
    document.getElementById('menuOverlay').classList.remove('hidden');
});


document.getElementById('closeMenu').addEventListener('click', function() {
    document.getElementById('mobileMenu').classList.remove('open');
    document.getElementById('menuOverlay').classList.add('hidden');
});

document.getElementById('menuOverlay').addEventListener('click', function() {
    document.getElementById('mobileMenu').classList.remove('open');
    document.getElementById('menuOverlay').classList.add('hidden');
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
    
    // Si se selecciona "todos" o la categoría coincide
    const categoryMatch = category === 'todos' || cardCategory === category;
    
    // Si hay texto de búsqueda, verificar si coincide con la descripción
    const searchMatch = !searchText || cardDescription.toLowerCase().includes(searchText.toLowerCase());
    
    // Mostrar u ocultar según los filtros
    if (categoryMatch && searchMatch) {
        card.classList.remove('hidden-card');
        visibleCards++;
    } else {
        card.classList.add('hidden-card');
    }
    });
    
    // Mostrar u ocultar mensaje de no resultados
    const noResults = document.getElementById('noResults');
    if (visibleCards === 0) {
    noResults.style.display = 'flex';
    } else {
    noResults.style.display = 'none';
    }
    
    return visibleCards;
}

// Desplazar a la primera tarjeta visible después de filtrar
function scrollToFirstVisible() {
    // Pequeña pausa para permitir que el DOM se actualice
    setTimeout(() => {
    const firstVisible = document.querySelector('.store-card:not(.hidden-card)');
    const noResults = document.getElementById('noResults');
    
    if (firstVisible) {
        // Desplazar a la primera tarjeta visible
        firstVisible.scrollIntoView({ behavior: 'smooth' });
    } else if (noResults.style.display === 'flex') {
        // Desplazar al mensaje de no resultados
        noResults.scrollIntoView({ behavior: 'smooth' });
    }
    }, 100);
}

// Configurar eventos de filtrado para radios
document.querySelectorAll('input[type="radio"][name="category"], input[type="radio"][name="category-mobile"]').forEach(radio => {
    radio.addEventListener('change', function() {
    const category = this.value;
    const searchText = document.getElementById('search').value || document.getElementById('search-mobile').value;
    
    // Aplicar filtro
    filterStores(category, searchText);
    
    // Desplazar a los resultados
    scrollToFirstVisible();
    
    // Cerrar menú móvil si está abierto
    if (window.innerWidth < 768) {
        document.getElementById('mobileMenu').classList.remove('open');
        document.getElementById('menuOverlay').classList.add('hidden');
    }
    });
});

// Configurar búsqueda en tiempo real
function setupSearchInput(inputId, clearButtonId) {
    const input = document.getElementById(inputId);
    const clearButton = document.getElementById(clearButtonId);
    
    if (input && clearButton) {
    // Evento para el input
    input.addEventListener('input', function() {
        const searchText = this.value;
        const category = getSelectedCategory();
        
        // Aplicar filtro
        filterStores(category, searchText);
        
        // Desplazar a los resultados si hay más de 2 caracteres
        if (searchText.length >= 2 || searchText.length === 0) {
        scrollToFirstVisible();
        }
    });
    
    // Evento para el botón de limpiar
    clearButton.addEventListener('click', function() {
        input.value = '';
        const category = getSelectedCategory();
        
        // Aplicar filtro
        filterStores(category, '');
        
        // Desplazar a los resultados
        scrollToFirstVisible();
        
        // Enfocar el input después de limpiar
        input.focus();
    });
    }
}

// Configurar ambos campos de búsqueda
setupSearchInput('search', 'clearSearch');
setupSearchInput('search-mobile', 'clearSearchMobile');

// Configurar enlace de contacto
document.querySelectorAll('.contact-link').forEach(link => {
    link.addEventListener('click', function(e) {
    e.preventDefault();
    // Cerrar menú móvil si está abierto
    document.getElementById('mobileMenu').classList.remove('open');
    document.getElementById('menuOverlay').classList.add('hidden');
    
    // Desplazarse a la sección de contacto
    document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' });
    });
});


// Ejecutar al cargar y al redimensionar
window.addEventListener('load', function() {
    adjustHeights();
    
});

window.addEventListener('resize', adjustHeights);