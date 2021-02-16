function getData() {
    fetch("../JSON/mirage_smokes.json")
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            console.log(data);
            document.getElementById('testJSON').innerHTML = data.number;
        });
}