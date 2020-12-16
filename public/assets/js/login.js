$(document).ready(function () {
    $("#new-user").on("submit", function (e) {
      e.preventDefault();
      const email = $("#email").val();
      const firstName = $("#firstName").val();
      const lastName = $("#lastName").val();
      console.log(email);
      console.log(firstName);
      console.log(lastName);
      $.ajax({
        method: "POST",
        url: "/api/users",
        data: {
          email,
          firstName,
          lastName,
        },
      }).then((response) => {
        window.location.replace("/index");
      });
    });
  });