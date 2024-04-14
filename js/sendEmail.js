function sendEmail() {

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "mohamedaminehm07@gmail.com",
        Password: "03A06920DF54BB2FF7F718EC7BB5AC40B0A0",
        To: "aminos5110@gmail.com",
        From: "mohamedaminehm07@gmail.com",
        Subject: "New contact form Enquiry from StarPrint Website",
        Body: "Name: " + document.getElementById("name").value
            + "<br> Last Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Subject: " + document.getElementById("subject").value
            + "<br> Message: " + document.getElementById("message").value
    }).then(
        message => {
            if (message == 'OK') {
                Swal.fire(
                    'Merci!',
                    'les données sont envoyées avec succés!',
                    'success'
                )
            }

        }
    );
}