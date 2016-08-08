$(function(){

  $("#boton_saludar").click(saludar);

});

function saludar(){
  var nombre = $("#nombre").val();
  $.get("https://evening-basin-93113.herokuapp.com/contact", {name: nombre}, function(data){
    alert(data.saludo);
  });
}
