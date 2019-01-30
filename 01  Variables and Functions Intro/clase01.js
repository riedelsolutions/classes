
//VARIABLES

var ocho = 8;
var name = "Alejandro";
var $estaVariable = 0;
var _estaVariable = 10;
var estaVariable = 100;

name = "Camila";
const number = 3;



// Declarar información con 'var' hace que dicha info viva en el scope global.
//Declarar información con 'let' hace que dicha info sea dependiente de su scope.
// 'const' crea una constante 

/*Mercadolibre cobra $100 por venta
 * Para calcular el precio que le tendrías que poner a tu publicación, declarás una constante (porque no cambia nunca el recargo)
 * const recargoML = 100;
function agregaCien (){
  ocho + recargoML;
}*/




//EJEMPLO LET
function a (){
  //let y = 10;  'y' es una variable let, y está dentro del scope de la función a.
  var y = 10;
  let z = 10;
}

console.log (y);
console.log(z);



//Fin del ejemplo let



//FUNCIONES

/*Las funciones previenen tener que copiar y pegar código,
 *  que es lo que se trata de evitar al programar.
 * Al crear una función se crea una acción a la que se 
 * puede llamar.
  */


var name = "Cami";
var nameTwo = "Ale";
var otro = "Vanesa";

var age = 10;
var ageTwo = 15;

console.log("Hello World" + name);
console.log ("Hello World" + nameTwo);
console.log("Hello World" + otro);
// ^ esto podría ser una función 
console.log(age + ageTwo);
// ^Esto podría ser otra

function nombre(){
  console.log(name);
}

function edad(){
  console.log(age);
}

function example (){
  console.log("Hello World");
}

example();


// ... más codigo

example();





//ARRAYS
//Indexados en 0
var aComprar = ["manzana", "banana", "naranja"];

aComprar.length;


//copiar acá

function largo(){
  var aComprar = ["manzana", "banana", "naranja"];

  console.log(aComprar.length);
}

largo();
largo();





//COMENTARIOS
//Una línea
/* */



