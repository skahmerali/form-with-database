// const { json } = require("body-parser");
const url ="https://signup-database.herokuapp.com/"
// const url = "http://localhost:3000";

function abc() {
    var obj = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        number: document.getElementById("number").value,
        gender: document.getElementById("gender").value
    }
    console.log(obj);
    const Http = new XMLHttpRequest();
    Http.open("POST", url + "/signup");
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify(obj));
    Http.onreadystatechange = (e) => {
        if (Http.onreadystate === 4) {
            let jsonRes = json.parse(Http.responseText)
            console.log(jsonRes);
            if (jsonRes===200){
                alert(jsonRes.message);

            }
            else{jsonRes.message}
        }
    }
    return false
}