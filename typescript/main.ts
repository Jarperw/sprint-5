"use strict";

//VARIABLES GLOBALES
const URL1: string = "https://icanhazdadjoke.com/";
const URL2: string = "https://api.chucknorris.io/jokes/random";
const joke: any = document.getElementById('joke');
const displayScore: any = document.getElementById('score');
const tiempo = document.getElementById('tiempo');
const reportJokes: any[] = [];
let encuesta: boolean = false;
let value: string;

// eventos
document.getElementById('1')!.onclick = reporte;
document.getElementById('2')!.onclick = reporte;
document.getElementById('3')!.onclick = reporte;


//EJERCICIO 1 (EJERCICIO 5)
document.getElementById("nextJoke")?.addEventListener("click", () => {
    if (!encuesta) {
        let urls: string[] = [URL1, URL2];
        let num:number = Math.floor(Math.random() * urls.length);

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
    }
})

//EJERCICIO 2
const mostrarChiste = (chiste: string) => {
    joke!.innerHTML = `"${chiste}"`;
    mostrarEncuesta('d-block');
    valorEncuesta();
}

//EJERCICIO 3
function reporte(this: any) {
    if (encuesta) {
        const puntos: number = Number(this.getAttribute('id'));
        const fecha: any = new Date();

        reportJokes.push({
            joke: value,
            score: puntos,
            date: fecha.toISOString()
        });
        console.clear();
        console.log('reporte:', reportJokes);
        valorEncuesta();
        borrar();
    }
}

const borrar = () => {
    joke.innerHTML = "";
    mostrarEncuesta('d-none');
}

const mostrarEncuesta = (valor: string) => displayScore.setAttribute('class', valor);

const valorEncuesta = () => encuesta = !encuesta;

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
