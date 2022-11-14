"use strict";

const URL1: string = "https://icanhazdadjoke.com/";

document.getElementById("nextJoke")?.addEventListener("click", ()=>{
    fetch(URL1, {headers: {"Accept": "application/json" }})
        .then( resp => resp.json())
        .then( chiste => console.log(chiste.joke))
})
