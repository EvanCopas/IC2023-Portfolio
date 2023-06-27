let navHome = document.querySelector("#home");
let navAboutMe = document.querySelector("#aboutme");
let navProjects = document.querySelector("#projects");
let navContact = document.querySelector("#contact");

let homePage = document.querySelector("#homePage");
let aboutmePage = document.querySelector("#aboutmePage");
let projectsPage = document.querySelector("#projectsPage");
let contactPage = document.querySelector("#contactPage");

navHome.onclick = function () {
    homePage.style.display = "";
    aboutmePage.style.display = "none";
    projectsPage.style.display = "none";
    contactPage.style.display = "none";
}

navAboutMe.onclick = function () {
    homePage.style.display = "none";
    aboutmePage.style.display = "block";
    projectsPage.style.display = "none";
    contactPage.style.display = "none";
}

navProjects.onclick = function () {
    homePage.style.display = "none";
    aboutmePage.style.display = "none";
    projectsPage.style.display = "block";
    contactPage.style.display = "none";
}

navContact.onclick = function () {
    homePage.style.display = "none";
    aboutmePage.style.display = "none";
    projectsPage.style.display = "none";
    contactPage.style.display = "block";
}

textarea = document.querySelector("#autoresizing");
textarea.addEventListener("input", autoResize, false);
changeMessage = document.querySelector("#messagedChanged");

function autoResize() {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
}

function readText() {
    inputMessage = textarea.value
    console.log(inputMessage)
    changeMessage = inputMessage
}