"use strict";

//VARIABLES GLOBALES
const URL1: string = "https://icanhazdadjoke.com/";
const URL2: string = "https://api.chucknorris.io/jokes/random";
const reportJokes: any[] = [];
let encuesta: boolean = false;
let value: string;
let puntos: number;
let fecha: any;

const joke: any = document.getElementById('joke');
const displayScore: any = document.getElementById('score');
const tiempo = document.getElementById('tiempo');

// eventos
document.getElementById('1')!.onclick = reporte;
document.getElementById('2')!.onclick = reporte;
document.getElementById('3')!.onclick = reporte;


//EJERCICIO 1 (EJERCICIO 5)
document.getElementById("nextJoke")?.addEventListener("click", () => {
    let urls: string[] = [URL1, URL2];
    let num:number = random(urls);

    //modificacion del ejercicio 3
    if(encuesta) arrayReporte(puntos, fecha.toISOString());

    fetch(urls[num], { headers: { "Accept": "application/json" } })
        .then(resp => resp.json())
        .then(chiste => {
            if (num == 0) {
                value = chiste.joke;
                return mostrarChiste(chiste.joke);
            } else {
                value = chiste.value;
                return mostrarChiste(chiste.value);
            }
        })
})

//EJERCICIO 2
const mostrarChiste = (chiste: string) => {
    joke!.innerHTML = `"${chiste}"`;
    displayScore.setAttribute('class','d-block');
}

//EJERCICIO 3
function reporte(this: any) {
    puntos = Number(this.getAttribute('id'));
    fecha = new Date();
    encuesta = true;
}

const arrayReporte = (score: number, date: any) => {
    let encontrado: boolean = false;
    let resp: any;

    // para no duplicar chiste se suma score y se añade fecha de ultima valoracion
    if( resp = reportJokes.find(valor => valor.joke == value)){
        resp.score += score;
        resp.date = date;
        encontrado = true;
    }
    
    if(!encontrado){
        reportJokes.push({
            joke: value,
            score,
            date
        });
    }
    console.clear();
    console.log('reporte:', reportJokes);
    encuesta = false;
}

// EJERCICIO 4
window.addEventListener("load", () => {
    let ciudad: string = 'Barcelona';
    const URL: string = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=0d0a35ab5ca447a9fc9e469982a393de&units=metric&lang=es`;

    fetch(URL)
        .then(result => result.json())
        .then(data => {
            let temperatura = data.main.temp;
            let descripcion = data.weather[0].description;
            tiempo!.innerHTML = `${descripcion} | ${Math.floor(temperatura)} º`;
        })
});

const random = (array: string[] ) => {
    return Math.floor(Math.random() * array.length)
}