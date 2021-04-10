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

let typeActiveID = "type1";
let typeActive = "smoke";
let tickActive = 2;

// filtru spalva pakeicia onclick (changeFilter)
function chFilter(id, type) {
    let target = document.getElementById(id);

    if (id.includes("type")) {
        document.getElementById(typeActiveID).classList.remove("active");
        typeActiveID = id;
        if (target.classList.contains("active")) {
            target.classList.remove("active");
        } 
        else {
            target.classList.add("active");
            typeActive = type;
            getIconData(typeActive);
        }
    }

    if (id.includes("tick")) {
        if (tickActive > 1 && target.classList.contains("active")) {
            target.classList.remove("active");
            tickActive--;
        } else if (tickActive === 1 && !target.classList.contains("active")) {
            target.classList.add("active");
            tickActive++;
        }
    }
}

let checkClose = false;
let checkOpen = true;
let settingsId = document.getElementById('settingsId');

// display neveikia su transition ;(
// galbut veiks su scale arba visibility
function openMenu() {
    if (checkOpen) {
        settingsId.style.display = 'block';
        // setTimeout(() => {
        //     settingsId.classList.add('transition');
        // }, 10);
        
        // settingsId.style.opacity = '1';
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
        }, 0);
        document.body.removeAttribute("onclick");
        // settingsId.classList.remove('transition');
        // settingsId.style.opacity = '0';
        checkClose = false;
        checkOpen = true;
    } else {
        checkClose = true;
        document.getElementById('settingsButton').setAttribute("onclick", "openMenu()");
    }
}

let userTheme = false;
let loadVideoFirst = false;

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
    if (setting == "loadVideoFirst") {
        if (!loadVideoFirst) {
            loadVideoFirst = true;
            document.getElementById('loadVideoFirst').innerHTML = "Load video first: true";
        } else {
            loadVideoFirst = false;
            document.getElementById('loadVideoFirst').innerHTML = "Load video first: false";
        }
    }
}