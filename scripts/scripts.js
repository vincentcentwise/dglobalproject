const form = document.getElementById("trainingForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const fullname =
    document.getElementById("fullname").value;

    document.getElementById("successMessage").innerHTML =
    `Thank you ${fullname}! Your registration has been submitted successfully.`;

    form.reset();
});