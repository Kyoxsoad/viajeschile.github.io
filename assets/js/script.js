$(document).ready(function () {
  $("#enviarCorreo").click(function () {
    $("#confirmacionModal").modal("show");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  //transicion imagenes carrusel
  let carousel = document.querySelector(".carousel");
  let intervalId = setInterval(function () {
    $(".carousel").carousel("next");
  }, 8000); // Cambia la imagen cada 8 segundos
});

$(document).ready(function () {
  // Agregar desplazamiento suave a todos los enlaces
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        // desplazamiento suave de la página

        {
          scrollTop: $(hash).offset().top,
        },
        1000, //tiempo que se demora en llegar al hash
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

$(window).scroll(function () {
  if ($(this).scrollTop() > $("#quienes").offset().top) {
    //cambia de color a negro cuando pasa la seccion quienes
    $(".navbar").addClass("bg-black");
  } else {
    $(".navbar").removeClass("bg-black ");
  }
});

var tooltips = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltips.map(function (tooltipEl) {
  return new bootstrap.Tooltip(tooltipEl);
}); // Para que funcionen los tooltip y muestra un mensaje al posicionarse sobre el boton
