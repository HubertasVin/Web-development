function showImageDiv(imgShowId) {
    var imgShowDiv = document.getElementById(imgShowId);
    var mapIconFooter = document.getElementById("mapIconList");
    imgShowDiv.style.visibility = "visible";
    document.body.style.overflow = "hidden";
    mapIconFooter.style.zIndex = "0";
}

function hideImageDiv(imgShowId) {
    var imgShowDiv = document.getElementById(imgShowId);
    imgShowDiv.style.visibility = "hidden";
    document.body.style.overflow = "auto";
    mapIconFooter.style.zIndex = "1";
}