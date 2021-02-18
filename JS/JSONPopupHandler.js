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
            result += "<div class='smokeBoxMap' id='smokeBoxMap' onclick='showPopup(&quot;smokePopup&quot;); hidePopup(&quot;mainPopup&quot;, false)'><h3>" + data.mirage[0].bench[i].title + "</h3><h4></h4><img src='" + data.mirage[0].bench[i].img[1] + "'></img></div>";
        }
        document.getElementById('testJSON').innerHTML = result;
    }
}


//clear the popup
function clearPopup(id) {
    let div = document.getElementById(id);
    div.remove();
}