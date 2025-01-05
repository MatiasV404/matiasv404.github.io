document.addEventListener("DOMContentLoaded", async function() {
    // Esperar a que el header se cargue
    await waitForElement('#menu-open');
    
    const menuOpen = document.getElementById('menu-open');
    const closeMenu = document.querySelector('.close-menu');
    const fullscreenMenu = document.querySelector('.fullscreen-menu');
    
    if (menuOpen && closeMenu && fullscreenMenu) {
        menuOpen.addEventListener('click', () => {
            console.log('Menu clicked'); // Para debugging
            fullscreenMenu.classList.add('active');
        });
        
        closeMenu.addEventListener('click', () => {
            console.log('Close clicked'); // Para debugging
            fullscreenMenu.classList.remove('active');
        });
        
        // Navegación suave
        document.querySelectorAll('.menu-content a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    fullscreenMenu.classList.remove('active');
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
});

// Función auxiliar para esperar a que un elemento exista
function waitForElement(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                observer.disconnect();
                resolve(document.querySelector(selector));
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

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

// Observar todas las secciones después de que el DOM esté cargado
document.addEventListener('DOMContentLoaded', async () => {
    await waitForElement('#about-container');
    const sections = document.querySelectorAll('#about-container, #projects-container, #skills-container, #certifications-container');
    sections.forEach(section => observer.observe(section));
});