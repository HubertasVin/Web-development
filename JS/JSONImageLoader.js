"use strict";

let images;
let instructions;

function getDataImg(loc, id) {
    images = map[loc][typeActive][id].img;
    instructions = map[loc][typeActive][id].thrdesc;

    document.getElementById('imgSrc').src = images[0];
    document.getElementById('photoVideoBtn').style.visibility = "visible";
    document.getElementById('imgBackIcon').style.visibility = "visible";
    document.getElementById('photoVideoBtn').setAttribute("onclick", "playVideo(" + loc + "," + id + ")");
    document.getElementById('imgBackIcon').setAttribute("onclick", "backPage(" + loc + ");");

    // šits sutvarko popup. Kažkur kitur reiks numest
    // įdeda rodyklytes
    document.getElementById('popupPhoto').innerHTML += "<a class='fas fa-caret-left imgPrev' id='nextImg' onclick='previousImage()'></a><a class='fas fa-caret-right imgNext' id='prevImg' onclick='nextImage()'></a><div class='smokeDescription'><p class='smokeInstructions' id='smokeInstructions'><p></div>";

    // vaikščiojimas per nuotraukas su klaviatūros rodyklytem
    document.addEventListener("keydown", browseImagesKeyEvent);

    document.getElementById('popupPhoto').style.boxShadow = "1px 1px 20px 1px black";

    // kad neliktu box, kai paspaudi
    document.getElementById('JSONinfo').innerHTML = "";
    
    // instrukcijos
    document.getElementById('smokeInstructions').innerHTML = instructions[0];
    
}