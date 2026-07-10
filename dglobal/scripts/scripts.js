const WEB_APP_URL =
"https://script.google.com/macros/s/AKfycbwRUntiBDBMCgFBMa6VXYdErK5LXv7fNs4ePKRPPTBljsZxyMh1r2n6yKyCWNkJ5U0z4A/exec";

const form = document.getElementById("trainingForm");

form.addEventListener("submit", async function (e) {

    e.preventDefault();

    const submitButton = form.querySelector("button");

    submitButton.disabled = true;
    submitButton.textContent = "Submitting...";

    const formData = new FormData();

    formData.append("fullname", document.getElementById("fullname").value);
    formData.append("school", document.getElementById("school").value);
    formData.append("referral", document.getElementById("referral").value);
    formData.append("location", document.getElementById("location").value);
    formData.append("whatsapp", document.getElementById("whatsapp").value);
    formData.append("registrationID", "DGF-" + Date.now());

    try {

        const response = await fetch(WEB_APP_URL, {
            method: "POST",
            body: formData
        });

        const result = await response.json();

        if (result.status === "success") {

            alert("Registration Successful!");

            form.reset();

        } else {

            alert(result.message);

        }

    } catch (error) {

        console.error(error);

        alert("Submission Failed");

    }

    submitButton.disabled = false;
    submitButton.textContent = "Submit Registration";

});