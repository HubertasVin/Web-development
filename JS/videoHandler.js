"use strict";

let playingVideo = true;

function playVideo(loc, number) {
    // panaikina nuotrauka ir ideda video
    if (playingVideo) {
        clearPopup();
        document.getElementById('photoVideoBtn').style.visibility = "visible";
        document.getElementById('iframeContainer').style.display = "block";
        document.getElementById('iframe').src = "https://www.youtube.com/embed/" + map[loc][number].videoSrc + "?vq=hd1080&modestbranding=1&autoplay=1&loop=1";
        document.getElementById('btnDescription').innerHTML = "Photo";
        photoVideoSwap.className = "far fa-image fa-2x";
        photoVideoBtn.setAttribute("onclick", "quitVideo(" + loc + "," + number + "," + true + ")");
        playingVideo = false;
    }
}

function quitVideo(loc, number, check) {
    if (!playingVideo) {
        clearPopup();
        document.getElementById('iframeContainer').style.display = "none";
        // be check jei spaudi backPage nepanaikina rodyklytes ir icon
        if (check) {
            getDataImg(loc, number);
        }
        document.getElementById('btnDescription').innerHTML = "Play video";
        photoVideoSwap.className = "fas fa-film fa-2x";
        photoVideoBtn.setAttribute("onclick", "playVideo(" + loc + "," + number + ")");
        playingVideo = true;
    }
}