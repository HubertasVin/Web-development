"use strict";

let smokeIconDiv = document.getElementById('smokeIconHolder');

function getIconData() {
    fetch("../JSON/smokeIcons.json")
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            loadIcons(data);
        });
}

function loadIcons(data) {
        let result = "";
    if (localStorage.getItem('currentMap') === "mirage") {
        smokeIconDiv.innerHTML = "";
        for (let i = 0; i < Object.keys(data.mirage).length; i++) {
            result += data.mirage[i];
        }
        smokeIconDiv.innerHTML = result;
    } else if (localStorage.getItem('currentMap') === "inferno") {
        smokeIconDiv.innerHTML = "";
        for (let i = 0; i < Object.keys(data.inferno).length; i++) {
            result += data.inferno[i];
        }
        smokeIconDiv.innerHTML = result;
    }
}