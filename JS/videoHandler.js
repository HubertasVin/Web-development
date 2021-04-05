"use strict";

let playingVideo = true;
let closingVideo = false;

function playVideo(loc, id) {
    // panaikina nuotrauka ir ideda video
    if (playingVideo) {
        playingVideo = false;
        closingVideo = true;
        clearPopup();
        document.getElementById('iframe').innerHTML = "<iframe id='iframe' src='https://www.youtube.com/embed/zInlDBuwu4k?loop=1&modestbranding=1' frameborder='0' allowfullscreen></iframe>";
        photoVideoSwap.className = "far fa-image fa-2x";
        photoVideoBtn.setAttribute("onclick", "quitVideo(" + loc + "," + id + ")");
    }
}

function quitVideo(loc, id) {
    if (closingVideo) {
        playingVideo = true;
        closingVideo = false;
        clearPopup();
        getDataImg(loc, id);
        photoVideoSwap.className = "fas fa-film fa-2x";
        photoVideoBtn.setAttribute("onclick", "playVideo(" + loc + "," + id + ")");
    }
}