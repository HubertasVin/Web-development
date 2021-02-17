"use strict";

function getData() {
    fetch("../JSON/mirage_smokes.json")
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            console.log(data);

            let myTest = "<div class='smokeBoxMap'><h3>from CT spawn</h3><h4></h4><img src='../images/Smokes/Overpass/overpass_monster1_after.jpg'></img></div>";
            let result;
            for (let i = 0; i < 3; i++) {
                result += `testing `;
            }
            document.getElementById('testJSON').innerHTML = myTest;
            // console.log(result);
        });
}