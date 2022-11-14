"use strict";
var _a;
//varibales globales
var URL1 = "https://icanhazdadjoke.com/";
var joke = document.getElementById('joke');
//EJERCICIO 1
(_a = document.getElementById("nextJoke")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    fetch(URL1, { headers: { "Accept": "application/json" } })
        .then(function (resp) { return resp.json(); })
        .then(function (chiste) { return mostrarChiste(chiste.joke); });
});
//EJERCICIO 2
var mostrarChiste = function (chiste) {
    joke.innerHTML = "\"".concat(chiste, "\"");
};
