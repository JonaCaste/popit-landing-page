// Mostrar alerta en botón principal
function mostrarAlerta() {
  alert("¡Gracias por tu interés! Muy pronto te contactaremos.");
}

// Boton hamburguesa - header
const hamburgerBtn = document.getElementById("hamburger-btn");
const navMenu = document.getElementById("nav-menu");

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("active");
  navMenu.classList.toggle("active");
});


// Carrusel manual en la productos
let indexCarrousel = 0;
const productosCarrousel = document.querySelectorAll('.producto__carousel');

function iniciarCarrusel() {
  // Si estamos en móvil, activar carrusel
  if (window.innerWidth < 768) {
    setInterval(() => {
      productosCarrousel[indexCarrousel].classList.remove('active');      //Desactivamos ultimo producto activo
      indexCarrousel = (indexCarrousel + 1) % productosCarrousel.length;  //Calculamos siguiente producto
      productosCarrousel[indexCarrousel].classList.add('active');         //Activamos el siguiente producto
    }, 3000);
  } else {
    // En desktop, mostrar todos los productos y remover 'active'
    productosCarrousel.forEach(p => p.classList.add('active'));
  }
}

// Llamada inicial
iniciarCarrusel();

// Si el usuario redimensiona la ventana
window.addEventListener('resize', () => {
  location.reload(); // recargamos la pagina // Tambien podemos llamar nuevamente la funcion de iniciar carrousel
});
