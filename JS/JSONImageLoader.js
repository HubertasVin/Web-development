"use strict";

let images;
let instructions;

function getDataImg(loc, id) {
    fetch("../JSON/smokeInfo.json")
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            if (localStorage.getItem('currentMap') === "mirage") {
                mirageGalleryLoad(loc, id, data);
            } else {

            }
        });
}

function mirageGalleryLoad(loc, id, data) {
    images = data.mirage[loc].smokes[id].img;
    instructions = data.mirage[loc].smokes[id].thrdesc;

    document.getElementById('imgSrc').src = images[0];
    document.getElementById('photoVideoBtn').style.visibility = "visible";
    document.getElementById('imgBackIcon').style.visibility = "visible";
    document.getElementById('photoVideoBtn').setAttribute("onclick", "playVideo(" + loc + "," + id + ")");
    document.getElementById('imgBackIcon').setAttribute("onclick", "backPage(" + loc + ");");

    // šits sutvarko popup. Kažkur kitur reiks numest
    // įdeda rodyklytes
    document.getElementById('popupPhoto').innerHTML += "<a class='fas fa-caret-left imgPrev' id='nextImg' onclick='previousImage()'></a><a class='fas fa-caret-right imgNext' id='prevImg' onclick='nextImage()'></a><div class='smokeDescription'><p class='smokeInstructions' id='smokeInstructions'><p></div>";

    // kad neliktu box, kai paspaudi
    document.getElementById('JSONinfo').innerHTML = "";
    
    // instrukcijos
    document.getElementById('smokeInstructions').innerHTML = instructions[0];
    
}