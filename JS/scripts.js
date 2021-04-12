"use strict";

let index = 0;

const next = document.getElementById('nextImg');
const prev = document.getElementById('prevImg');
const img = document.getElementById('imgSrc');
const vid = document.getElementById('iframe');
const instr = document.getElementById('smokeInstructions');
const mainPopup = document.getElementById('mainPopup');
const mapMainImg = document.getElementById('mapMainImg');
const photoVideoBtn = document.getElementById('photoVideoBtn');
const imgBackIcon = document.getElementById('imgBackIcon');
const photoVideoSwap = document.getElementById('photoVideoSwap');
const popupPhoto = document.getElementById('popupPhoto');

function escapePopup(event) {
    if (event.key === 'Escape') {
        hidePopup('mainPopup');
    }
}

function showPopup() {
    mainPopup.style.visibility = "visible";
    mainPopup.style.opacity = "1";
    document.body.style.overflow = "hidden";
    document.getElementById('popup').style.transform = "scale(1)";

    // Nuotraukos isjungimas, paspaudus Escape mygtuka
    document.addEventListener("keydown", escapePopup);
}

function hidePopup() {
    document.body.style.overflow = "visible";
    document.getElementById('popup').style.transform = "scale(0)";
    mainPopup.style.visibility = "hidden";
    photoVideoBtn.style.visibility = "hidden";
    imgBackIcon.style.visibility = "hidden";
    mainPopup.style.opacity = "0";
    quitVideo();

    document.removeEventListener("keydown", escapePopup);
    setTimeout(() => {
        clearPopup();
        photoVideoBtn.style.visibility = "hidden";
    }, 100);
}

function backPage(loc) {
    clearPopup();
    getData(loc);
    quitVideo();
    photoVideoBtn.style.visibility = "hidden";
    imgBackIcon.style.visibility = "hidden";
}



// Nuotrauku galerijos next ir previous mygtukai
function nextImage() {
    if(index < images.length - 1) {
        index++;
    } else {
        index = 0;
    }
    document.getElementById('imgSrc').src = images[index];
    document.getElementById('smokeInstructions').innerHTML = instructions[index];
}


function previousImage() {
    if(index > 0) {
        index--;
    } else {
        index = images.length - 1;
    }
    document.getElementById('imgSrc').src = images[index];
    document.getElementById('smokeInstructions').innerHTML = instructions[index];
}

// judėti tarp nuotraukų su rodyklytem
function browseImagesKeyEvent(e) {
    if (e.key == "ArrowRight") {
        if(index < images.length - 1) {
            index++;
        } else {
            index = 0;
        }
        document.getElementById('imgSrc').src = images[index];
        document.getElementById('smokeInstructions').innerHTML = instructions[index];
    }
    if (e.key === "ArrowLeft") {
        if(index > 0) {
            index--;
        } else {
            index = images.length - 1;
        }
        document.getElementById('imgSrc').src = images[index];
        document.getElementById('smokeInstructions').innerHTML = instructions[index];
    }
}


// declare default jeigu nieko nėra
if (localStorage.getItem('typeActive') ===  null) {
    localStorage.setItem("typeActive", "smoke");
    localStorage.setItem("typeActiveID", "type1");
}
if (localStorage.getItem('tick1') ===  null && localStorage.getItem('tick2') ===  null) {
    localStorage.setItem("tick1", "true");
    localStorage.setItem("tick2", "false");
}

// uždedam tas kas yra active
document.getElementById(localStorage.getItem("typeActiveID")).classList.add("active");
if (localStorage.getItem("tick1") === "true") {
    document.getElementById("tick1").classList.add("active");
}
if (localStorage.getItem("tick2") === "true") {
    document.getElementById("tick2").classList.add("active");
}

// filtru spalva pakeicia onclick (changeFilter)
function chFilter(id, type) {
    let target = document.getElementById(id);

    if (id.includes("type")) {
        document.getElementById(localStorage.getItem("typeActiveID")).classList.remove("active");
        localStorage.setItem("typeActiveID", id);
        if (target.classList.contains("active")) {
            target.classList.remove("active");
        } 
        else {
            target.classList.add("active");
            localStorage.setItem("typeActive", type);
            getIconData();
        }
    }

    if (id.includes("tick")) {
        // tick1 ir tick2 ir contains(active)
        if (localStorage.getItem("tick1") === "true" && localStorage.getItem("tick2") === "true" && target.classList.contains("active"))
        {
            target.classList.remove("active");
            localStorage.setItem(id, "false");
        } 
        // tick1 arba tick2 ir NOT contains(active)
        else if (localStorage.getItem("tick1") === "true" || localStorage.getItem("tick2") === "true" && !target.classList.contains("active"))
        {
            target.classList.add("active");
            localStorage.setItem(id, "true");
        }
    }
}

let checkClose = false;
let checkOpen = true;

// display neveikia su transition ;(
// galbut veiks su scale arba visibility
function openMenu() {
    if (checkOpen) {
        document.getElementById('settingsId').style.display = 'block';
        document.body.setAttribute("onclick", "closeMenu()");
        document.getElementById('settingsButton').removeAttribute("onclick", "openMenu()");
        checkOpen = false;
    }
}

function closeMenu() {
    if (checkClose) {
        setTimeout(() => {
            document.getElementById('settingsId').style.display = 'none';
        }, 0);
        document.body.removeAttribute("onclick");
        checkClose = false;
        checkOpen = true;
    } else {
        checkClose = true;
        document.getElementById('settingsButton').setAttribute("onclick", "openMenu()");
    }
}



if (localStorage.getItem('userTheme') ===  null) {
    localStorage.setItem("userTheme", "false");
}
if (localStorage.getItem('loadVideoFirst') ===  null) {
    localStorage.setItem("loadVideoFirst", "false");
}

if (localStorage.getItem('userTheme') === "false") {
    document.getElementById('userTheme').innerHTML = "Dark theme: false";
} else {
    document.getElementById('userTheme').innerHTML = "Dark theme: true";
}
if (localStorage.getItem('loadVideoFirst') == "false") {
    document.getElementById('loadVideoFirst').innerHTML = "Load video first: false";
} else {
    document.getElementById('loadVideoFirst').innerHTML = "Load video first: true";
}

// nustatymu onclick pakeitimai (prastai padariau kol kas)
function settingChange(setting) {
    // closeMenu kitaip suveiks ir uždarys settings
    checkClose = false;
    if (setting === "userTheme") {
        if (localStorage.getItem('userTheme') === "false") {
            localStorage.setItem("userTheme", "true");
            document.getElementById('userTheme').innerHTML = "Dark theme: true";
        } else {
            localStorage.setItem("userTheme", "false");
            document.getElementById('userTheme').innerHTML = "Dark theme: false";
        }
    }
    if (setting === "loadVideoFirst") {
        if (localStorage.getItem('loadVideoFirst') == "false") {
            localStorage.setItem("loadVideoFirst", "true");
            document.getElementById('loadVideoFirst').innerHTML = "Load video first: true";
        } else {
            localStorage.setItem("loadVideoFirst", "false");
            document.getElementById('loadVideoFirst').innerHTML = "Load video first: false";
        }
    }
}