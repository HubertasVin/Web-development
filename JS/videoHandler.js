"use strict";

let playingVideo = true;

function playVideo(loc, id) {
    // panaikina nuotrauka ir ideda video
    if (playingVideo) {
        clearPopup();
        document.getElementById('iframeContainer').style.display = "block";
        document.getElementById('iframe').src = JSONdata.mirage[loc].smoke[id].videoSrc + "?vq=hd1080&modestbranding=1&autoplay=1&loop=1";
        document.getElementById('btnDescription').innerHTML = "Photo";
        photoVideoSwap.className = "far fa-image fa-2x";
        photoVideoBtn.setAttribute("onclick", "quitVideo(" + loc + "," + id + "," + true + ")");
        playingVideo = false;
    }
}

function quitVideo(loc, id, check) {
    if (!playingVideo) {
        clearPopup();
        document.getElementById('iframeContainer').style.display = "none";
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