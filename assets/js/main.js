document.addEventListener("DOMContentLoaded", async function () {
    try {
        // Cargar header y footer
        await loadHeader();
        await loadFooter();
        
        // Inicializar AOS
        AOS.init();
        // Refrescar AOS después de que todo esté cargado
        AOS.refresh();
    } catch (error) {
        console.error("Error en la inicialización:", error);
    }
});

// Función para cargar el header
async function loadHeader() {
    const headerContainer = document.getElementById("header-container");
    try {
        const response = await fetch("components/header.html");
        const data = await response.text();
        headerContainer.innerHTML = data;

        // Inicializar eventos del header
        document.querySelector(".scroll-down-button").addEventListener("click", function () {
            const targetSection = document.querySelector("#main-container");
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    } catch (error) {
        console.error("Error al cargar el header:", error);
    }
}

// Función para cargar el footer
async function loadFooter() {
    const footerContainer = document.getElementById("footer-container");
    try {
        const response = await fetch("components/footer.html");
        const data = await response.text();
        footerContainer.innerHTML = data;
    } catch (error) {
        console.error("Error al cargar el footer:", error);
    }
}