"use strict";

let index = 0;

let next = document.getElementById('nextImg');
let prev = document.getElementById('prevImg');
let img = document.getElementById('imgSrc');
let vid = document.getElementById('iframe');
let instr = document.getElementById('smokeInstructions');
let popupId = document.getElementById('mainPopup');

function escapePopup(event) {
    if (event.key === 'Escape') {
        hidePopup('mainPopup');
        clearPopup('smokeBoxMap');
    }
}

function showPopup() {
    popupId.style.visibility = "visible";
    popupId.style.opacity = "1";
    // side bar panaikina
    document.body.style.overflow = "hidden";

    // Nuotraukos isjungimas, paspaudus Escape mygtuka
    document.addEventListener("keydown", escapePopup);
}

function hidePopup() {
    popupId.style.visibility = "hidden";
    popupId.style.opacity = "0";
    document.body.style.overflow = "visible";

    document.removeEventListener("keydown", escapePopup);
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
        target.style.backgroundColor = 'rgb(128, 0, 128)';
    } else {
        target.style.backgroundColor = "";
    }
}

let check = false;
let settingsId = document.getElementById('settingsId');
let settingOpacity = 0;

// display neveikia su transition ;(
function openMenu() {
    settingsId.style.display = 'block';
    setTimeout(() => {
        settingsId.classList.add('transition');
    }, 10);
    
    settingsId.style.opacity = '1';
    // jeigu be check, iskart suveiktu closeMenu ir uzdarytu settings
    document.body.setAttribute("onclick", "closeMenu()");
}

function closeMenu() {
    if (check) {
        setTimeout(() => {
            settingsId.style.display = 'none';
        }, 300);
        document.body.removeAttribute("onclick");
        settingsId.classList.remove('transition');
        settingsId.style.opacity = '0';
        check = false;
    } else {
        check = true;
    }
}

let userTheme = false;
let loadVideoOnly = false;

// nustatymu onclick pakeitimai (prastai padariau kol kas)
function settingChange(setting) {
    // closeMenu kitaip suveiks ir uždarys settings
    check = false;
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