function preloadPage() {
    // const params = new URLSearchParams(window.location.search);
    // let currentMap = params.get('map');
    if ('null' === localStorage.getItem('currentMap')) {
        localStorage.setItem('currentMap', 'mirage');
    }
    updatePage(localStorage.getItem('currentMap'));
}

function updatePage(mapToUpdateTo) {
    if (mapToUpdateTo === "mirage") {
        document.getElementById("mapMainImg").src = "../images/overviews/mirage_overview.webp";
    } else if (mapToUpdateTo === "inferno") {
        document.getElementById("mapMainImg").src = "../images/overviews/inferno_overview.webp";
    } else if (mapToUpdateTo === "overpass") {
        document.getElementById("mapMainImg").src = "../images/overviews/overpass_overview.webp";
    } else if (mapToUpdateTo === "dust2") {
        document.getElementById("mapMainImg").src = "../images/overviews/dust2_overview.webp";
    } else if (mapToUpdateTo === "cache") {
        document.getElementById("mapMainImg").src = "../images/overviews/cache_overview.webp";
    } else if (mapToUpdateTo === "train") {
        document.getElementById("mapMainImg").src = "../images/overviews/train_overview.webp";
    } else if (mapToUpdateTo === "nuke") {
        document.getElementById("mapMainImg").src = "../images/overviews/nuke_overview.webp";
    } else if (mapToUpdateTo === "vertigo") {
        document.getElementById("mapMainImg").src = "../images/overviews/vertigo_overview.webp";
    }

    localStorage.setItem('currentMap', mapToUpdateTo);

    getData();
}