"use strict";

let images = [];
let instructions = [];

function getDataImg(loc, id) {
    fetch("../JSON/smokeInfo.json")
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            loadImages(loc, id, data);
        });
}

function loadImages(loc, id, data) {
    if (localStorage.getItem('currentMap') === "mirage") {
        mirageGalleryLoad(loc, id, data);
    }
}

function mirageGalleryLoad(loc, id, data) {
    if (loc === "bench") {
        for (let i = 0; i < Object.keys(data.mirage[0].bench[id].img).length; i++) {
            images[i] = data.mirage[0].bench[id].img[i];
            instructions[i] = data.mirage[0].bench[id].thrdesc[i];
        }
        img.src = images[0];
        instr.innerHTML = instructions[0];
        title.innerHTML = data.mirage[0].bench[id].to + " Smoke " + data.mirage[0].bench[0].from;

        console.log(images);
    }
}