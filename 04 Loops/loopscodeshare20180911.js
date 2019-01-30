//TAREA

var herramientas = ["llaves", "pinzas", "destornillador", "pincel", "martillos", "clavos", "taladro"];

if (herramientas.length >5){
	console.log('guardar en caja de herramientas');
}else{
	console.log ('Dejar en la mesa'); 

	};


	var miCajaDeHerramientas = 5;

if (miCajaDeHerramientas >5){
	console.log('mi caja esta completa');
}else if(miCajaDeHerramientas <5){
	console.log ('hay espacio para mas herramientas'); 

	}else{
		console.log('caja ideal');
};

//LOOPS 
while (condición){
	//código que funciona si se cumple la condición
}

while (true){
  console.log("Hello world");
}

//La condición entre paréntesis es comparada a un 'true'. En este caso true siempre va a ser igual a true por lo que se crea un loop infinito (se repite n veces).

var x = 10;

while (x < 9) {
	console.log("El loop corre");
}

// 10 < 9 = false, entonces no corre.

var otro = 5;

while (otro < 9){
	console.log("la variable es menor a 9");
	otro++;
}


var otro = 5;

while (otro <= 9){
	console.log("la variable es menor a 9");
	otro++;
}

//Cuando empieza a correr, se ve 5<9, que es true.
//Entonces el código de adentro empieza a correr.

//OPERADOR MÓDULO

var diez = 10;
var resto = 10%2;
console.log(resto);

var z = 1; //Empezamos con z que equivale a 1

while (z < 1000){ // mientras z sea menor a 1000, el código corre
	console.log ("x es menor a mil"); 
	z++; //Se incrementa z por 1
	if (z%3 === 0){ //Si z es divisible por 3 (Osea, tiene resto 0)
		break;//Termina de correr el loop
	}
}

console.log(z); // z = 3;


var a = 1;

while (a < 30){
	if (a%3 === 0){
		console.log (a + " es divisible por 3");
	}

	a++;

}



/*DO while loops son usados cuando necesitas que la acción pase si o si mínimamente UNA vez*/
var b = 10;
do{
	b++;
	console.log ("pasa esta vez");
}while (b < 10);
