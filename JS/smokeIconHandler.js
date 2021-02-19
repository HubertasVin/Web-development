function getIconData() {
    fetch("../JSON/smokeIcons.json")
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            loadIcons(data);
        });
}

function loadIcons(data) {
    if (localStorage.getItem('currentMap') === "mirage") {
        mirageIconLoad(data);
        console.log("mirage");
    } else {
        document.getElementById('smokeIconHolder').innerHTML = "";
        console.log("not mirage");
    }
}

function mirageIconLoad(data) {
    let result = "";
    for (let i = 0; i < Object.keys(data.mirage).length; i++) {
        result += data.mirage[i];
    }

    document.getElementById('smokeIconHolder').innerHTML = result;
}