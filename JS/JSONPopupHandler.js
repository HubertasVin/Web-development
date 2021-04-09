"use strict";

let JSONdata;

function getData(loc) {
    fetch("../JSON/smokeInfo.json")
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            JSONdata = data;
            if (localStorage.getItem('currentMap') === "mirage") {
                mirageSmokeLoad(loc)
            }
        });
}

function mirageSmokeLoad(loc) {
    let result = "";
    for (let i = 0; i < Object.keys(JSONdata.mirage[loc].smokes).length; i++) {
        result += "<div class='smokeBoxMap' id='smokeBoxMap' ";

        // iškart užkraus video jeigu per settings pasirinkai  taip
        if (!loadVideoFirst) {
            result += "onclick='getDataImg(" + loc + "," + i + ")'";
        } else {
            result += "onclick='playVideo(" + loc + "," + i + ")'";
        }

        // box apibudinimas
        result += "><h3>" + JSONdata.mirage[loc].smokes[i].from;

        // ar one way
        if (JSONdata.mirage[loc].smokes[i].oneway == true) {
            result += "<i class='fas fa-arrow-alt-circle-up fa-1x' title='One-Way Smoke'></i>";
        }

        // nuotrauka ir views
        result += "</h3><i class='fas fa-cloud fa-10x'></i><img src='" + JSONdata.mirage[loc].smokes[i].img[0] + "'></img><h3 id='views'>views</h3></div>";
    }
    document.getElementById('JSONinfo').innerHTML = result;
}

function clearPopup() {
    document.getElementById('JSONinfo').innerHTML = "";
    document.getElementById('iframe').innerHTML = "";
    document.getElementById('popupPhoto').innerHTML = "<img id='imgSrc'/>";
}

