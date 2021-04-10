"use strict";

let smokeIconDiv = document.getElementById('smokeIconHolder');
let map;

function getIconData() {
    fetch("../JSON/smokeIcons.json")
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            // object galima įeiti ne tik su .type bet ir [type]
            if (localStorage.getItem('currentMap') === "mirage")
                map = data.mirage[typeActive];
            else if (localStorage.getItem('currentMap') === "inferno")
                map = data.inferno[typeActive];
            loadIcons();
        });
}

function loadIcons() {
    smokeIconDiv.innerHTML = "";
    let result = "";
    for (let i = 0; i < Object.keys(map.bottom).length; i++) {
        result += "<div class='fas fa-cloud fa-2x smokeIcon' style='bottom: " + map.bottom[i] + "%" + ";right: " + map.right[i] + "%" + ";' onclick='showPopup(); getData(&quot;" + i + "&quot;)'></div>";
    }
    smokeIconDiv.innerHTML = result;
}