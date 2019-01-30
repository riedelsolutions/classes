/*FUNCIONES*/

/*sintaxis*/

function nombreDeLaFuncion(){''
  
}

/*parámetros*/

function nombreDeLaFuncion(numero1, numero2){
  var suma = numero1 + numero2;
  console.log(suma);
}

nombreDeLaFuncion(2,4);
nombreDeLaFuncion(8,10);

/*Cada vez que se llama a una función se crea una instancia de la función.*/

/* PARÁMETROS
 * Los parámetros son los valores que se pasan adentro de los paréntesis en una función.
 * Cuando se llama a una función, dichos valores deben estar y ser del tipo correcto (por ejemplo, si piden números, se tienen que pasar números o tirará un error).
 * Los parámetros existen sólo mientras la función sea ejecutada esa sola vez.
 * 
 * 
 * INSTANCIAS
 * 
 * Una instancia es una vez en la que una pieza de código corre. Si llamo a una función llamada thisFunction(numero1,numero2), dos veces:
 * 
 * thisFunction(1,4);
 * thisFunction(3,7);
 * 
 * número1 = 1;
 * número2 = 4; SOLO durante la primera instancia. una vez que termina de ejecutarse esa vez la función, los parámetros no tienen valor fijado.
 * 
 * número1 = 3;
 * número2 = 7; SOLO durante la segunda instancia. una vez que termina de ejecutarse esa vez la función, los parámetros no tienen valor fijado.
 * 
 * */



/*
 * Clase/
    	funciones/
    		funciones.js
    		funciones.html
    	funciones2/
   			funciones2.js
    		funciones2.html
 * */


/*Aplicando js en html*/
/*FUNCION SIN MEJORAR
 * 
 * var cantDeVeces = 0;

function cuantasVeces(){
	cantDeVeces++;
	console.log("Esta función fue usada " + cantDeVeces + " veces.")
}

cuantasVeces();
cuantasVeces();*/

/*FUNCION MEJORADA
function cuantasVeces(){
	cantDeVeces++;

	if(cantDeVeces>1){
	console.log("Esta función fue usada " + cantDeVeces + " veces.")
	}else if(cantDeVeces === 1){
		console.log("Esta función fue usada " + cantDeVeces + " vez.")
	}else{
	}
}
*/



var nombre = "ale";
var personaConocida = "juan";
// 			 habitacionDeAle("ale");
function habitacionDeAle(string){
  
  /*como si adentro, en esta instancia la funcion hace esto*/
 	//string = "ale"; //instancia 1
  //string = "juan"; //instacia 2
  //string = "camila"; //instancia 3
  
  //si el parametro es ale
  if(string === "ale"){
     console.log("Hola Ale, podés entrar.");
  }else if(string === "juan"){
    console.log("Juan, no estás autorizado");
  }else{
    console.log("Persona desconocida. Empezando alarma...");
  }
  
  
}

habitacionDeAle("ale"); //instancia 1
habitacionDeAle(nombre);
/*1) llamo a la funcion habitacion de ale
 * 2) el parametro tiene que equivaler a la variable nombre
 * 3) Busca la variable nombre, ve que es equivalente a "ale"
 * 4) Ejecuta la funcion habitacionDeAle("ale");
 * */
habitacionDeAle("juan"); //instacia 2 
habitacionDeAle(personaConocida);
/* 1) llamo a la funcion habitacion de ale
 * 2) el parametro tiene que equivaler a la variable personaConocida
 * 3) Busca la variable personaConocida, ve que es equivalente a "juan"
 * 4) Ejecuta la funcion habitacionDeAle("juan");
 * */
habitacionDeAle("camila"); //instancia 3



