console.log("cześć!");

let button = document.querySelector(".button");
let body = document.querySelector(".body");


button.addEventListener("click", () => {
    body.classList.toggle("changebody");
    button.innerText = body.classList.contains("changebody") ? "Wyłącz jasny motyw" : "Włącz jasny motyw";
});