// Array de las imágenes en el carrusel
const imagenes = document.querySelectorAll('.imagen-thumbnail');
const modal = document.getElementById('modal');
const modalImagen = document.getElementById('modal-imagen');
let imagenesArray = Array.from(imagenes); // Convierte el NodeList a un array
let indiceImagenActual = 0; // Índice de la imagen actual en el modal

// Función para abrir el modal y mostrar la imagen ampliada
imagenes.forEach((imagen, index) => {
  imagen.addEventListener('click', () => {
    modal.style.display = 'flex'; // Muestra el modal
    modalImagen.src = imagen.src; // Asigna la imagen al modal
    indiceImagenActual = index; // Guarda el índice de la imagen actual
  });
});

// Función para cerrar el modal
function cerrarModal() {
  modal.style.display = 'none'; // Oculta el modal
}

// Función para cambiar de imagen dentro del modal
function cambiarImagen(direccion) {
  // Calcula el índice de la siguiente imagen
  indiceImagenActual += direccion;

  // Si estamos en la última imagen, volver a la primera
  if (indiceImagenActual >= imagenesArray.length) {
    indiceImagenActual = 0;
  }
  // Si estamos en la primera imagen, ir a la última
  if (indiceImagenActual < 0) {
    indiceImagenActual = imagenesArray.length - 1;
  }

  // Cambiar la fuente de la imagen en el modal
  modalImagen.src = imagenesArray[indiceImagenActual].src;
}

// Cerrar el modal cuando se hace clic en el fondo
modal.addEventListener('click', function(event) {
  if (event.target === modal) {
    cerrarModal();
  }
});

// Cerrar el modal cuando se hace clic en el botón de cerrar
const cerrarModalBtn = document.getElementById('cerrar-modal');
cerrarModalBtn.addEventListener('click', cerrarModal);

// Función para alternar el menú
function toggleMenu() {
  var menuLinks = document.getElementById('menuLinks');
  menuLinks.classList.toggle('active');
}
