
// Buscar del DOM fuardarlo en la variable

// Me espero a que la página cargue
window.addEventListener('DOMContentLoaded', funcionDeEntrada);


function funcionDeEntrada(){
    setTimeout(cambiaTitulo, 3000);
    var boton = document.querySelector("#boton-accion");
    boton.addEventListener('click', cambiarColor);
}


function cambiaTitulo(){
    var titulo = document.querySelector("#tituloPrincipal");
    titulo.innerText = "Queso Roñoso";
}

function cambiarColor(boton){
    var titulo = document.querySelector("#tituloPrincipal");
    titulo.style = "color: green";
}

