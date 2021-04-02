"use strict";

let images;
let instructions;

function getDataImg(loc) {
    fetch("../JSON/smokeInfo.json")
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            if (localStorage.getItem('currentMap') === "mirage") {
                mirageGalleryLoad(loc, data);
            }
        });
}

function mirageGalleryLoad(loc, data) {
    if (loc == 0) {
        images = data.mirage.bench[loc].img;
        instructions = data.mirage.bench[loc].thrdesc;

        img.src = images[0];

        // šits sutvarko popup. Kažkur kitur reiks numest
        // panaikina praeitus smokebox
        document.getElementById('JSONinfo').innerHTML = "";
        // įdeda rodyklytes
        document.getElementById('popupPhoto').innerHTML += "<a class='fas fa-chevron-left imgPrev' id='nextImg' onclick='previousImage()'></a><a class='fas fa-chevron-right imgNext' id='prevImg' onclick='nextImage()'></a><div class='smokeDescription'><div class='watchVideo popupText' id='playVid' onclick='playVideo()'><i class='fas fa-play'></i> watch the video</div><p class='smokeInstructions' id='smokeInstructions'><p></div>";
        
        document.getElementById('smokeInstructions').innerHTML = instructions[0];
    }
}