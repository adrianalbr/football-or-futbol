$(document).ready(function () {
  $("#create").on("click", function (e) {
    e.preventDefault();
    const firstName = $("#firstName").val();
    const lastName = $("#lastName").val();
    const game = $("#game").val();
    const acceleration = $("#acceleration").val();
    const speed = $("#speed").val();
    const strength = $("#strength").val();
    const agility = $("#agility").val();
    const kickPower = $("#kickPower").val();
    const tackle = $("#tackle").val();
    const jumping = $("#jumping").val();
    const stamina = $("#stamina").val();
    
   if(acceleration >= 100 || speed >= 100 || strength >= 100 || agility >= 100 || kickPower >= 100 || tackle >= 100 || jumping >= 100 || stamina >= 100){
     alert("Values can't exceed 99.")
   }
  else if (acceleration < 1 || speed < 1 || strength < 1 || agility < 1 || kickPower < 1 || tackle < 1 || jumping < 1 || stamina < 1){
    alert("Values can't be below 1.");
   }
   else{
    $.ajax({
      method: "POST",
      url: "/api/players",
      data: {
          firstName,
          lastName,
          acceleration,
          speed,
          strength,
          agility,
          kickPower,
          tackle,
          jumping,
          stamina,
          game
      },
       }).then((response) => {
          window.location.reload();
      
      });
    }
  });
});