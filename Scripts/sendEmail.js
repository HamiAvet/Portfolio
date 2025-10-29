function sendEmail_fr(event) {
    event.preventDefault(); 

    let params = {
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    emailjs
        .send("service_2znuetk", "template_dp7iyw1", params)
        .then(() => {
            alert("Votre email a été envoyé, merci beaucoup !");
            document.getElementById("contact-form").reset();
        })
        .catch(() => {
            alert("Une erreur s'est produite, veuillez réessayer ultérieurement.");
        });
}

function sendEmail_en(event) {
    event.preventDefault(); 

    let params = {
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }
    emailjs.send("service_2znuetk","template_dp7iyw1",params)
    .then(() => {
        alert("Your email has been sent, thank you very much !");
        document.getElementById("contact-form").reset();
    })
    .catch(() => alert("An error has occurred, please try again later."))
}