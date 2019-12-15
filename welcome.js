'use strict'

window.onload = function () {
    var url = document.location.href;
    var username = url.split('?')[1].split('=')[1];
    var email = url.split('?')[2].split('=')[1];

    // for (var i = 0, len = params.length; i < len; i++) {
    //     temp = params[i].split('=');
    //     data[temp[0]] = temp[1];
    // }
    

    document.getElementById('name').innerHTML = decodeURIComponent(username + "!");
    document.getElementById('email').innerHTML = decodeURIComponent(email);
}