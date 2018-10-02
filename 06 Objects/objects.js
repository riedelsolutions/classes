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


	var one = {
		name: "Alejandro",
		surname: "Correa",
	}

	var two = {
		name: "Camila",
		surname: "García",
	}

	function returnName(person){

		return person.name;
	}

	console.log(returnName(two));


	function fullName(person){
		return ("Full name: " + person.name + " " + person.surname);
	}

	console.log(fullName(one));


	/*Combinando todo para ver que se puede hacer: */

	var ale = {
		name: "Alejandro",
		surname: "c",
		year: 2018
	};

	var cami = {
		name: "Camila",
		surname: "rie",
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



	var listOfPeople = [ale, cami, juan];
	var VIPlist = [cata, azul];


	function fullName(){
		console.log("Guests: ");
		for(var i = 0; i <= listOfPeople.length - 1; i++){
			console.log("Full name: " + listOfPeople[i].name + " " + listOfPeople[i].surname);
		}


	};




	fullName();


/*Que pasa si tenemos mas de una lista*/


	function fullName2(chosenList){

		console.log("Guests: ");
		for(var i = 0; i <= chosenList.length - 1; i++){
			console.log("Full name: " + chosenList[i].name + " " + chosenList[i].surname);
		}

	}

	fullName2(VIPlist);
	fullName2(listOfPeople);


/*Ahora al imprimirse, hay un problema. Si sólo estás leyendo lo que te devuelve el programa, no sabés cual lista es cuál.
Mejorémoslo: */

	function fullName3(chosenList){
	
		if(chosenList == listOfPeople){
			console.log("Guests: ");
		}else if (chosenList == VIPlist){
			console.log("VIP Guests: ");
		}


		for(var i = 0; i <= chosenList.length - 1; i++){
			console.log("Full name: " + chosenList[i].name + " " + chosenList[i].surname);
		}
	}

	fullName3(VIPlist);
	fullName3(listOfPeople);