

$(document).ready(function () {
  $('#enviarCorreo').click(function () {
     alert('Se envió correctamente el correo.');
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let carousel = document.querySelector('.carousel');
  let intervalId = setInterval(function() {
      $('.carousel').carousel('next');
  }, 8000); // Cambia la imagen cada 8 segundos

  
});

var tooltips = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltips.map(function (tooltipEl) {
    return new bootstrap.Tooltip(tooltipEl);
}); // Para que funcionen los tooltip