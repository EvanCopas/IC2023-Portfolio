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
let nameType = document.querySelector(".nameType");

let i = 0;
let marine = 0;
let speed = 250;

nameType.onload = typeWriter();

function typeWriter() {
    let msg = "Evan Copas";

    if (i < msg.length) {
        nameType.innerHTML += msg.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else if (i === msg.length) {
        setTimeout(typeWriter2, speed);
        clearTimeout(typeWriter);
        marine = i;
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeWriter2() {
    let msg = "Evan Copas";

    if (marine !== 0) {
        nameType.innerHTML = msg
        for (i = 0; i < msg.length;) {
            msg = msg.substring(0, msg.length - 1);
            nameType.innerHTML = msg

            await sleep(speed*1)

            if (msg.length === 0) {
                setTimeout(typeWriter, speed);
                clearTimeout(typeWriter2);
                break;
            }
        }
    }
}

typeWriter2();

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
