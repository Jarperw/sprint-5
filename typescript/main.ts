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
const fondo = document.getElementById("fondo");
const fondoIzquierda = document.getElementById("fondoIzquierda");
const fondoDerecha = document.getElementById("fondoDerecha");

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
    fondoPantalla();
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
            let temperatura: any = data.main.temp;
            let icono: any = data.weather[0].icon;
            tiempo!.innerHTML = `<img src="./img/svg/${icono}.svg" class="w-75"> | ${Math.floor(temperatura)} ºC`;
        })

    fondoPantalla();
});

const random = (array: string[] ) => {
    return Math.floor(Math.random() * array.length)
}

//ejercicio 6
const fondoPantalla = () => {
    const fondos: string[] = ["fondo1", "fondo2", "fondo3", "fondo4", "fondo5", "fondo6"];
    const mBlack: string[] = ["black", "none"];
    let num: number = random(fondos);
    // let num2: number = random(mBlack);

    fondo?.setAttribute('src', `./img/fondos/${fondos[num]}.svg`);
    fondoIzquierda?.setAttribute('src', `./img/fondos/izquierda/${fondos[num]}.svg`);
    fondoDerecha?.setAttribute('src', `./img/fondos/derecha/${fondos[num]}.svg`);

    // document.querySelector("body")?.setAttribute("id", `${mBlack[num2]}`);
    // document.querySelector(".navbar")?.setAttribute("id", `${mBlack[num2]}`);
}