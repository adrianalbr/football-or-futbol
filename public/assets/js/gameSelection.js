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
  // get the values from backend when player is selected from dropdown
  $("#players").change(function () {
    let selectedPlayerId = $("#players").val();
    if (selectedPlayerId === "") {
      $("#acceleration1").val("");
      $("#speed1").val("");
      $("#strength1").val("");
      $("#agility1").val("");
      $("#kickPower1").val("");
      $("#tackle1").val("");
      $("#jumping1").val("");
      $("#stamina1").val("");
    }
    $.ajax({
      method: "GET",
      url: "/api/players/" + selectedPlayerId,
    }).then((response) => {
      console.log(response);
      if (!response) {
        alert("Player not found");
        return;
      }
      $("#acceleration1").val(response.acceleration);
      $("#speed1").val(response.speed);
      $("#strength1").val(response.strength);
      $("#agility1").val(response.agility);
      $("#kickPower1").val(response.kickPower);
      $("#tackle1").val(response.tackle);
      $("#jumping1").val(response.jumping);
      $("#stamina1").val(response.stamina);
    });
  });

  // when the update button is clicked
  $("#update").on("click", function () {
    let selectedPlayerId = $("#players").val();
    if (selectedPlayerId === "") {
      alert("Please select a player");
      return;
    }

    $.ajax({
      method: "PUT",
      url: "/api/players",
      data: {
        id: selectedPlayerId,
        acceleration: $("#acceleration1").val(),
        speed: $("#speed1").val(),
        strength: $("#strength1").val(),
        agility: $("#agility1").val(),
        kickPower: $("#kickPower1").val(),
        tackle: $("#tackle1").val(),
        jumping: $("#jumping1").val(),
        stamina: $("#stamina1").val(),
      },
      success: function (response) {
        window.location.reload();
      },
      error: function (err) {
        alert(err.responseJSON.errors[0].message);
      },
    });
  });

  $("#delete").on("click", function () {
    let selectedPlayerId = $("#players").val();
    if (selectedPlayerId === "") {
      alert("Please select a player");
      return;
    }

    $.ajax({
      method: "DELETE",
      url: "/api/players/" + selectedPlayerId,
      success: function (response) {
        window.location.reload();
      },
      error: function (err) {
        alert(err.responseJSON.errors[0].message);
      },
    });
  });

  $("#vs-btn").on("click", function () {
    window.location.replace("/headTohead");
  });
});
