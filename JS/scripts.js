"use strict";

let index = 0;

let next = document.getElementById('nextImg');
let prev = document.getElementById('prevImg');
let img = document.getElementById('imgSrc');
let vid = document.getElementById('iframe');
let instr = document.getElementById('smokeInstructions');
let mainPopup = document.getElementById('mainPopup');
let mapMainImg = document.getElementById('mapMainImg');
let photoVideoBtn = document.getElementById('photoVideoBtn');
let imgBackIcon = document.getElementById('imgBackIcon');
let photoVideoSwap = document.getElementById('photoVideoSwap');

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

// filtru spalva pakeicia onclick (changeColor)
function chColor(id) {
    let target = document.getElementById(id);
    if (target.style.backgroundColor == "") {
        target.style.backgroundColor = "#c98b2f";
        target.style.borderRadius = "10px";
    } else {
        target.style.backgroundColor = "";
    }
}

let checkClose = false;
let checkOpen = true;
let settingsId = document.getElementById('settingsId');
let settingOpacity = 0;

// display neveikia su transition ;(
// galbut veiks  su scale
function openMenu() {
    if (checkOpen) {
        settingsId.style.display = 'block';
        setTimeout(() => {
            settingsId.classList.add('transition');
        }, 10);
        
        settingsId.style.opacity = '1';
        // jeigu be check, iskart suveiktu closeMenu ir uzdarytu settings
        document.body.setAttribute("onclick", "closeMenu()");
        document.getElementById('settingsButton').removeAttribute("onclick", "openMenu()");
        checkOpen = false;
    }
}

function closeMenu() {
    if (checkClose) {
        setTimeout(() => {
            settingsId.style.display = 'none';
        }, 300);
        document.body.removeAttribute("onclick");
        settingsId.classList.remove('transition');
        settingsId.style.opacity = '0';
        checkClose = false;
        checkOpen = true;
    } else {
        checkClose = true;
        document.getElementById('settingsButton').setAttribute("onclick", "openMenu()");
    }
}

let userTheme = false;
let loadVideoOnly = false;

// nustatymu onclick pakeitimai (prastai padariau kol kas)
function settingChange(setting) {
    // closeMenu kitaip suveiks ir uždarys settings
    checkClose = false;
    if (setting == "userTheme") {
        if (!userTheme) {
            userTheme = true;
            document.getElementById('userTheme').innerHTML = "Dark theme: true";
        } else {
            userTheme = false;
            document.getElementById('userTheme').innerHTML = "Dark theme: false";
        }
    }
    if (setting == "loadVideoOnly") {
        if (!loadVideoOnly) {
            loadVideoOnly = true;
            document.getElementById('loadVideoOnly').innerHTML = "Load video only: true";
        } else {
            loadVideoOnly = false;
            document.getElementById('loadVideoOnly').innerHTML = "Load video only: false";
        }
    }
}