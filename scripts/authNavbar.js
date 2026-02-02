localStorage.getItem("token")
localStorage.getItem("user") // con rol

document.addEventListener("DOMContentLoaded", () => {
  renderNavbar();
  renderFooter();
  markActiveNav();
});

document.addEventListener("click", e => {
  if (e.target.id === "btnLogout") {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    location.href = "./login.html";
  }
});

// document.addEventListener("DOMContentLoaded", () => {
//   const navLogin = document.getElementById("navLogin");
//   const navLogout = document.getElementById("navLogout");
//   const btnLogout = document.getElementById("btnLogout");
//   const nombreUsuario = document.getElementById("nombreUsuario");

//   if (!navLogin || !navLogout) return;

//   // NUEVA FUENTE DE VERDAD
//   const token = localStorage.getItem("token");
//   const userJSON = localStorage.getItem("user");
//   const user = userJSON ? JSON.parse(userJSON) : null;

//   if (token && user) {
//     // USUARIO LOGUEADO
//     navLogin.style.display = "none";
//     navLogout.style.display = "block";

//     if (nombreUsuario) {
//       nombreUsuario.textContent = user.nombre;
//     }
//   } else {
//     // USUARIO NO LOGUEADO
//     navLogin.style.display = "block";
//     navLogout.style.display = "none";

//     if (nombreUsuario) {
//       nombreUsuario.textContent = "";
//     }
//   }

//   //  LOGOUT REAL
//   if (btnLogout) {
//     btnLogout.addEventListener("click", (e) => {
//       e.preventDefault();

//       // Limpiar sesion real
//       localStorage.removeItem("token");
//       localStorage.removeItem("user");

//       Swal.fire({
//         icon: "success",
//         title: "Sesión cerrada"
//       }).then(() => {
//         window.location.href = "./login.html";
//       });
//     });
//   }

//   // MARCAR LINK ACTIVO
//   const links = document.querySelectorAll(".custom-nav-link");
//   const currentPage = window.location.pathname.split("/").pop();

//   links.forEach(link => {
//     const linkPage = link.getAttribute("href")?.split("/").pop();
//     if (linkPage === currentPage) {
//       link.classList.add("active");
//     }
//   });
// });


function renderFooter() {
  const footer = `
    <footer class="custom-footer">
      <div class="container footer-top">
        <div class="row g-4">
          <div class="col-12 col-md-6 col-lg-4 footer-brand">
            <div class="d-flex align-items-center mb-2">
              <img src="../assets/ImgsLogos/logoHospedate.png" alt="Logo HospeDate" width="56" height="56" class="me-2"/>
              <h5 class="mb-0">HospeDate</h5>
            </div>
            <p>Reserva fácil, gestiona mejor. Solución moderna para administración de reservas.</p>
          </div>

          <div class="col-6 col-md-3 col-lg-2 footer-links">
            <h6 class="fw-bold mb-2">Enlaces</h6>
            <ul>
              <li><a href="../index.html">Inicio</a></li>
              <li><a href="../pages/reservas.html">Reservas</a></li>
              <li><a href="../pages/quienes-somos.html">¿Quiénes somos?</a></li>
              <li><a href="../pages/contactanos.html">Contacto</a></li>
            </ul>
          </div>

          <div class="col-6 col-md-3 col-lg-3 footer-links">
            <h6 class="fw-bold mb-2">Legal</h6>
            <ul>
              <li><a href="#">Términos y Condiciones</a></li>
              <li><a href="#">Política de Privacidad</a></li>
            </ul>
          </div>

          <div class="col-12 col-lg-3 footer-contact">
            <h6 class="fw-bold mb-2">Contacto</h6>
            <ul>
              <li>yudithkleon@gmail.com</li>
              <li>+57 300 77 06 748</li>
              <li>Bogotá, Colombia</li>
            </ul>
            <div class="footer-social mt-2">
              <a href="https://www.linkedin.com/in/yudithkleon/"><i class="bi bi-linkedin"></i></a>
              <a href="https://github.com/yudithkleon"><i class="bi bi-github"></i></a>
              <a href="#"><i class="bi bi-envelope"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="container d-flex flex-column flex-md-row align-items-center justify-content-between">
          <p class="mb-0">© 2025 — HospeDate</p>
          <small>Todos los derechos reservados</small>
        </div>
      </div>
    </footer>
  `;

  document.getElementById("app-footer").innerHTML = footer;
}

