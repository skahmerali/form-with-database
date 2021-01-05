const { json } = require("body-parser");

const url = "http://localhost:3000"

function abc() {
    let obj = {
        name: document.getElementById("name").Value,
        email: document.getElementById("email").Value,
        password: document.getElementById("password").Value,
        number: document.getElementById("number").Value,
        gender: document.getElementById("gender").value
    }
    const Http = new XMLHttpRequest();
    Http.open("POST", url + "/signup");
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify(user));
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