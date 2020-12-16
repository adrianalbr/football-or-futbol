$(document).ready(function () {
  $("#vs").on("click", function (event) {
    event.preventDefault();
    let playerOneIdFromScr = $("#firstPlayerId").val();
    let playerTwoIdFromScr = $("#secondPlayerId").val();
    let userIdFromScr = $("#userid").val();
    $.ajax({
      type: "POST",
      url: "/api/vs",
      data: {
        playerOneId: playerOneIdFromScr,
        playerTwoId: playerTwoIdFromScr,
        userId: userIdFromScr,
      },
    }).then((response) => {
      console.log(response);
    //   window.location.replace("/winner");
    });
  });
});
