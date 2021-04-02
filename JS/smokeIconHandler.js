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

        for (let i = 0; i < Object.keys(data.mirage.bottom).length; i++) {
            result += "<div class='fas fa-cloud fa-2x smokeIcon' style='bottom: " + data.mirage.bottom[i] + "%" + ";right: " + data.mirage.right[i] + "%" + ";' onclick='showPopup(&quot;mainPopup&quot;); getData(&quot;" + i + "&quot;)'></div>";
        }
        smokeIconDiv.innerHTML = result;
    }
    //  else if (localStorage.getItem('currentMap') === "inferno") {
    //     smokeIconDiv.innerHTML = "";
        
    //     for (let i = 0; i < Object.keys(data.inferno).length; i++) {
    //         result += data.inferno[i];
    //     }
    //     smokeIconDiv.innerHTML = result;
    // }
}