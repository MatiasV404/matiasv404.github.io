// CARGA DEL HEADER
document.addEventListener("DOMContentLoaded", function () {
  const headerContainer = document.getElementById("header-container");
  fetch("components/header.html")
    .then((response) => response.text())
    .then((data) => {
      headerContainer.innerHTML = data;

      document
        .querySelector(".scroll-down-button")
        .addEventListener("click", function () {
          const targetSection = document.querySelector("#main-container");
          targetSection.scrollIntoView({
            behavior: "smooth",
          });
        });
    })
    .catch((error) => console.error("Error al cargar el header:", error));
});

// CARGA DEL FOOTER
document.addEventListener("DOMContentLoaded", function () {
  const footerContainer = document.getElementById("footer-container");
  fetch("components/footer.html")
    .then((response) => response.text())
    .then((data) => {
      footerContainer.innerHTML = data;
    })
    .catch((error) => console.error("Error al cargar el footer:", error));
});

// POPPER JS
src =
  "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js";
integrity =
  "sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r";
crossorigin = "anonymous";
// Bootstrap JS

src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js";
integrity =
  "sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy";
crossorigin = "anonymous";

// MENU DE PRUEBA
document.addEventListener("DOMContentLoaded", function () {
  const headerContainer = document.getElementById("header-container");
  fetch("components/header.html")
    .then((response) => response.text())
    .then((data) => {
      headerContainer.innerHTML = data;

      // Inicializar el menú después de cargar el header
      const menuOpen = document.getElementById("menu-open");
      const closeMenu = document.querySelector(".close-menu");
      const fullscreenMenu = document.querySelector(".fullscreen-menu");

      menuOpen.addEventListener("click", () => {
        fullscreenMenu.classList.add("active");
      });

      closeMenu.addEventListener("click", () => {
        fullscreenMenu.classList.remove("active");
      });

      // Cerrar el menú cuando se hace clic en un enlace
      document.querySelectorAll(".menu-content a").forEach((link) => {
        link.addEventListener("click", () => {
          fullscreenMenu.classList.remove("active");
        });
      });

      // Scroll down button (código existente)
      document
        .querySelector(".scroll-down-button")
        .addEventListener("click", function () {
          const targetSection = document.querySelector("#main-container");
          targetSection.scrollIntoView({
            behavior: "smooth",
          });
        });
    })
    .catch((error) => console.error("Error al cargar el header:", error));
});
