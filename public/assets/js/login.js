//js page for login.handlebars

$(document).ready(function () {
    const firstName = $("#firstName").val();
    const lastName = $("#lastName").val();
    const email = $("email").val();

    const touchdown = $("#touchDown");
    const goal = $("#goal");

    touchdown.on("submit", function () {
        postuser();
    });
    
    goal.on("submit", function () {
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