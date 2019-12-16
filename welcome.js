'use strict'

window.onload = function () {
    var url = document.location.href;
    var username = url.split('?')[1].split('=')[1];
    var email = url.split('?')[2].split('=')[1];

    document.getElementById('name').innerHTML = decodeURIComponent(username + "!");
    document.getElementById('email').innerHTML = decodeURIComponent(email);
}