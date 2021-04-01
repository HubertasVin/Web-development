"use strict";

let videoSrc = document.getElementById('videoSrc');
let barCompl = document.querySelector('.progressCompl');
let controlBtn = document.getElementById('play-pause');

function playVideo() {
    img.remove();
    document.getElementById('videoSrc').style.visibility = "visible";
    document.getElementById('smokeInstructions').remove();
    document.getElementById('nextImg').remove();
    document.getElementById('prevImg').remove();
}

function togglePlayPause() {
    if (videoSrc.paused) {
        controlBtn.className = 'pause';
        videoSrc.play();
    } else {
        controlBtn.className = 'play';
        videoSrc.pause();
    }
}

videoSrc.addEventListener('timeupdate', function(){
    let barPos = videoSrc.currentTime / videoSrc.duration;
    barCompl.style.width = barPos * 100 + "%";
    if (videoSrc.ended) {
        controlBtn.className = 'play';
    }
})