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
    }
}

function mirageIconLoad(data) {
    let result = "";
    for (let i = 0; i <= 27; i++) {
        result += data.mirage[i];
    }

    document.getElementById('smokeIconHolder').innerHTML = result;

    console.log(Object.keys(data.mirage));
}