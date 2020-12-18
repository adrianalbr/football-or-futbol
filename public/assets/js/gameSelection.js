$(document).ready(function () {
  $("#Football").on("click", function (event) {
    event.preventDefault();
    window.location.replace("/football");
  });
  $("#Futbol").on("click", function (event) {
    event.preventDefault();
    window.location.replace("/futbol");
  });

  $("#home").on("click", function () {
    window.location.replace("/index");
  });

  $("#futbolPlayers").change(function () {
    // alert($("#footBallPlayers").val());
    localStorage.setItem("futbolPlayerId", $("#futbolPlayers").val());
  });

  $("#footballPlayers").change(function () {
    // alert($("#footBallPlayers").val());
    localStorage.setItem("footballPlayerId", $("#footballPlayers").val());
  });

  $("#vs-btn").on("click", function () {
    window.location.replace("/headTohead");
  });
});
