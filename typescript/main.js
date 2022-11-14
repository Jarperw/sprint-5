"use strict";
var _a;
//varibales globales
var URL1 = "https://icanhazdadjoke.com/";
var joke = document.getElementById('joke');
var displayScore = document.getElementById('score');
var tiempo = document.getElementById('tiempo');
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
    mostrarEncuesta('d-none');
};
var mostrarEncuesta = function (valor) { return displayScore.setAttribute('class', valor); };
var valorEncuesta = function () { return encuesta = !encuesta; };
// EJERCICIO 4
window.addEventListener("load", function () {
    var ciudad = 'Barcelona';
    var URL = "https://api.openweathermap.org/data/2.5/weather?q=".concat(ciudad, "&appid=0d0a35ab5ca447a9fc9e469982a393de&units=metric&lang=es");
    fetch(URL)
        .then(function (result) { return result.json(); })
        .then(function (data) {
        var temperatura = data.main.temp;
        var descripcion = data.weather[0].description;
        tiempo.innerHTML = "".concat(descripcion, " | ").concat(Math.floor(temperatura), " \u00BA");
    });
});
