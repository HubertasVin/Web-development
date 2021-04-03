"use strict";

// let videoSrc = document.getElementById('videoSrc');
// let barCompl = document.querySelector('.progressCompl');
// let controlBtn = document.getElementById('play-pause');

function playVideo() {
    // panaikina nuotrauka ir ideda video
    clearPopup();
    document.getElementById('iframe').innerHTML = "<img id='imgSrc'/><iframe id='iframe' src='https://www.youtube.com/embed/zInlDBuwu4k?loop=1&modestbranding=1' frameborder='0' allowfullscreen></iframe>";
}

// function togglePlayPause() {
//     if (videoSrc.paused) {
//         controlBtn.className = 'pause';
//         videoSrc.play();
//     } else {
//         controlBtn.className = 'play';
//         videoSrc.pause();
//     }
// }

// videoSrc.addEventListener('timeupdate', function(){
//     let barPos = videoSrc.currentTime / videoSrc.duration;
//     barCompl.style.width = barPos * 100 + "%";
//     if (videoSrc.ended) {
//         controlBtn.className = 'play';
//     }
// })