

const form = document.getElementById("trainingForm");

form.addEventListener("submit", async function (e) {

    e.preventDefault();

    const registrationID =
        "DGF-" + Date.now();

    const data = {

        fullname:
            document.getElementById("fullname").value,

        school:
            document.getElementById("school").value,

        referral:
            document.getElementById("referral").value,

        location:
            document.getElementById("location").value,

        whatsapp:
            document.getElementById("whatsapp").value,

        registrationID:
            registrationID

    };

    try {

        await fetch(
            "https://script.google.com/macros/s/AKfycbxP5FFQZIhJMRx8-ynk2BLfJVG3khWmQPnS7Miq6ADaOfvNs9iI5ZWyDoj1k0b4aH33Zw/exec",
            {

                method: "POST",

                body: JSON.stringify(data)

            }
        );

        alert("Registration Successful!");

        form.reset();

    }

    catch (error) {

        alert("Submission Failed");

    }

});