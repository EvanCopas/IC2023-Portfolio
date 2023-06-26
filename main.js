let homePage = document.querySelector("#home");
let aboutmePage = document.querySelector("#aboutme");
let projectsPage = document.querySelector("#projects");
let contactPage = document.querySelector("#contact");

homePage.onclick = function () {
    console.log("test");
    homePage.style.display = "";
    aboutmePage.style.display = "none";
    projectsPage.style.display = "none";
    contactPage.style.display = "none";
}

aboutmePage.onclick = function () {
    homePage.style.display = "none";
    aboutmePage.style.display = "block";
    projectsPage.style.display = "none";
    contactPage.style.display = "none";
}

projectsPage.onclick = function () {
    homePage.style.display = "none";
    aboutmePage.style.display = "none";
    projectsPage.style.display = "block";
    contactPage.style.display = "none";
}

contactPage.onclick = function () {
    homePage.style.display = "none";
    aboutmePage.style.display = "none";
    projectsPage.style.display = "none";
    contactPage.style.display = "block";
}