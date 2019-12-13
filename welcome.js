'use strict'

window.onload = function () {
    var url = document.location.href,
    params = url.split('?')[1].split('&'),
    data = {}, temp;

    for (var i = 0, len = params.length; i < len; i++) {
        temp = params[i].split('=');
        data[temp[0]] = temp[1];
    }

    document.getElementById('name').innerHTML = data.username;
}