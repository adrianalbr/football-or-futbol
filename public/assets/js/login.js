//js page for login.handlebars

$(document).ready(function () {
    const firstName = $("#firstName").val();
    const lastName = $("#lastName").val();
    const email = $("email").val();

    const login = $("#login");
    const signup = $("#signup");

    login.on("submit", function () {
        postuser();
    });
    
    signup.on("submit", function () {
        postuser();
    });

    function postuser(){
        $.ajax({
            method: "POST",
            URL:"/api/user",
            data: {
                firstName,
                lastName,
                email,
            }
        }).then((response) => {
            window.location.replace("/index");

        });
    }  
 
    
})