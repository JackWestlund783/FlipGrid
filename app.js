'use strict';

// let today = new Date();
// let formatDate = today.toDateString();
// let selectElement = document.getElementById('date');
// selectElement.innerHTML = formatDate;


// init: function () {
//     x = 5;
// }

function myFunction(){

    var navigate = true;
    var entry = document.getElementById("login");
    var user = new Object();
    
    user.name = entry.elements[0].value;
    user.email = entry.elements[1].value;
    user.passWord = entry.elements[2].value;

    //no empty fields
    if (user.name == "" || user.email == "" || user.passWord == "") {
        alert("Please complete all fields");
        navigate = false;
    }
    else {
        //basic email check
        if (!checkEmail(user.email)) {
            alert("Email is invalid");
            navigate = false;
        }

        if (!checkPassword(user.passWord)) {
            alert("Password is invalid\nMust contain an uppercase and lowercase letter and a number");
            navigate = false;
        }
    }
    //name cannot contain =
    if (navigate) {
        window.location.href = "welcome.html?username=" + encodeURIComponent(user.name) + "?email=" + encodeURIComponent(user.email);
    }
    //console.log("clicked");
    //alert("Click detected");
}

function getInput(){
    console.log("input detected");
    
}

//checks if an @ sign exists in the middle of the email. Not fully checking all cases
function checkEmail(email) {
    var index = email.indexOf('@');
    
    if (index > 0 && index < email.length) {
        return true;
    }
    else {
        return false;
    }
}

//ensures there is at least one uppercase letter, one lowercase letter, and a number
function checkPassword(password) {
    if (!(password.toUpperCase() == password) && !(password.toLowerCase() == password)) {
        return true;
    }
    else {
        return false;
    }
}