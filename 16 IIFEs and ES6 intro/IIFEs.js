var iife = (function(){
	console.log("Mi IIFE/self-invoking function/función anda!");
})();

iffe; //Tienen su propio contexto, se ejecuta esa instancia,
//Y la información no existe fuera de ese scope.


var iifeIncomplete = (function(){
	var name = "Jose";
	console.log(name);
})();

iffeIncomplete;

//Correcta:

var correctIIFE = (function(){
	
	return "Mi IIFE/self-invoking function/función anda!";

})();

correctIFFE;


//USO: Para optimizar código con respecto a scoping. podés tener una variable x dentro de una
//IIFE y luego usar x en otro lugar del código, sin preocuparte por el scope.


//Ejemplos

//IIFEs/Immediately invoked functions/Expresión de función ejecutada inmediatamente

function a(){
  //console.log etc
}

a();
informacion();

var nombre = "camila";

var iife = (function(){
  	var nombre = "alejandro"
  	console.log("Mi IIFE/self-invoking function/función anda!");
})();

iife;

//Guarda RAM comparado con esto:
var obj = {
  name : "a",
  fun: function (){
    console.log("hola");
  }
}

obj.fun();

//Resumen: Ayuda con scoping de variables y guarda RAM y espacio.
