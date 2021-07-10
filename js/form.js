const form = document.getElementById("contact");
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    const body = `From: ${name.value} &lt;${email.value}&gt;<br />
                Subject: ${subject.value}<br /><br />
                Message:<br />${message.value}<br /><br />
                --<br />
                This e-mail was sent from a contact form on Byron Springer (https://byronmediateam.de).<br />
                This email and any files transmitted with it are confidential and intended solely for the use of the individual or entity to whom they are addressed.`;

    console.log(body);

    Email.send({
        SecureToken: "a17f7ee9-8939-41f6-8e12-6dd675a5324f",
        To: "kikopt1234@gmail.com",
        From: "byronmediateam@gmail.com",
        Subject: `Byron Springer "${subject.value}"`,
        Body: body,
    }).then((msg) => {
        if (msg === "OK") alert("Email successfully sent!");
        else alert("There was an error while sending the email: " + msg);
    });
});
