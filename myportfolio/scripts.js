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


const scriptURL =
"https://script.google.com/macros/s/AKfycby997VDwABqOrCjHPV8XxbqrJFWOnCuhEe-Sa1nCfXDQidpt-Cc_fL74LjEOttcH8JX/exec";

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    const data = {

        name: document.getElementById("name").value,

        phone: document.getElementById("phone").value,

        email: document.getElementById("email").value

    };

    fetch(scriptURL, {

        method: "POST",

        body: JSON.stringify(data)

    })

    .then(response => response.json())

    .then(result => {

        alert("Thank you! Your message has been sent.");

        contactForm.reset();

        document.getElementById("contactModal").style.display = "none";

    })

    .catch(error => {

        console.log(error);

        alert("Failed to send.");

    });

});