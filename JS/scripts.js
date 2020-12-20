function showImageDiv(imgShowId) {
    let imgShowDiv = document.getElementById(imgShowId);
    let mapIconFooter = document.getElementById("mapIconList");
    imgShowDiv.style.visibility = "visible";
    document.body.style.overflow = "hidden";
    mapIconFooter.style.zIndex = "0";

    // window.addEventListener("keydown", event => {
    //     if (event.key === ',') {
    //         hideImageDiv(imgShowId);
    //     }
    // }, false);
    //hideImageDiv(imgShowId);
}

function hideImageDiv(imgShowId) {
    let imgShowDiv = document.getElementById(imgShowId);
    let mapIconFooter = document.getElementById("mapIconList");
    imgShowDiv.style.visibility = "hidden";
    document.body.style.overflow = "visible";
    mapIconFooter.style.zIndex = "1";
}