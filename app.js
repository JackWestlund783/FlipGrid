'use strict';

// let today = new Date();
// let formatDate = today.toDateString();
// let selectElement = document.getElementById('date');
// selectElement.innerHTML = formatDate;


// init: function () {
//     x = 5;
// }

function myFunction(){

    var entry = document.getElementById("login");
    var user = new Object();
    
    user.name = entry.elements[0].value;
    user.email = entry.elements[1].value;
    user.passWord = entry.elements[2].value;

    //name cannot contain =
    window.location.href = "welcome.html?username=" + encodeURIComponent(user.name) + "?email=" + encodeURIComponent(user.email);
    console.log("clicked");
    //alert("Click detected");
}

function getInput(){
    console.log("input detected");
    
}