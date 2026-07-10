const form = document.getElementById("trainingForm");

const WEB_APP_URL =
"https://script.google.com/macros/s/AKfycbwdOMplGfJSiaqjtNMLaALNIaC1wbcXaKlkPGX55D9gkgFzVBLF35jQJ6vI8coVEoOzhA/exec";

form.addEventListener("submit", async function(e){

    e.preventDefault();

    const formData = new FormData();

    formData.append(
        "fullname",
        document.getElementById("fullname").value
    );

    formData.append(
        "school",
        document.getElementById("school").value
    );

    formData.append(
        "referral",
        document.getElementById("referral").value
    );

    formData.append(
        "location",
        document.getElementById("location").value
    );

    formData.append(
        "whatsapp",
        document.getElementById("whatsapp").value
    );

    formData.append(
        "registrationID",
        "DGF-"+Date.now()
    );

    try{

        const response = await fetch(WEB_APP_URL,{
            method:"POST",
            body:formData
        });

        if(response.ok){

            alert("Registration Successful!");

            form.reset();

        }else{

            alert("Server returned an error.");

        }

    }catch(error){

        console.error(error);

        alert("Submission Failed");

    }

});