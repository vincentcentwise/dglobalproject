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

window.onclick = (e)=>{

if(e.target==modal){

modal.style.display="none";

}

};

showForm.onclick = ()=>{

form.style.display="block";

};

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you! Your message has been received.");

form.reset();

});


const scriptURL =
"https://script.google.com/macros/s/AKfycbw556ujuZi-KSPKwJJc-SzbysegatLAgKpx7Lbspl2BzYhHL9z7ZKPvf2OgPKx16uNN/exec";

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

e.preventDefault();

const data = {

name:document.getElementById("name").value,

phone:document.getElementById("phone").value,

email:document.getElementById("email").value

};

fetch(scriptURL,{

method:"POST",

body:JSON.stringify(data)

})

.then(res=>res.json())

.then(response=>{

alert("Message Sent Successfully!");

form.reset();

})

.catch(error=>{

alert("Something went wrong.");

console.log(error);

});

});