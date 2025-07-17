// Mostrar alerta en botón principal
function mostrarAlerta() {
  alert("¡Gracias por tu interés! Muy pronto te contactaremos.");
}

// Carrusel manual en la cabecera
let index = 0;
const images = document.querySelectorAll('.carousel__img');

setInterval(() => {
  images[index].classList.remove('active');
  index = (index + 1) % images.length;
  images[index].classList.add('active');
}, 3000);
