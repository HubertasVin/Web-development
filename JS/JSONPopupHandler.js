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
    if (loc == 0) {
        let result = "";
        for (let i = 0; i < Object.keys(data.mirage.bench).length; i++) {
            if (data.mirage.bench[i].oneway == true) {
            result += "<div class='smokeBoxMap' id='smokeBoxMap' onclick='getDataImg(" + i + ")'><h3>" + data.mirage.bench[i].from + "<i class='fas fa-cloud fa-1x'></i></h3><h4><i class='fas fa-arrow-alt-circle-up fa-1x' title='One-Way Smoke'></i></h4><img src='" + data.mirage.bench[i].img[1] + "'></img></div>";
            } else {
                result += "<div class='smokeBoxMap' id='smokeBoxMap' onclick='getDataImg(" + i + ")'><h3>" + data.mirage.bench[i].from + "<i class='fas fa-cloud fa-1x'></i></h3><h4><div class='placeholder'></div></h4><img src='" + data.mirage.bench[i].img[1] + "'></img></div>";
            }
        }
        document.getElementById('JSONinfo').innerHTML = result;
    }
    // if (loc === "alleyBlock") {
    //     let result = "";
    //     for (let i = 0; i < Object.keys(data.mirage[1].alleyBlock).length; i++) {
    //         //One-Way Smoke'ai
    //         if (data.mirage[1].alleyBlock[i].oneway == true) {
    //         result += "<div class='smokeBoxMap' id='smokeBoxMap' onclick='showPopup(&quot;smokePopup&quot;); hidePopup(&quot;mainPopup&quot;, false); getDataImg(&quot;alleyBlock&quot;, " + i + ")'><h3>" + data.mirage[1].alleyBlock[i].from + "<i class='fas fa-cloud fa-1x'></i></h3><h4><i class='fas fa-arrow-alt-circle-up fa-1x' title='One-Way Smoke'></i></h4><img src='" + data.mirage[1].alleyBlock[i].img[1] + "'></img></div>";
    //         } else {
    //             result += "<div class='smokeBoxMap' id='smokeBoxMap' onclick='showPopup(&quot;smokePopup&quot;); hidePopup(&quot;mainPopup&quot;, false); getDataImg(&quot;alleyBlock&quot;, " + i + ")'><h3>" + data.mirage[1].alleyBlock[i].from + "<i class='fas fa-cloud fa-1x'></i></h3><h4><div class='placeholder'></div></h4><img src='" + data.mirage[1].alleyBlock[i].img[1] + "'></img></div>";
    //         }
    //     }
    //     document.getElementById('JSONinfo').innerHTML = result;
    // }
}


//clear the popup - NEVEIKIA
// function clearPopup(id) {
//     let div = document.getElementById(id);
//     div.remove();
// }