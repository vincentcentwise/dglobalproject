const modal = document.getElementById("contactModal");

const openBtn = document.getElementById("openModal");

const closeBtn = document.querySelector(".close");

const showForm = document.getElementById("showForm");

const form = document.getElementById("contactForm");

openBtn.onclick = () => {

    modal.style.display = "block";

};

closeBtn.onclick = () => {

    modal.style.display = "none";

};

window.onclick = (e) => {

    if (e.target == modal) {

        modal.style.display = "none";

    }

};

showForm.onclick = () => {

    form.style.display = "block";

};


const scriptURL = "https://script.google.com/macros/s/AKfycbxQrJ-3-C-mwp83xmRl7nNUNANshEuGDkWsIdHLuzY8ItMcqtlkaVshMfuXqciqho5d/exec";

contactForm.addEventListener("submit", function(e) { 

    e.preventDefault();

    const formData = new FormData(contactForm);

    fetch(scriptURL, {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert("Thank you! Your message has been sent.");
        contactForm.reset();
        modal.style.display = "none";
    })
    .catch(error => {
        console.error(error);
        alert("Failed to send.");
    });

});