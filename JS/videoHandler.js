"use strict";

let playingVideo = true;

function playVideo(loc, id) {
    photoVideoBtn.style.visibility = "visible";
    imgBackIcon.style.visibility = "visible";
    // panaikina nuotrauka ir ideda video
    if (playingVideo) {
        playingVideo = false;
        clearPopup();
        document.getElementById('iframe').innerHTML = JSONdata.mirage[loc].smokes[id].videoSrc;
        document.getElementById('btnDescription').innerHTML = "Photo";
        photoVideoSwap.className = "far fa-image fa-2x";
        photoVideoBtn.setAttribute("onclick", "quitVideo(" + loc + "," + id + ")");
    }
}

function quitVideo(loc, id) {
    if (!playingVideo) {
        playingVideo = true;
        clearPopup();
        getDataImg(loc, id);
        document.getElementById('btnDescription').innerHTML = "Play video";
        photoVideoSwap.className = "fas fa-film fa-2x";
        photoVideoBtn.setAttribute("onclick", "playVideo(" + loc + "," + id + ")");
    }
}