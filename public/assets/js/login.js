$(document).ready(function () {
  $("#login").on("click", function (e) {
    e.preventDefault();
    const email = $("#email").val();

    $.ajax({
      method: "GET",
      url: "/api/users/" + email,
    }).then((response) => {
      if (!response) {
        alert("user not found");
        return;
      }
      window.location.replace("/index");
    });
  });
});
