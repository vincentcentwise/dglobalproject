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


const scriptURL = "https://script.google.com/macros/s/AKfycbx0MnNlddBl5xKRmfWsqyiLj8ERachQBaVEjTZom7Yw_HmxF6vc1PI7_6CTSguatTtp/exec";

contactForm.addEventListener("submit", function(e) { to

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