function getData() {
    fetch("../JSON/mirage_smokes.json")
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            console.log(data);
            document.getElementById('testJSON').innerHTML = data.map[0].mirage[0].bBench[0].numberOfSmokes;
        });
}