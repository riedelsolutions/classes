/*Los objetos son el último tipo de variable a ver en Javascript. La forma más simple de explicarlos es la siguiente:

Los objectos son un conjunto de pares de valores. Estos pares están formados por un nombre y un valor.

*/

var nuevoObjeto = {
	valor1: 1,
	valor2: "Hola",
	valor3: [2,4,5],
};

/*Mirar la sintaxis. Se nombra la variable como cualquier otra (porque los objectos son variables), pero se guardan las
propiedades de los objetos dentro de llaves, en vez de mandarlos directamente como hacemos con strings o números, y en
vez de usar corchetes como cuando creamos arrays.

Luego, se nombra cada valor y se ponen dos puntos, seguidos del valor que puede ser de cualquier tipo, numeros, strings,
arrays, booleanos, incluso otro objeto dentro de un objeto.*/

var objDentroDeObj = {
	valor: "a",
	valorB: 2,
	valorC: {
		nombre: "conjunto de valores",
		dia: 3,
		horario: 18.5,
	}
};


/*Ojo con los puntos y comas (;) y las comas. Para acordarte cuando usar cual pensá que:
	1) solo las variables al terminar necesitan punto y coma (;) 
	2) Al saber eso, dentro de un objeto nunca vas a tener un punto y coma, porque el parser tiene que seguir leyendo las
	propiedades de ese objeto, no saltar al próximo */


	var personaUno = {
		name: "Alejandro",
		surname: "Correa",
	}

	var personaDos = {
		name: "Camila",
		surname: "García",
	}

	function returnName(person){

		return person.name;
	}

	console.log(returnName(personaDos));


	function fullName(person){
		return ("Full name: " + person.name + " " + person.surname);
	}

	console.log(fullName(personaUno));


	/*Combinando todo para ver que se puede hacer: */

	var ale = {
		name: "Alejandro",
		surname: "Correa",
		year: 2018
	};

	var cami = {
		name: "Camila",
		surname: "García",
		year: 2018
	};

	var juan = {
		name: "Juan",
		surname: "Perez",
		year: 2018
	};


	var cata = {
		name:"Cata",
		surname:"Mango",
		year:2018,
	}

	var azul = {
		name:"Azul",
		surname: "Riedel",
		year: 2018,
	}



	var listaDePersonas = [ale, cami, juan];
	var listaVIP = [cata, azul];


	function fullName(){
		console.log("Invitados: ");
		for(var i = 0; i <= listaDePersonas.length - 1; i++){
			console.log("Full name: " + listaDePersonas[i].name + " " + listaDePersonas[i].surname);
		}


	};



	fullName();


/*Que pasa si tenemos mas de una lista*/


	function fullName2(listaSeleccionada){

		console.log("Invitados: ");
		for(var i = 0; i <= listaSeleccionada.length - 1; i++){
			console.log("Full name: " + listaSeleccionada[i].name + " " + listaSeleccionada[i].surname);
		}

	}

	fullName2(listaVIP);
	fullName2(listaDePersonas);


/*Ahora al imprimirse, hay un problema. Si sólo estás leyendo lo que te devuelve el programa, no sabés cual lista es cuál.
Mejorémoslo: */

	function fullName3(listaSeleccionada){
	
		if(listaSeleccionada == listaDePersonas){
			console.log("Invitados: ");
		}else if (listaSeleccionada == listaVIP){
			console.log("Invitados VIP: ");
		}


		for(var i = 0; i <= listaSeleccionada.length - 1; i++){
			console.log("Full name: " + listaSeleccionada[i].name + " " + listaSeleccionada[i].surname);
		}
	}

	fullName3(listaVIP);
	fullName3(listaDePersonas);