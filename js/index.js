var uname = document.getElementById("uname");
var pwd = document.getElementById("pwd");
var button = document.getElementById("button");

const form = document.getElementById("form2");
console.log(form2);
form.addEventListener("submit", function(event) {
    if (!validate()) {
        event.preventDefault();
    }
})



function validate() {
    let x = uname.value;
    let y = pwd.value;
    if (x == "admin" && y == "12345") {
        return redirect();
    } else {
        alert("invalid user name and password");
        return false;
    }


}

function redirect() {
    return true;
}