document.addEventListener('DOMContentLoaded', function() {
    const menuOpen = document.getElementById('menu-open');
    const closeMenu = document.querySelector('.close-menu');
    const fullscreenMenu = document.querySelector('.fullscreen-menu');
    
    menuOpen.addEventListener('click', () => {
        fullscreenMenu.classList.add('active');
    });
    
    closeMenu.addEventListener('click', () => {
        fullscreenMenu.classList.remove('active');
    });
    
    // Navegación suave sin modificar URL
    document.querySelectorAll('.menu-content a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Previene la navegación por defecto
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                fullscreenMenu.classList.remove('active');
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // No modificamos la URL
                history.pushState('', document.title, window.location.pathname);
            }
        });
    });
});

// Observador de intersección para resaltar enlaces del menú
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.id;
            document.querySelectorAll('.menu-content a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}, observerOptions);

// Observar todas las secciones
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('#about-container, #projects-container, #skills-container, #certifications-container');
    sections.forEach(section => observer.observe(section));
});