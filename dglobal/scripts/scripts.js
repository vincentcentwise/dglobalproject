const form = document.getElementById("trainingForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const formData = new FormData();

    formData.append("fullname", document.getElementById("fullname").value);
    formData.append("school", document.getElementById("school").value);
    formData.append("referral", document.getElementById("referral").value);
    formData.append("location", document.getElementById("location").value);
    formData.append("whatsapp", document.getElementById("whatsapp").value);
    formData.append("registrationID", "DGF-" + Date.now());

    try {

        const response = await fetch("AKfycbzmsl6QfOlElSMYSr0WzCPCbeNE_OuMFHl5LK4prxFTWQ-ITsttyg9p6WgPv9QHJ4eL3wAKfycbwxAFs9mxHKJ8F7XtYTBs8D8Xxl9EbqH8bDByOviqc6Je3STeNlQuCRSROXJX29wdxdDw", {
            method: "POST",
            body: formData
        });

        const result = await response.text();

        alert("Registration Successful!");

        form.reset();

    } catch (error) {

        console.error(error);

        alert("Submission Failed");

    }

});