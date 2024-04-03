document.addEventListener('DOMContentLoaded', function() {
    var myCarousel = document.getElementById('carouselExampleControls');
    var carousel = new bootstrap.Carousel(myCarousel, {
      interval: 5000, // Cambia cada 2 segundos (ajusta según sea necesario)
      pause: false // Permite que el carrusel vuelva al principio después de la última diapositiva
    });
  });