// Mostrar alerta en botón principal
function mostrarAlerta() {
  alert("¡Gracias por tu interés! Muy pronto te contactaremos.");
}

// // Carrusel manual en la cabecera
// let index = 0;
// const images = document.querySelectorAll('.carousel__img');

// setInterval(() => {
//   images[index].classList.remove('active');
//   index = (index + 1) % images.length;
//   images[index].classList.add('active');
// }, 3000);


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
