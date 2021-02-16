function preloadPage() {
    const params = new URLSearchParams(window.location.search);
    let currentMap = params.get('map');

    if (currentMap === "mirage") {
        document.getElementById("mapMainImg").src = "../images/overviews/mirage_overview.webp";
    } else if (currentMap === "inferno") {
        document.getElementById("mapMainImg").src = "../images/overviews/inferno_overview.webp";
    } else {
        document.getElementById("mapMainImg").src = "../images/overviews/inferno_overview.webp";
    }

    // switch (currentMap){
    //     case "mirage":
    // }
    //     document.getElementById("mapMainImg").src = "../images/overviews/inferno_overview.webp";
    // }
}