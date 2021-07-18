const form = document.getElementById("contact");
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");
    const captchaIFrame = document.querySelector(".h-captcha iframe");
    const clientResponse = captchaIFrame.getAttribute("data-hcaptcha-response");

    const error = document.querySelector(".error");

    const body = `From: ${name.value} &lt;${email.value}&gt;<br />
                Subject: ${subject.value}<br /><br />
                Message:<br />${message.value}<br /><br />
                --<br />
                This e-mail was sent from a contact form on Byron Springer (https://byronmediateam.de).<br />
                This email and any files transmitted with it are confidential and intended solely for the use of the individual or entity to whom they are addressed.`;

    fetch("https://byron.cosup.eu/verify-captcha", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            clientResponse,
        }),
    }).then(async (res) => {
        const json = await res.json();

        if (json.success) {
            error.innerHTML = "";
            Email.send({
                SecureToken: "a17f7ee9-8939-41f6-8e12-6dd675a5324f",
                To: "contact@byronmediateam.de",
                From: "byronmediateam@gmail.com",
                Subject: `Byron Springer "${subject.value}"`,
                Body: body,
            }).then((msg) => {
                if (msg === "OK") alert("Email successfully sent!");
                else
                    alert("There was an error while sending the email: " + msg);
            });
        } else {
            error.innerHTML = "Please verify the captcha.";
        }
    });
});
