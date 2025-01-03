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

// Evento DOMContentLoaded para cargar los datos
document.addEventListener('DOMContentLoaded', async function() {
    try {
        // Primero cargamos el header
        const headerContainer = document.getElementById("header-container");
        const headerResponse = await fetch("components/header.html");
        const headerData = await headerResponse.text();
        headerContainer.innerHTML = headerData;

        // Inicializamos los eventos del header
        initializeHeaderEvents();

        // Luego cargamos los datos del perfil
        await loadData();
    } catch (error) {
        console.error('Error en la inicialización:', error);
    }
});

// Función para inicializar eventos del header
function initializeHeaderEvents() {
    const menuOpen = document.getElementById("menu-open");
    const closeMenu = document.querySelector(".close-menu");
    const fullscreenMenu = document.querySelector(".fullscreen-menu");

    if (menuOpen && closeMenu && fullscreenMenu) {
        menuOpen.addEventListener("click", () => {
            fullscreenMenu.classList.add("active");
        });

        closeMenu.addEventListener("click", () => {
            fullscreenMenu.classList.remove("active");
        });

        document.querySelectorAll(".menu-content a").forEach((link) => {
            link.addEventListener("click", () => {
                fullscreenMenu.classList.remove("active");
            });
        });
    }
}

// Función para cargar y renderizar los datos
async function loadData() {
    try {
        const response = await fetch('assets/data/profile.json');
        const data = await response.json();
        
        // Renderizamos cada sección
        renderAboutSection(data.about);
        renderProjectsSection(data.projects);
        renderSkillsSection(data.skills);
        renderCertificationsSection(data.certifications);
    } catch (error) {
        console.error('Error cargando los datos:', error);
    }
}

function renderAboutSection(aboutData) {
    const aboutContainer = document.createElement('div');
    aboutContainer.id = 'about-container';
    
    aboutContainer.innerHTML = `
        <h2 class="section-title">
            ${aboutData.title}
        </h2>
        
        <div class="about-content">
            <div class="profile-image-container">
                <img src="${aboutData.image.src}" alt="${aboutData.image.alt}" class="profile-image fade-in">
            </div>
            
            <div class="about-text">
                ${aboutData.paragraphs.map(paragraph => `<p class="fade-in">${paragraph}</p>`).join('')}
            </div>
        </div>
    `;
    
    document.getElementById('main-container').appendChild(aboutContainer);
}

function renderProjectsSection(projectsData) {
  const projectsContainer = document.createElement('div');
  projectsContainer.id = 'projects-container';
  projectsContainer.className = 'section-container';
  
  projectsContainer.innerHTML = `
      <h2 class="section-title">${projectsData.title}</h2>
      <div class="projects-grid">
          ${projectsData.items.map(project => `
              <div class="project-card fade-in">
                  <h3>${project.name}</h3>
                  <p>${project.description}</p>
                  <div class="technologies">
                      ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                  </div>
                  <p class="achievement"><strong>Key Achievement:</strong> ${project.achievements}</p>
              </div>
          `).join('')}
      </div>
  `;
  
  document.getElementById('main-container').appendChild(projectsContainer);
}

function renderSkillsSection(skillsData) {
  const skillsContainer = document.createElement('div');
  skillsContainer.id = 'skills-container';
  skillsContainer.className = 'section-container';
  
  skillsContainer.innerHTML = `
      <h2 class="section-title">${skillsData.title}</h2>
      <div class="skills-grid">
          ${skillsData.items.map(skill => `
              <div class="skill-card fade-in">
                  <h3>${skill.name}</h3>
                  <p>${skill.description}</p>
              </div>
          `).join('')}
      </div>
  `;
  
  document.getElementById('main-container').appendChild(skillsContainer);
}

function renderCertificationsSection(certData) {
  const certContainer = document.createElement('div');
  certContainer.id = 'certifications-container';
  certContainer.className = 'section-container';
  
  certContainer.innerHTML = `
      <h2 class="section-title">${certData.title}</h2>
      <div class="certifications-content fade-in">
          <div class="language-cert">
              <h3>${certData.language.title}</h3>
              <p>${certData.language.level}</p>
          </div>
          <div class="technical-cert">
              <h3>${certData.technical.title}</h3>
              <ul>
                  ${certData.technical.items.map(cert => `<li>${cert}</li>`).join('')}
              </ul>
          </div>
      </div>
  `;
  
  document.getElementById('main-container').appendChild(certContainer);
}