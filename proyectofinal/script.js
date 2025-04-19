// Carrusel
  const track = document.querySelector('.carrusel-track');
  const botonDerecha = document.querySelector('.flecha-derecha');
  const imagenes = document.querySelectorAll('.carrusel-track img');
  
  let index = 0;

  botonDerecha.addEventListener('click', () => {
    index++;
    if (index >= imagenes.length) {
      index = 0; // volver al principio
    }
    const ancho = imagenes[0].clientWidth;
    track.style.transform = `translateX(-${index * ancho}px)`;
  });

  