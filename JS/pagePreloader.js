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
    switch (mapToUpdateTo) {
        case "mirage":
            document.getElementById("mapMainImg").src = "../images/overviews/mirage_overview.webp";
            getIconData();
            break;
        case "inferno":
            document.getElementById("mapMainImg").src = "../images/overviews/inferno_overview.webp";
            getIconData();
            break;
        case "overpass":
            document.getElementById("mapMainImg").src = "../images/overviews/overpass_overview.webp";
            break;
        case "dust2":
            document.getElementById("mapMainImg").src = "../images/overviews/dust2_overview.webp";
            break;
        case "cache":
            document.getElementById("mapMainImg").src = "../images/overviews/cache_overview.webp";
            break;
        case "train":
            document.getElementById("mapMainImg").src = "../images/overviews/train_overview.webp";
            break;
        case "nuke":
            document.getElementById("mapMainImg").src = "../images/overviews/nuke_overview.webp";
            break;
        case "vertigo":
            document.getElementById("mapMainImg").src = "../images/overviews/vertigo_overview.webp";
            break;
        default:
            document.getElementById("mapMainImg").src = "../images/overviews/mirage_overview.webp";
            break;
    }

    localStorage.setItem('currentMap', mapToUpdateTo);
}