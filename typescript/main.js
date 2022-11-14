"use strict";
var _a;
//varibales globales
var URL1 = "https://icanhazdadjoke.com/";
var joke = document.getElementById('joke');
var displayScore = document.getElementById('score');
var reportJokes = [];
var encuesta = false;
var value;
// eventos
document.getElementById('1').onclick = reporte;
document.getElementById('2').onclick = reporte;
document.getElementById('3').onclick = reporte;
//EJERCICIO 1
(_a = document.getElementById("nextJoke")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    if (!encuesta) {
        fetch(URL1, { headers: { "Accept": "application/json" } })
            .then(function (resp) { return resp.json(); })
            .then(function (chiste) {
            value = chiste.joke;
            mostrarChiste(chiste.joke);
        });
    }
});
//EJERCICIO 2
var mostrarChiste = function (chiste) {
    joke.innerHTML = "\"".concat(chiste, "\"");
    // displayScore.setAttribute ('class','d-block');
    mostrarEncuesta('d-block');
    valorEncuesta();
};
//EJERCICIO 3
function reporte() {
    if (encuesta) {
        var puntos = Number(this.getAttribute('id'));
        var fecha = new Date();
        reportJokes.push({
            joke: value,
            score: puntos,
            date: fecha.toISOString()
        });
        console.log('reporte:', reportJokes);
        valorEncuesta();
        borrar();
    }
}
var borrar = function () {
    joke.innerHTML = "";
    // displayScore.setAttribute ('class','d-none');
    mostrarEncuesta('d-none');
};
var mostrarEncuesta = function (valor) { return displayScore.setAttribute('class', valor); };
var valorEncuesta = function () { return encuesta = !encuesta; };
