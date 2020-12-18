$(document).ready(function () {
    $("#signUp").on("click", function (e) {
      e.preventDefault();
      const email = $("#email").val();
      const firstName = $("#firstName").val();
      const lastName = $("#lastName").val();

      $.ajax({
        method: "POST",
        url: "/api/users",
        data: {
          email,
          firstName,
          lastName,
        },
        success : function(response){
          window.location.replace("/index");
        },
        error : function(err){
          alert(err.responseJSON.errors[0].message);
        }
      })
    });
  });