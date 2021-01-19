let images = ['../images/Smokes/Overpass/overpass_monster1_after.jpg', '../images/Smokes/Overpass/overpass_monster1_before1.jpg', '../images/Smokes/Overpass/overpass_monster2_before2.jpg']
let index = 0;

let next = document.getElementById('nextImg');
let prev = document.getElementById('prevImg');
let img = document.getElementById('imgSrc');


function showPopup(popupId) {
    document.getElementById(popupId).style.visibility = "visible";
    document.getElementById(popupId).style.opacity = "1";
    // document.getElementById('imgSrc').style.visibility = "visible";
    document.body.style.overflow = "hidden";
}

function hidePopup(popupId) {
    document.getElementById(popupId).style.visibility = "hidden";
    document.getElementById(popupId).style.opacity = "0";
    // document.getElementById('videoSrc').style.visibility = "hidden";
    document.body.style.overflow = "visible";
}

// Nuotraukos isjungimas, paspaudus Escape mygtuka
document.addEventListener("keydown", event => {
        if (event.key === 'Escape' || document.body.style.visibility === "hidden") {
            hidePopup('OverpassMonsterSmoke1');
        }
}, false);

// Nuotrauku galerijos next ir previous mygtukai
function nextImage() {
    if(index < images.length - 1) {
        index++;
    } else {
        index = 0;
    }
    img.src = images[index];
}


function previousImage() {
    if(index > 0) {
        index--;
    } else {
        index = images.length - 1;
    }
    img.src = images[index];
}


// function playVideo() {
//     img.remove();
//     document.getElementById('videoSrc').style.visibility = "visible";
//     document.getElementById('imgSrc').style.visibility = "hidden";
// }