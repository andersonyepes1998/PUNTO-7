/*
//seleccionar nodo y elementos.
let NodoPadre = document.querySelector("p");
//crear nuevo nodo o elementos.
let NodoHijo = document.createElement("a");
//creamos un texto para el elemento nuevo
let texto = document.createTextNode("dar click aqui");

//modificar etiqueta agregando un atributo
NodoHijo.setAttribute("href","https://facebook.com");
NodoHijo.setAttribute("target","_blank");

//agregar texto al nuevo elemento
NodoHijo.appendChild(texto);
//agregar el nuevo elemento a la etiqueta p
NodoPadre.appendChild(NodoHijo);
//eliminar un nodo
NodoPadre.removeChild(NodoHijo);

//evento add
let titulo= document.querySelector(".titulo");
titulo.addEventListener("click", function(){
    alert("HOLA MEDELLIN COLOMBIA");
});
*/

//PRIMER EJERCICIO
let elementoh1 = document.createElement("h1");

elementoh1.innerText = "My presentation is:";

elementoh1.setAttribute("class","My presentation is:");

console.log(elementoh1);
let diseño = document.querySelector("div").insertAdjacentElement("beforebegin",elementoh1);