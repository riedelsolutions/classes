/*
Javascript es un lenguaje de programación interpretado, orientado a objetos usado para crear applicaciones web
y/o interactividad mínima en un sitio estático.

Orientado a objetos: Usa objetos principalmente para la organización y uso de datos en el programa.

Lenguaje interpretado: No necesita ser compilado = interpretado antes de que corra el programa.

Lenguaje compilado: Necesita ser, como dice su nombre, compilado antes de funcionar. Ejemplo: Java.
IDEs como NetBeans o IntelliJ lo compilan, y luego corren.

IDEs = Integrated Development Environment. Mayormente usado para lenguajes compilados o projectos
mixtos y complejos. Software que usualmente incluye editor de texto y herramientas que ayudan a
automatizar el proceso de creación de programas, como por ejemplo debuggers.

Debugging = Arreglar bugs, errores de código.
Debuggers = Software que ayuda a corregir errores de código.


Variables -> Números, strings, objetos, booleanos, undefined, null.
*/
var diez = 10; //0.5 floating points
var texto = "A string";
var booleano = true; //or false
var sinDefinir = undefined;
var thisIsNull = null;
var objeto = {
	name: "Camila",
	age: 19,
	details: {
		address: "NN",
		email: "riedelgcamila@gmail.com",
		contact: 111
	}
}

var objeto2 = new Object();
objeto2.name = "Camila";
objeto2.age = 99;
objeto2.details = new Object();
objeto2.details.address = "NN";
objeto2.details.email = "riedelgcamila@gmail.com";
objeto2.details.contact = 111;

console.log(objeto);
console.log(objeto.name);
console.log(objeto.details.contact);

console.log(objeto2);
console.log(objeto2.name);
console.log(objeto2.details.contact);


var nuevoObj = new Object();
nuevoObj.propiedad1 = 'Hola';
myCar.dia = 'Martes';
myCar.año = 2002;

//Undefined vs null

//Undefined aparece cuando llamás o utilizás una variable declarada pero sin un valor asignado.
var a;
console.log(a);

var thatIsNull = null;

/*IF/ELSE/ELSEIF*/

if(esto es verdad){
	//pasa esto
}else if (esto es verdad){
	//pasa esto
}else{
	//pasa esto
}

var number = 2;

if(number === 1){
	console.log("numero 1");
}else if(number === 3){
	console.log("numero 3");
}else{
	console.log(number);
}


/*Funciones: Partes de código que pueden ser reutilizadas al ser llamadas.*/

function myFuncion(){
	console.log("myFuncion funciona!");
}

myFuncion();
myFuncion();

var cantDeVeces = 0;

function cuantasVeces(){
	cantDeVeces++;
	console.log("Esta función fue usada " + cantDeVeces + " veces.")
}

cuantasVeces();
cuantasVeces();

//Mejorar. Qué pasa si la función nunca fue usada?
//Qué pasa si la función fue usada una sola vez?

function cuantasVeces(){
	cantDeVeces++;

	if(cantDeVeces>1){
	console.log("Esta función fue usada " + cantDeVeces + " veces.")
	}else if(cantDeVeces === 1){
		console.log("Esta función fue usada " + cantDeVeces + " vez.")
	}else{
	}
}
