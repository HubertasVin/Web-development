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

function chColor(id) {
    let target = document.getElementById(id);
    if (target.style.backgroundColor == "") {
        target.style.backgroundColor = 'rgb(128, 0, 128)';
    } else {
        target.style.backgroundColor = "";
    }
}