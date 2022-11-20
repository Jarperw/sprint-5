"use strict";
var _a;
//VARIABLES GLOBALES
var URL1 = "https://icanhazdadjoke.com/";
var URL2 = "https://api.chucknorris.io/jokes/random";
var reportJokes = [];
var encuesta = false;
var value;
var puntos;
var fecha;
var joke = document.getElementById('joke');
var displayScore = document.getElementById('score');
var tiempo = document.getElementById('tiempo');
// eventos
document.getElementById('1').onclick = reporte;
document.getElementById('2').onclick = reporte;
document.getElementById('3').onclick = reporte;
//EJERCICIO 1 (EJERCICIO 5)
(_a = document.getElementById("nextJoke")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var urls = [URL1, URL2];
    var num = random(urls);
    //modificacion del ejercicio 3
    if (encuesta)
        arrayReporte(puntos, fecha.toISOString());
    fetch(urls[num], { headers: { "Accept": "application/json" } })
        .then(function (resp) { return resp.json(); })
        .then(function (chiste) {
        if (num == 0) {
            value = chiste.joke;
            return mostrarChiste(chiste.joke);
        }
        else {
            value = chiste.value;
            return mostrarChiste(chiste.value);
        }
    });
});
//EJERCICIO 2
var mostrarChiste = function (chiste) {
    joke.innerHTML = "\"".concat(chiste, "\"");
    displayScore.setAttribute('class', 'd-block');
};
//EJERCICIO 3
function reporte() {
    puntos = Number(this.getAttribute('id'));
    fecha = new Date();
    encuesta = true;
}
var arrayReporte = function (score, date) {
    var encontrado = false;
    var resp;
    // para no duplicar chiste se suma score y se añade fecha de ultima valoracion
    if (resp = reportJokes.find(function (valor) { return valor.joke == value; })) {
        resp.score += score;
        resp.date = date;
        encontrado = true;
    }
    if (!encontrado) {
        reportJokes.push({
            joke: value,
            score: score,
            date: date
        });
    }
    console.clear();
    console.log('reporte:', reportJokes);
    encuesta = false;
};
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
var random = function (array) {
    return Math.floor(Math.random() * array.length);
};
