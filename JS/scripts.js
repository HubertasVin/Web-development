let images = ['../images/Smokes/Overpass/overpass_monster1_after.jpg', '../images/Smokes/overpass_monster1_before1.jpg', '../images/Smokes/Overpass/overpass_monster1_before2.jpg']
let index = 0;

let next = document.getElementById('nextImg');
let prev = document.getElementById('prevImg');


function showPopup(popupId) {
    document.getElementById(popupId).style.visibility = "visible";
    document.getElementById(popupId).style.opacity = "1";
    document.body.style.overflow = "hidden";
}

function hidePopup(popupId) {
    document.getElementById(popupId).style.visibility = "hidden";
    document.getElementById(popupId).style.opacity = "0";
    document.body.style.overflow = "visible";
}

// Nuotraukos isjungimas, paspaudus Escape mygtuka
document.addEventListener("keydown", event => {
        if (event.key === 'Escape' || document.body.style.visibility === "hidden") {
            hidePopup('OverpassMonsterSmoke1');
        }
}, false);


next.addEventListener('click', nextImage);

function nextImage() {
    if(index < images.length - 1) {
        for (i = 0; i < 10; i++) {
            document.getElementById('imgSrc').src = images[index++];
        }
    }
}

prev.addEventListener('click', previousImage);

function previousImage() {
    if(index > 0) {
        for (i = 0; i < 10; i++) {
            document.getElementById('imgSrc').src = images[index--];
        }
    }
}