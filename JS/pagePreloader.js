"use strict";

function preloadPage() {
    // const params = new URLSearchParams(window.location.search);
    // let currentMap = params.get('map');
    if ('null' === localStorage.getItem('currentMap')) {
        localStorage.setItem('currentMap', 'mirage');
    }
    updatePage(localStorage.getItem('currentMap'));
}

function updatePage(mapToUpdateTo) {
    localStorage.setItem('currentMap', mapToUpdateTo);
    
    if (window.location.pathname != "/html/smokesMapVersion.html") {
        window.location.pathname = "/html/smokesMapVersion.html";
    }
    switch (mapToUpdateTo) {
        case "mirage":
            mapMainImg.src = "../images/overviews/mirage_overview.webp";
            break;
        case "inferno":
            mapMainImg.src = "../images/overviews/inferno_overview.webp";
            break;
        case "overpass":
            mapMainImg.src = "../images/overviews/overpass_overview.webp";
            break;
        case "dust2":
            mapMainImg.src = "../images/overviews/dust2_overview.webp";
            break;
        case "cache":
            mapMainImg.src = "../images/overviews/cache_overview.webp";
            break;
        case "train":
            mapMainImg.src = "../images/overviews/train_overview.webp";
            break;
        case "nuke":
            mapMainImg.src = "../images/overviews/nuke_overview.webp";
            break;
        case "vertigo":
            mapMainImg.src = "../images/overviews/vertigo_overview.webp";
            break;
        default:
            mapMainImg.src = "../images/overviews/mirage_overview.webp";
            break;
    }
    getIconData("smoke");
}