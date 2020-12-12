$(document).ready(function () {
    $("#edit-player").on("submit", function (e) {
      e.preventDefault();
      const id = $(this).data("id");
      const firstName = $("#firstName").val();
      const lastName = $("#lastName").val();
      const acceleration = $("#acceleration").val();
      const speed = $("#speed").val();
      const strength = $("#strength").val();
      const agility = $("#agility").val();
      const kickPower = $("#kickPower").val();
      const tackle = $("#tackle").val();
      const jumping = $("#jumping").val();
      const stamina = $("#stamina").val();
      
  
      $.ajax({
        method: "PUT",
        url: `/api/players/${id}`,
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
        },
      }).then((response) => {
        window.location.replace("/players");
      });
    });
  });