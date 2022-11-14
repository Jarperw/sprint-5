"use strict";
var _a;
var URL1 = "https://icanhazdadjoke.com/";
(_a = document.getElementById("nextJoke")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    fetch(URL1, { headers: { "Accept": "application/json" } })
        .then(function (resp) { return resp.json(); })
        .then(function (chiste) { return console.log(chiste.joke); });
});
