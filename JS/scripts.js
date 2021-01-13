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

