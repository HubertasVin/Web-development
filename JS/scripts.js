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