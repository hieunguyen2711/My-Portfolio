
document.addEventListener("DOMContentLoaded", function () {
    // import emailjs from '@emailjs/browser';

    const button = document.getElementById("submitBtn");
    button.addEventListener("click", function (event) {
        event.preventDefault();
        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;
        var fullName = firstName + " " + lastName;
        var email = document.getElementById("emailInput").value;
        var message = document.getElementById("messageBox").value;
        console.log(firstName, lastName, email, message);
        var params = {
            from_name: fullName,
            email_id: email,
            message: message
        };
        emailjs.send("service_75mae9h", "template_8vekb7o", params).then(function (res) {
            alert("Send Successfully, Status: " + res.status);
            location.reload(); //Make the page reload after submitted.
        });
    })




})