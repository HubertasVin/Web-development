"use strict";

let images;
let instructions;

function getDataImg(loc, number) {
    images = map[loc][number].img;
    instructions = map[loc][number].thrdesc;

    document.getElementById('imgSrc').src = images[0];
    document.getElementById('photoVideoBtn').style.visibility = "visible";
    document.getElementById('imgBackIcon').style.visibility = "visible";
    document.getElementById('photoVideoBtn').setAttribute("onclick", "playVideo(" + loc + "," + number + ")");
    document.getElementById('imgBackIcon').setAttribute("onclick", "backPage(" + loc + ");");

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