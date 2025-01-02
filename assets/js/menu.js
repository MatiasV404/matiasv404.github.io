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
    
    // Cerrar el menú cuando se hace clic en un enlace
    document.querySelectorAll('.menu-content a').forEach(link => {
        link.addEventListener('click', () => {
            fullscreenMenu.classList.remove('active');
        });
    });
});