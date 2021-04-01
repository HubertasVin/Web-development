"use strict";

function getData(loc) {
    fetch("../JSON/smokeInfo.json")
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            loadSmokes(loc, data);
        });
}

function loadSmokes(loc, data) {
    if (localStorage.getItem('currentMap') === "mirage") {
        mirageSmokeLoad(loc, data)
    }
}

function mirageSmokeLoad(loc, data) {
    if (loc === "bench") {
        let result = "";
        for (let i = 0; i < Object.keys(data.mirage[0].bench).length; i++) {
            //One-Way Smoke'ai
            if (data.mirage[0].bench[i].oneway == true) {
            result += "<div class='smokeBoxMap' id='smokeBoxMap' onclick='showPopup(&quot;smokePopup&quot;); hidePopup(&quot;mainPopup&quot;, false); getDataImg(&quot;bench&quot;, " + i + ")'><h3>" + data.mirage[0].bench[i].from + "<i class='fas fa-cloud fa-1x'></i></h3><h4><i class='fas fa-arrow-alt-circle-up fa-1x' title='One-Way Smoke'></i></h4><img src='" + data.mirage[0].bench[i].img[1] + "'></img></div>";
            } else {
                result += "<div class='smokeBoxMap' id='smokeBoxMap' onclick='showPopup(&quot;smokePopup&quot;); hidePopup(&quot;mainPopup&quot;, false); getDataImg(&quot;bench&quot;, " + i + ")'><h3>" + data.mirage[0].bench[i].from + "<i class='fas fa-cloud fa-1x'></i></h3><h4><div class='placeholder'></div></h4><img src='" + data.mirage[0].bench[i].img[1] + "'></img></div>";
            }
        }
        document.getElementById('testJSON').innerHTML = result;
    }
}


//clear the popup
function clearPopup(id) {
    let div = document.getElementById(id);
    div.remove();
}