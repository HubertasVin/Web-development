"use strict";

function getData(loc) {
    fetch("../JSON/smokeInfo.json")
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            if (localStorage.getItem('currentMap') === "mirage") {
                mirageSmokeLoad(loc, data)
            }
        });
}

function mirageSmokeLoad(loc, data) {
    let result = "";
    for (let i = 0; i < Object.keys(data.mirage[loc].smokes).length; i++) {
        result += "<div class='smokeBoxMap' id='smokeBoxMap' onclick='getDataImg(" + loc + "," + i + ")'><h3>" + data.mirage[loc].smokes[i].from + "<i class='fas fa-cloud fa-1x'></i></h3><h4>";

        if (data.mirage[loc].smokes[i].oneway == true) {
            result += "<i class='fas fa-arrow-alt-circle-up fa-1x' title='One-Way Smoke'></i></h4><img src='" + data.mirage[loc].smokes[i].img[1] + "'></img></div>";
        } else {
            result += "<div class='placeholder'></div></h4><img src='" + data.mirage[loc].smokes[i].img[1] + "'></img></div>";
        }
    }
    document.getElementById('JSONinfo').innerHTML = result;
}

// reiktu transition
function clearPopup() {
    document.getElementById('iframe').innerHTML = "";
    document.getElementById('popupPhoto').innerHTML = "<img id='imgSrc'/>";
}