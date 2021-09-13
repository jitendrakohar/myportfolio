const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
        console.log("concole is clicked");
    });
});

function myFunction() {
    links.forEach(link => {
        link.classList.toggle("fade");

    });
    navLinks.classList.toggle("open");
}



const sidebar = document.querySelector(".sidebar");
const skillbar = document.querySelector(".skillbar");
const widthOfSkillbar = document.querySelector(".skills");
// if (widthOfSkillbar.offsetWidth <= "760") {
sidebar.style.width = "0";
skillbar.style.width = "100vw";
const javas = document.getElementByClassName("java");
// javas.addEventListener('click', () => {
//     document.getElementById("java").innerHTML = "<p>hello man you have clicked on the java course</p>";
// })


// }
// else { // if (widthOfSkillbar.offsetWidth >= "761")
//     sidebar.style.width = "50vw";
//     skillbar.style.width = "50vw";
// }



//this is the code for contact session

var form = document.getElementById("my-form");
async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        status.innerHTML = "Thanks you for submission!";
        form.requestFullscreen();
    }).catch(error => {
        status.innerHTML = "oops! there is a problem in submission"
    });
}
form.addEventListener("submit", handleSubmit);
