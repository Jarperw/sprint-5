"use strict";

//varibales globales
const URL1: string = "https://icanhazdadjoke.com/";
const joke = document.getElementById('joke');


//EJERCICIO 1
document.getElementById("nextJoke")?.addEventListener("click", ()=>{
    fetch(URL1, {headers: {"Accept": "application/json" }})
        .then( resp => resp.json())
        .then( chiste => mostrarChiste(chiste.joke))
})

//EJERCICIO 2
const mostrarChiste = (chiste) => {
    joke!.innerHTML = `"${chiste}"`;
}