$(document).ready(function () {

console.log("footballPlayerId" + localStorage.getItem("footballPlayerId"));
console.log("futbolPlayerId" + localStorage.getItem("futbolPlayerId"));


  $("#vs").on("click", function (event) {
    event.preventDefault();
    let playerOneIdFromScr = localStorage.getItem("footballPlayerId");
    let playerTwoIdFromScr = localStorage.getItem("futbolPlayerId");

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
