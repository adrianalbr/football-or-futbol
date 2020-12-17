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
