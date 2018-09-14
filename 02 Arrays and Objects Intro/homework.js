/*
	Tenés el array toBuy, que representa la lista del super.
	1) Sabés que ya compraste tomates y papas, pero necesitás comprar bananas.
		a. Sacá las papas y los tomates de la lista.
		b.  Agregá las bananas al principio de la lista
	2) Originalmente anotaste las cosas en orden de urgencia para comprar. Querés saber rápidamente cuán importante
	es comprar agua. Si está más atrás que los primeros dos items, no es urgente. Qué agregarías al script para
	saberlo?


*/

var toBuy = ["papas", "carne", "desodorante", "agua", "tomates"];
//ANSWER
toBuy.shift();
toBuy.pop();
toBuy.push("Bananas");
var isItUrgent = toBuy.indexOf("agua");

if (isItUrgent >= 2){
	console.log("no");
}else{
	console.log("yes");
}
console.log(toBuy);


/*Sos paramédico. Necesitás saber rápidamente si Juan tiene alguna alergia antes de administrar el medicamento
	de urgencia. El sistema del hospital tiene sus datos pero son demasiados para buscar uno por uno.
	Cómo harías para que la consola te de rápidamente la respuesta? (1 línea de código)*/
var id = {
	name: "Juan",
	age: "25",
	city:"Oklahoma",
	idNumber: 57758,
	eyes: "Brown",
	height: 157,
	allergies: "macadamia nuts",
	prescriptions: "adderall",
	pastSurgeries: "no"
}

// ANSWER console.log(id.allergies);

