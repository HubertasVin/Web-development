"use strict";

let playingVideo = true;

function playVideo(loc, id) {
    // panaikina nuotrauka ir ideda video
    // photoVideoBtn.style.visibility = "visible";
    // imgBackIcon.style.visibility = "visible";
    if (playingVideo) {
        clearPopup();
        document.getElementById('iframe').innerHTML = JSONdata.mirage[loc].smoke[id].videoSrc;
        document.getElementById('btnDescription').innerHTML = "Photo";
        photoVideoSwap.className = "far fa-image fa-2x";
        photoVideoBtn.setAttribute("onclick", "quitVideo(" + loc + "," + id + "," + true + ")");
        playingVideo = false;
    }
}

function quitVideo(loc, id, check) {
    if (!playingVideo) {
        clearPopup();
        // be check jei spaudi backPage nepanaikina rodyklytes ir icon
        if (check) {
            getDataImg(loc, id);
        }
        document.getElementById('btnDescription').innerHTML = "Play video";
        photoVideoSwap.className = "fas fa-film fa-2x";
        photoVideoBtn.setAttribute("onclick", "playVideo(" + loc + "," + id + ")");
        playingVideo = true;
    }
}