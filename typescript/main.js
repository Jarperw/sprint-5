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
var fondo = document.getElementById("fondo");
var fondoIzquierda = document.getElementById("fondoIzquierda");
var fondoDerecha = document.getElementById("fondoDerecha");
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
    fondoPantalla();
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
        var icono = data.weather[0].icon;
        tiempo.innerHTML = "<img src=\"./img/svg/".concat(icono, ".svg\" class=\"w-75\"> | ").concat(Math.floor(temperatura), " \u00BAC");
    });
    fondoPantalla();
});
var random = function (array) {
    return Math.floor(Math.random() * array.length);
};
//ejercicio 6
var fondoPantalla = function () {
    var _a, _b;
    var fondos = ["fondo1", "fondo2", "fondo3", "fondo4", "fondo5", "fondo6"];
    var mBlack = ["black", "none"];
    var num = random(fondos);
    var num2 = random(mBlack);
    fondo === null || fondo === void 0 ? void 0 : fondo.setAttribute('src', "./img/fondos/".concat(fondos[num], ".svg"));
    fondoIzquierda === null || fondoIzquierda === void 0 ? void 0 : fondoIzquierda.setAttribute('src', "./img/fondos/izquierda/".concat(fondos[num], ".svg"));
    fondoDerecha === null || fondoDerecha === void 0 ? void 0 : fondoDerecha.setAttribute('src', "./img/fondos/derecha/".concat(fondos[num], ".svg"));
    (_a = document.querySelector("body")) === null || _a === void 0 ? void 0 : _a.setAttribute("id", "".concat(mBlack[num2]));
    (_b = document.querySelector(".navbar")) === null || _b === void 0 ? void 0 : _b.setAttribute("id", "".concat(mBlack[num2]));
};
