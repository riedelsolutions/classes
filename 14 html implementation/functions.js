/*Funciones. Sintaxis. Funciones adentro de funciones. Implementación
de scripts en html. 
Events.  onclick = "function();" onmouseover = "function();"

Importance of camelCase, semicolon, and other conventions and safe methods. Use strict.
*/

var cantDeVeces = 0;

function stringsToPrint(){
	console.log("Hola. Me llamo Alejandro.");
	console.log("Esta es la segunda línea que escribe mi función.");
}


function cuantasVeces1(){
	cantDeVeces++;

	stringsToPrint();

	if(cantDeVeces>1){
	console.log("Esta función fue usada " + cantDeVeces + " veces.");
	}else if(cantDeVeces === 1){
		console.log("Esta función fue usada " + cantDeVeces + " vez.")
	}else{
	}
}


// cuantasVeces1(); //comment out after first example


//HTML File
function cuantasVeces(){ //versión final con función adentro de función. Modularidad y DRY.
	cantDeVeces++;

	stringsToPrint();

	if(cantDeVeces>1){
	console.log("Esta función fue usada " + cantDeVeces + " veces.")
	}else if(cantDeVeces === 1){
		console.log("Esta función fue usada " + cantDeVeces + " vez.")
	}else{
	}
}



function mouseOverWithClass(){
	document.getElementsByClassName('paragraphClass')[0].innerHTML = "Pasaste el mouse!";
}

function mouseOverWithId(){
	document.getElementById('paragraphId').innerHTML = "Pasaste el mouse!";
}