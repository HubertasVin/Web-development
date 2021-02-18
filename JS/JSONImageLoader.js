"use strict";

function getDataImg(loc, id) {
    fetch("../JSON/mirage_smokes.json")
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            loadImages(loc, data);
        });
}

function loadImages(loc, data) {
    if (localStorage.getItem('currentMap') === "mirage") {
        mirageSmokeLoad(loc, data);
    }
}