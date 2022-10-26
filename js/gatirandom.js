console.log("hola mundo");

const url = "https://api.thecatapi.com/v1/images/search"

document.getElementById("btn").onclick=reset;


fetch(url)
    .then(res => res.json())
    .then(data =>{
        const img = document.querySelector("#imgRandom")
        img.src = data[0].url;
    } )

function reset(){
fetch(url)
    .then(res => res.json())
    .then(data =>{
        const img = document.querySelector("#imgRandom")
        img.src = data[0].url;
    } )
}