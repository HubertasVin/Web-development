"use strict";

let index = 0;

let next = document.getElementById('nextImg');
let prev = document.getElementById('prevImg');
let img = document.getElementById('imgSrc');
let instr = document.getElementById('smokeInstructions');

function escapePopup(event) {
    if (event.key === 'Escape') {
        hidePopup(this);
        clearPopup('smokeBoxMap');
        img.src = images[0];
        console.log("paspausta");
    }
}

function showPopup(popupId) {
    document.getElementById(popupId).style.visibility = "visible";
    document.getElementById(popupId).style.opacity = "1";
    // side bar panaikina
    document.body.style.overflow = "hidden";
    // document.getElementById('imgSrc').style.visibility = "visible";

    // Nuotraukos isjungimas, paspaudus Escape mygtuka
    document.addEventListener("keydown", escapePopup.bind(popupId));
}

function hidePopup(popupId, overflow) {
    document.getElementById(popupId).style.visibility = "hidden";
    document.getElementById(popupId).style.opacity = "0";
    // document.getElementById('videoSrc').style.visibility = "hidden";
    if (overflow === true) {
        document.body.style.overflow = "visible";
    }

    document.removeEventListener("keydown", escapePopup.bind(popupId));
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

function chColor(id) {
    let target = document.getElementById(id);
    if (target.style.backgroundColor == "") {
        target.style.backgroundColor = 'rgb(128, 0, 128)';
    } else {
        target.style.backgroundColor = "";
    }
}