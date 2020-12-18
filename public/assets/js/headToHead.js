$(document).ready(function () {
  $("#vs").on("click", function (event) {
    event.preventDefault();
    let playerOneIdFromScr = $("#htohFutbolPlayers").val();
    let playerTwoIdFromScr = $("#htohFootballPlayers").val();

    if (playerOneIdFromScr === "") {
      alert("Please select futbol player");
    }
    if (playerTwoIdFromScr === "") {
      alert("Please select football player");
    }

    $.ajax({
      type: "POST",
      url: "/api/headToHead",
      data: {
        playerOneId: playerOneIdFromScr,
        playerTwoId: playerTwoIdFromScr,
      },
    }).then((result) => {
      console.log(result);
      window.location.replace(`/api/heads/${result.id}`);
    });
  });
});
