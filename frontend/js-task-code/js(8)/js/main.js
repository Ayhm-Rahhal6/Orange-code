var button = document.getElementById("sub");
button.setAttribute("disabled", "");

var form = document.querySelector("form");
var inputs = document.querySelectorAll("input");

var usname = document.getElementById("uname");
var nameLabel = document.createElement("label");
var nameLabelText = document.createTextNode("User Name: ");
nameLabel.appendChild(nameLabelText);
usname.parentNode.insertBefore(nameLabel, usname);
usname.setAttribute("required", "");

var password = document.getElementById("pass");
var passwordLabel = document.createElement("label");
var passwordLabelText = document.createTextNode("Password: ");
passwordLabel.appendChild(passwordLabelText);
password.parentNode.insertBefore(passwordLabel, password);

var cPassword = document.getElementById("cpass");
var cPasswordLabel = document.createElement("label");
var cPasswordLabelText = document.createTextNode("Confirm Password: ");
cPasswordLabel.appendChild(cPasswordLabelText);
cPassword.parentNode.insertBefore(cPasswordLabel, cPassword);
cPassword.setAttribute("required", "");

form.addEventListener("submit", function(e) {
    var errorMessage = document.getElementById("message");
    if (password.value !== cPassword.value) {
        e.preventDefault();
        errorMessage.innerHTML = "Passwords do not match";
        errorMessage.style.color = "red";
    } else {
        e.preventDefault();
        errorMessage.innerHTML = "Registration Succesfull";
        errorMessage.style.color = "green";
    }
});

inputs.forEach(input => {
    input.addEventListener("input", function(e){
        if(usname.value !== "" && password.value !== "" && cPassword.value !== ""){
            button.removeAttribute("disabled");
        } else {
            button.setAttribute("disabled", "");
        }

    })
});
