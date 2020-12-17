$(document).ready(function () {
  $("#vs").on("click", function (event) {
    event.preventDefault();
    let playerOneIdFromScr = $("#firstPlayerId").val();
    let playerTwoIdFromScr = $("#secondPlayerId").val();
    let userIdFromScr = $("#userid").val();
    $.ajax({
      type: "POST",
      url: "/api/headToHead",
      data: {
        playerOneId: playerOneIdFromScr,
        playerTwoId: playerTwoIdFromScr,
        userId: userIdFromScr,
      },
    }).then((result) => {
      console.log(result);
      window.location.replace(`/api/heads/${result.id}`);
    });
  });
});
