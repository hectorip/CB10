
$(function(){

        // mi codigo aqui
    var titulo = $("#tituloPrincipal");

    titulo.text("Queso Roñoso con jQuery");
    var boton = $("#boton-accion");

    boton.click(function(boton){
        var titulo = $("#tituloPrincipal");
        // titulo.css("color", "green");
        titulo.fadeToggle(2000);
    });

});


/********************/

// $(funcionDeEntrada);

// function funcionDeEntrada(){
//     // mi codigo aqui
// }