let navHome = document.querySelector("#home");
let navAboutMe = document.querySelector("#aboutme");
let navProjects = document.querySelector("#projects");
let navContact = document.querySelector("#contact");
let navEducation = document.querySelector("#education");
let homePage = document.querySelector("#homePage");
let aboutmePage = document.querySelector("#aboutmePage");
let projectsPage = document.querySelector("#projectsPage");
let contactPage = document.querySelector("#contactPage");
let educationPage = document.querySelector("#educationPage");

navHome.onclick = function () {
    homePage.style.display = "";
    aboutmePage.style.display = "none";
    projectsPage.style.display = "none";
    educationPage.style.display = "none";
    contactPage.style.display = "none";
}

navAboutMe.onclick = function () {
    homePage.style.display = "none";
    aboutmePage.style.display = "flex";
    projectsPage.style.display = "none";
    educationPage.style.display = "none";
    contactPage.style.display = "none";
}

navProjects.onclick = function () {
    homePage.style.display = "none";
    aboutmePage.style.display = "none";
    projectsPage.style.display = "block";
    educationPage.style.display = "none";
    contactPage.style.display = "none";
}

navEducation.onclick = function () {
    homePage.style.display = "none";
    aboutmePage.style.display = "none";
    projectsPage.style.display = "none";
    educationPage.style.display = "block";
    contactPage.style.display = "none";
}

navContact.onclick = function () {
    homePage.style.display = "none";
    aboutmePage.style.display = "none";
    projectsPage.style.display = "none";
    educationPage.style.display = "none";
    contactPage.style.display = "block";
}