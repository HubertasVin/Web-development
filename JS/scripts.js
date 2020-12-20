function showImageDiv(imgShowId) {
    let imgShowDiv = document.getElementById(imgShowId);
    let mapIconFooter = document.getElementById("mapIconList");
    imgShowDiv.style.visibility = "visible";
    document.body.style.overflow = "hidden";
    mapIconFooter.style.zIndex = "0";
}

function hideImageDiv(imgShowId) {
    let imgShowDiv = document.getElementById(imgShowId);
    let mapIconFooter = document.getElementById("mapIconList");
    imgShowDiv.style.visibility = "hidden";
    document.body.style.overflow = "visible";
    mapIconFooter.style.zIndex = "1";
}

// Nuotraukos isjungimas, paspaudus Escape mygtuka
window.addEventListener("keydown", event => {
        if (event.key === 'Escape' || document.body.style.visibility === "hidden") {
            hideImageDiv('OverpassMonsterSmoke1');
        }
}, false);