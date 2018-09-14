var people = ["Ale", "Mar", "Martina", "Pablo"];


if (people.length > 2){
	console.log ("Se puede organizar una fiesta");
}



var personas = ["Ale", "Mar", "Martina","Pablo", "Gastón"];

if(personas.length<5){
	console.log("Hay pocas personas");
}else if (personas.length === 5){
	console.log("El numero de personas es ideal");
}else{
	console.log("Demasiadas personas");
}


if(personas.length<5){
	console.log("Hay pocas personas");
}else{
	console.log("Demasiadas personas");
}


var personas = ["Ale", "Mar", "Martina","Pablo"];

if(personas.length<4){
	console.log("Hay pocas personas");
}else if (personas.length === 5){
	console.log("El numero de personas es ideal");
}else if(personas.length === 4){
	console.log("El numero de personas es el más seguro");
}else{
	console.log("Demasiadas personas");
}



var diasDeVacaciones = 8;

if (diasDeVacaciones<=7){
	console.log("Te quedan días de vacaciones");
} else if (diasDeVacaciones === 8){
	console.log("No te quedan días de vacaciones");
}else{
	console.log("Te tomaste demasiados días de vacaciones");
}