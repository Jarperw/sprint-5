"use strict";

//varibales globales
const URL1: string = "https://icanhazdadjoke.com/";
const joke: any = document.getElementById('joke');
const displayScore: any = document.getElementById('score');
const reportJokes: any[] = [];
let encuesta: boolean = false;
let value: string ;

// eventos
document.getElementById('1')!.onclick = reporte;
document.getElementById('2')!.onclick = reporte;
document.getElementById('3')!.onclick = reporte;


//EJERCICIO 1
document.getElementById("nextJoke")?.addEventListener("click", ()=>{
    if(!encuesta){
        fetch(URL1, {headers: {"Accept": "application/json" }})
        .then( resp => resp.json())
        .then( chiste => {
            value = chiste.joke;
            mostrarChiste(chiste.joke)
        })
    }
})

//EJERCICIO 2
const mostrarChiste = (chiste: string) => {
    joke!.innerHTML = `"${chiste}"`;
    // displayScore.setAttribute ('class','d-block');
    mostrarEncuesta('d-block');
    valorEncuesta();
}

//EJERCICIO 3
function reporte(){
    if(encuesta){
        const puntos:number = Number(this.getAttribute('id'));
        const fecha: any = new Date();    
        
        reportJokes.push({
            joke: value,
            score: puntos,
            date: fecha.toISOString()
        }); 
            
        console.log( 'reporte:', reportJokes);
        valorEncuesta();
        borrar();
    }
}

const borrar = () =>{
    joke.innerHTML = "";
    // displayScore.setAttribute ('class','d-none');
    mostrarEncuesta('d-none');
}

const mostrarEncuesta = (valor:string) => displayScore.setAttribute('class',valor);

const valorEncuesta = () => encuesta = !encuesta;