function renderNavbar() {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  let menu = "";

  if (!token || !user) {
    menu = guestNavbar();
  } else if (user.rol === "ADMIN") {
    menu = adminNavbar(user);
  } else {
    menu = userNavbar(user);
  }

  document.getElementById("app-navbar").innerHTML = menu;
}

function markActiveNav() {
  try {
    const currentPage = window.location.pathname.split("/").pop();
    const links = document.querySelectorAll(".custom-nav-link");
    links.forEach(link => {
      const href = link.getAttribute("href");
      if (!href) return;
      const linkPage = href.split("/").pop();
      if (linkPage === currentPage) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
      } else {
        link.classList.remove("active");
        link.removeAttribute("aria-current");
      }
    });
  } catch (e) {
    // evitar que un error rompa el flujo de renderizado
    console.error("Error marcando link activo", e);
  }
}


function guestNavbar() {
  return `
  <nav class="navbar navbar-expand-lg custom-navbar">
    <div class="container">
      <a class="navbar-brand" href="../index.html">
        <img src="../assets/ImgsLogos/logoHospedate.png" width="80"/>
      </a>

      <button class="navbar-toggler bg-light" data-bs-toggle="collapse" data-bs-target="#menu">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="menu">
        <ul class="navbar-nav ms-auto">
          <li><a class="nav-link custom-nav-link" href="../index.html">Inicio</a></li>
          <li><a class="nav-link custom-nav-link" href="../pages/reservas.html">Reservas</a></li>
          <li><a class="nav-link custom-nav-link" href="../pages/quienes-somos.html">Nosotros</a></li>
          <li><a class="nav-link custom-nav-link" href="../pages/contactanos.html">Contacto</a></li>
          <li><a class="nav-link custom-nav-link" href="../pages/login.html">Login</a></li>
        </ul>
      </div>
    </div>
  </nav>`;
}


function userNavbar(user) {
  return `
  <nav class="navbar navbar-expand-lg custom-navbar">
    <div class="container">
      <a class="navbar-brand" href="./indexUsuario.html">
        <img src="../assets/ImgsLogos/logoHospedate.png" width="80"/>
      </a>

      <span class="bienvenido">${user.nombre}</span>

      <button class="navbar-toggler bg-light" data-bs-toggle="collapse" data-bs-target="#menu">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="menu">
        <ul class="navbar-nav ms-auto">
          <li><a class="nav-link custom-nav-link" href="../pages/indexUsuario.html">Inicio</a></li>
          <li><a class="nav-link custom-nav-link" href="../pages/reservarParaUsuario.html">Reservas</a></li>
          <li><a class="nav-link custom-nav-link" href="../pages/historialReservas.html">Historial</a></li>
          <li><a class="nav-link custom-nav-link" href="../pages/perfil.html">Perfil</a></li>
          <li><a class="nav-link custom-nav-link" id="btnLogout" href="#">Salir</a></li>
        </ul>
      </div>
    </div>
  </nav>`;
}

function adminNavbar(user) {
  return `
  <nav class="navbar navbar-expand-lg custom-navbar">
    <div class="container">
      <a class="navbar-brand" href="./adminvisual.html">
        <img src="../assets/ImgsLogos/logoHospedate.png" width="80"/>
      </a>

      <span class="bienvenido">${user.nombre}</span>

      <button class="navbar-toggler bg-light" data-bs-toggle="collapse" data-bs-target="#menu">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="menu">
        <ul class="navbar-nav ms-auto">
          <li><a class="nav-link custom-nav-link" href="../pages/adminvisual.html">Inicio</a></li>
          <li><a class="nav-link custom-nav-link" href="../pages/rommsAdminAll.html">Habitaciones</a></li>
          <li><a class="nav-link custom-nav-link" href="../pages/serviciosAdminAll.html">Servicios</a></li>
          <li><a class="nav-link custom-nav-link" href="../pages/reservaAdministrador.html">Reservas</a></li>
          <li><a class="nav-link custom-nav-link" id="btnLogout" href="#">Salir</a></li>
        </ul>
      </div>
    </div>
  </nav>`;
}
