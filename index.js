/*
Bienvenido/a!!

Te proponemos 10 ejercicios de JS para resolver de forma individual. Si te trabas con alguno, podes continuar con otro de forma independiente. Si corresponde el ejercicio tiene un <div> asignado en el HTML para visualizar el resultado. Algunos te piden solo tocar JS otros, JS + HTML.

Exitos! Happy coding! - Guayerd
*/

/*
Ej - 1: Mostrar con alert el siguiente texto... "Bievenidas/os al Maratón Guayerd"
*/
alert("Bievenidas/os al Maratón Guayerd")
/*
Ej - 2: Completar/arreglar el código para que la función focusHandler() se ejecute cuando el foco este puesto en el input.ej2-nombre. Y cuando el foco se pierda (evento blur), borrar el contenido del div.
*/
const ej2Nombre = document.querySelector(".ej2-nombre");
const ej2Resultado = document.querySelector(".ej2-resultado"); //Se rompe lindo, no?
ej2Nombre.addEventListener("focus", focusHandler);
ej2Resultado.addEventListener("blur", blurHandler);

function focusHandler(e){
  ej2Resultado.innerText += "El input nombre tiene el foco";
}

function blurHandler(e){
  ej2Resultado.innerText += "";
}

/*
Ej - 3: Codear la función mostrarSaludo() para mostrar un saludo desde el div.ej3
*/

const ej3Div = document.querySelector(".ej3-resultado");

function mostrarSaludo(texto){
  ej3Div.innerText += texto;
}

const txtSaludo = "Arranquemos la maratón de código Guayerd! Starting at..." + (new Date()).toLocaleString();
mostrarSaludo(txtSaludo, ej3Div);


/*
Ej - 4: Cuando el usuario haga "click" sobre el botón button.ej4-enviar:
  a) Leer los campos ej4-email, ej4-mensaje
  b) Mostrar el valor de esos campos en div.ej4-resultado
  c) Limpiar los campos asignando "" a los mismos
*/

//Posicionarme en el DOM
  const ej4enviar = document.querySelector(".ej4-enviar");
  const ej4email = document.querySelector(".ej4-email");
  const ej4mensaje = document.querySelector(".ej4-mensaje");
  const divej4resultado = document.querySelector(".ej4-resultado");

// Me suscribo a eventos
ej4enviar.addEventListener("click", clickHandler);

// Funciones
  function clickHandler(){
    divej4resultado.innerText += `Email: ${ej4email.value}    Mesaje: ${ej4mensaje.value} `
    ej4email.value = "";
    ej4mensaje.value = "";
  }
/*
Ej - 5: Crear un div con 2 inputs y un boton "Sumar"
  a) Cuando se clickea en "sumar", sumar ambos valores de inputs y mostrar el resultado en el div.ej5-resultado
  b) Si alguno de los valores ingresados no es numérico (isNaN) informar en div.ej5-resultado "Ingreso erróneo"
*/
let valeInput = document.querySelector(".input");
let ej5resultado = document.querySelector(".ej5-resultado");
valeInput.innerHTML = 
                `<div> 
                  <input class="num1" placeholder="Ingrese un número">
                  <input class="num2" placeholder="Ingrese un número">
                  <button class="ej5-sumar">Sumar</button>
                </div>`;

let num1 = document.querySelector(".num1");
let num2 = document.querySelector(".num2");
let ej5sumar = document.querySelector(".ej5-sumar")


ej5sumar = addEventListener("click", clickHandlerS);

function clickHandlerS(){
  
  if(typeof parseInt(num1.value) === "number" && typeof parseInt(num2.value) === "number"){   
    ej5resultado.innerText = `Resultado: ${parseInt(num1.value) + parseInt(num2.value)}`;
  }else{
    ej5resultado.innerText = "Ingreso erróneo";
  }
}

/*
Ej - 6: Completar los elementos <select> del div.ej6 con los arrays correspondientes. Recorrerlos y crear los <option> según corresponda
*/
const paises = ["Argentina","Bolivia","Brasil","Chile","Colombia","Ecuador","Paraguay","Perú","Uruguay","Venezuela"];
const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
//let divej6 = document.querySelector(".ej6");
let ej6paises = document.querySelector(".ej6-paises");
let ej6diasSemana = document.querySelector(".ej6-diasSemana");

paises.forEach(function(pais){

  ej6paises.innerHTML += `<option>${pais}</option>`
})
diasSemana.forEach(function(dias){

  ej6diasSemana.innerHTML += `<option>${dias}</option>`
})
/*
Ej - 7: Dado el siguiente array, mostrar en el div.ej7-resultado el valor del select cuando el usuario selecciona un valor
*/
const momento = ["Mañana","Tarde","Noche"];
let momentos = document.querySelector(".momentos");
let divej7resultado = document.querySelector("div.ej7-resultado")

momento.forEach(function(moment){
  momentos.innerHTML += `<option class= "opcion">${moment}</option>`;
  divej7resultado.innerText = `${moment}`;
})


/*
Ej - 8: Validar un ingreso de usuario al sistema utilizando localStorage. Mostrar en div.ej8-resultado "OK" o "Error".
  El form esta creado en el div.ej8
*/
localStorage.setItem("password","js2020"); //Este es el password que deben comparar con el ingreso del usuario

/*
Ej - 9: Mostrar en el div.ej9-resultado el listado de usuarios que se encuentra en el array utilizando la siguiente plantilla:

<div class="usuario-contenedor">
  <div class="fila1">
    <span class="title">Nombre:</span><span>valor</span>
    <span class="title">NroCliente:</span><span>valor</span>
  </div>
  <div class="fila2">
    <span class="title">DNI:</span><span>valor</span>
    <span class="title">Fecha Nacimiento:</span><span>valor</span>
  </div>
</div>

*/

const usuarios = [
  {
    nombre: "Juan Perez",
    nroCliente: 1001,
    dni: 88888888,
    fechaNacimiento: "10/10/1988"
  },
  {
    nombre: "Ana Martinez",
    nroCliente: 1010,
    dni: 88888886,
    fechaNacimiento: "10/10/1990"
  },
  {
    nombre: "Susana Gomez",
    nroCliente: 1021,
    dni: 88888889,
    fechaNacimiento: "10/10/1985"
  },
];

/*
Ej - 10: Nuestro cliente es una empresa de marketing que busca generar una base de datos de contactos para poder vender productos. Debemos crear para ellos un formulario de carga con los siguientes datos:

  - Nombre
  - Email
  - Teléfono
  - Horario de contacto (Mañana/Tarde/Noche)
  - Producto (Crédito/Celular/Viajes/Seguros)
  - Botón "Guardar"
  - Botón "Finalizar"

  a) Crear el <form> dentro del elemento div.ej10-form
  b) Crear los elementos input, select, button que correspondan
  c) Cuando el usuario hace "click" en el botón, guardar los datos de contacto en un array
  d) Limpiar los elementos del form
  e) Cada vez que se guarden datos, guardarlos tambien en localStorage
  f) Cuando la página se vuelve a cargar, recuperar el array desde localStorage si es que existe.
  e) Cuando se hace click en "Finalizar", mostrar de forma clara el listado de contactos y sus datos dentro de div.ej10-resultado y limpiar el localStorage.

  Bonus!!
  1) Validar los datos según el tipo.
  2) Todos los datos son requeridos. Evitar cargar datos vacios.
  3) Evitar cargar datos si el email ya existe en el array de contactos.
  4) En todos los casos, informar de forma clara al usuario si hay problemas de validación de datos.
*/
