//Types of variables. Objects. Functions. Scope. DOM manipulation and events.

//'this' introduction?

/* JAVASCRIPT:

	Lenguaje de programación usado principalmente para aplicaciones web.
	Lenguaje interpretado, no compilado.
	El navegador entiende lo que dice el programa directamente, no necesita compilarse para que
	lo lea.



 VARIABLES:

	Contienen información que puede ser usada y manipulada por el programa que escribas.
	
	Tipos de variables: números, strings, booleanos, arrays, objetos, símbolos.

	Se declaran con 'var' + nombre + = + valor.

	Ej.

	var num = 4;

	var num2 = 4.5;

	var hello  = "World";

	var isIt = true;

	var list = ["a", 54, "shhh", isIt];

	var person = {

		name: "x",

		surname: "y",

		alive: true
	}
	
	const mySymbol = Symbol();



FUNCIONES:

	Partes de código que pueden ser invocadas una y otra vez. Pueden pasar parámetros o no,
	si los pasan casi siempre deben ser completados.

	Cada función crea su nuevo scope.
	
	function nameOfTheFunction(parameter1, parameter2){
		//Código
	}


	Invocando la función:

	nameOfTheFunction(parameterValue, otherParameterValue);


	En algunos casos, se puede hacer default a los parametros si no se los completa.


	Ejemplo:

	function fullName(name = "NoName", surname = "NN"){
		
		let nameInFull = name + " " + surname;

		return nameInFull;
	}

	fullName(); //Returns "NoName NN"


*/