"use strict";

let JSONdata;

function getData(loc) {
    fetch("../JSON/smokeInfo.json")
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            JSONdata = data;
            if (localStorage.getItem('currentMap') === "mirage")
                map = JSONdata.mirage;
            else if (localStorage.getItem('currentMap') === "inferno")
                map = JSONdata.inferno;
            smokeLoad(loc)
        });
}

function smokeLoad(loc) {
    let result = "";

    if (typeof map[loc] === "undefined") {
        document.getElementById('smokeTitle').innerHTML = "undefined";
    } 
    else {
        document.getElementById('smokeTitle').innerHTML = map[loc].title + " " + typeActive;
    
        for (let i = 0; i < Object.keys(map[loc].smoke).length; i++) {
            result += "<div class='smokeBoxMap' id='smokeBoxMap' ";

            // iškart užkraus video jeigu per settings pasirinkai  taip
            if (localStorage.getItem('loadVideoFirst') == "false") {
                result += "onclick='getDataImg(" + loc + "," + i + ")'";
            } else {
                result += "onclick='playVideo(" + loc + "," + i + ")'";
            }

            // smoke'o dėžės pavadinimas
            result += "><h3>" + "from\ " + map[loc].smoke[i].from;

            // ar one way
            if (map[loc].smoke[i].oneway == true) {
                result += "<i class='fas fa-arrow-alt-circle-up fa-1x' title='One-Way Smoke'></i>";
            }

            // nuotrauka ir views
            result += "</h3><i class='fas fa-cloud fa-10x'></i><img src='" + map[loc].smoke[i].img[0] + "'></img><h3 id='views'>views</h3></div>";
        }
        document.getElementById('JSONinfo').innerHTML = result;
    }
}

function clearPopup() {
    document.getElementById('JSONinfo').innerHTML = "";
    document.getElementById('iframe').innerHTML = "";
    document.getElementById('iframe').src = "";
    document.getElementById('popupPhoto').innerHTML = "<img id='imgSrc'/>";
    document.removeEventListener("keydown", browseImagesKeyEvent);
    document.getElementById('popupPhoto').style.boxShadow = "";
}