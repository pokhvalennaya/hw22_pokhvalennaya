$(document).ready(function () {
  const figure = $("#figure");

  $("#selectFigure").change(function (event) {
    event.preventDefault();

    const className = $("#selectFigure option:selected").attr("class");

    figure.removeClass().addClass(className);
    figure.css("display", "none");
    figure.fadeIn("slow");
  });

  $("#color").on("input", function (event) {
    event.preventDefault();
    figure.css("background-color", $(this).val());
  });
});
