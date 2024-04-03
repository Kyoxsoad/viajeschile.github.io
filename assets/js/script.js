document.addEventListener("DOMContentLoaded", function () {
  let carousel = document.querySelector('.carousel');
  let intervalId = setInterval(function() {
      $('.carousel').carousel('next');
  }, 6000); // Cambia la imagen cada 3 segundos

  
});