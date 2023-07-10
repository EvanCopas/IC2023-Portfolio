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
let timeClock = document.querySelector("#timeClock");

let i = 0;
let marine = 0;
let speed = 275;

nameType.onload = typeWriter();
timeClock.onload = localClock();

function localClock() {
    setInterval(() => {
        const date = new Date();

        const dd = date.getDate();
        const MM = date.getMonth();
        const ss = date.getSeconds();
        const mm = date.getMinutes();
        const HH = date.getHours();

        const year = date.getFullYear();
        const month = ("0" + (MM + 1)).slice(-2);
        const day = ("0" + dd).slice(-2);

        const hour = ("0" + HH).slice(-2);
        const minutes = ("0" + mm).slice(-2);
        const seconds = ("0" + ss).slice(-2);

        let currentDate = `${month}-${day}-${year}`
        let time = `${hour} : ${minutes} : ${seconds}`

        currentDate = currentDate + " " + time;
        timeClock.innerHTML = currentDate;
    }, 1000);
}

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

            await sleep(speed * 1)

            if (msg.length === 0) {
                setTimeout(typeWriter, speed);
                clearTimeout(typeWriter2);
                break;
            }
        }
    }
}

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
