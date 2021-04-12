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
                map = JSONdata.mirage[localStorage.getItem('typeActive')];
            else if (localStorage.getItem('currentMap') === "inferno")
                map = JSONdata.inferno[localStorage.getItem('typeActive')];
            smokeLoad(loc)
        });
}

function smokeLoad(loc) {
    let result = "";

    if (typeof map[loc] === "undefined") {
        document.getElementById('smokeTitle').innerHTML = "undefined";
    } 
    else {
        document.getElementById('smokeTitle').innerHTML = map[loc].title + " " + localStorage.getItem('typeActive');
    
        for (let number = 1; number < Object.keys(map[loc]).length; number++) {
            result += "<div class='smokeBoxMap' id='smokeBoxMap' ";

            // iškart užkraus video jeigu per settings pasirinkai  taip
            if (localStorage.getItem('loadVideoFirst') == "false") {
                result += "onclick='getDataImg(" + loc + "," + number + ")'";
            } else {
                result += "onclick='playVideo(" + loc + "," + number + ")'";
            }

            // smoke'o dėžės pavadinimas
            result += "><h3>" + "from\ " + map[loc][number].from;

            // ar one way
            if (map[loc][number].oneway == true) {
                result += "<i class='fas fa-arrow-alt-circle-up fa-1x' title='One-Way Smoke'></i>";
            }

            // nuotrauka ir views
            result += "</h3><i class='fas fa-cloud fa-10x'></i><img src='" + map[loc][number].img[0] + "'></img><h3 id='views'>views</h3></div>";
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