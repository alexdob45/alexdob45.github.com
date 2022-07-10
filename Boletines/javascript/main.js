console.log("Hola mundo desde JavaScript");

//DOM
//querySelectorAll - regresa todos los elementos  / querySelector - regresa un elemento
/*

let links= document.querySelectorAll("a")

links.forEach(function(link){
console.log(link);
});


let celdas= document.querySelectorAll("td")

celdas.forEach(function(td){
td.addEventListener('click',function(){
  console.log(this);
})
});

*/

//Obtener los elementos de la calse .close

let claseClose= document.querySelectorAll(".close")


// Recorrerlos


claseClose.forEach(function(eClose){

  // Agregar un evento click a cada uno de ellos

  eClose.addEventListener('click',function(evento){
    //evento.preventDefault();
    let content = document.querySelector('.content');

    //quitar clase animate__backInDown
    content.classList.remove("animate__backInDown");
    content.classList.remove("animate__animated");


    //agregar clase salida animate__fadeOutUp
    content.classList.add("animate__fadeOutUp");
    content.classList.add("animate__animated");


    setTimeout(function(){
        location.href = "/Boletines";
    },1000);
    //setInterval cada cierto tiempo se ejecutan


    return false;


    //console.log(":)");





  });
});


/*let iconos= document.querySelectorAll("i");

iconos.foreach(function(icono){
  icono.classList.remove("");
  icono.classList.add("");

})*/
