//LOOPS

/*Los loops son una estructura usada en programación para hacer que se repitan acciones (líneas de código)

cierta cantidad de veces, dependiendo de las condiciones usadas.

El loop mas simple es while. While significa 'mientras'. Mientras se cumpla la situación especificada,
el código dentro del while loop va a funcionar. La sintaxis es la siguiente:

*/


while (condición){
	//código que funciona si se cumple la condición
}

//El ejemplo más simple es el siguiente:

while (true){
	console.log("This is true");
}


/*Lo que pasa acá si lo hacemos correr al programa es que se crea un loop infinito. Por qué pasa esto?

Las condiciones entre paréntesis () son interpretadas de forma que el parser verifica si es verdad (true) o no.

Entonces al poner while(true), el parser lee  "true equivale a true?". Esto siempre es verdad así que corre para
siempre.




Otro ejemplo usando otra condición:
*/

var x = 10;

while (x <9) {
	console.log("El loop corre");
}


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

var y = 1;

while (y < 10){
	console.log ("y es menos a 10");
	y++;
}

// modulo
var diez = 10;
var resto = 10%2;
console.log(resto);


//siguen loops examples
var z = 1;

while (z < 1000){
	console.log ("x es menor a mil");
	z++;
	if (z%3 === 0){
		break;
	}
}

console.log(z);


var a = 1;

while (a <= 30){
	if (a%3 === 0){
		console.log (a + " es divisible por 3");
	}

	a++;

}



/*DO while loops son usados cuando necesitas que la acción pase si o si mínimamente UNA vez*/


b = 10;
do{
	b++;
	console.log ("pasa esta vez");
}while (b < 10);


c = 8;
do{
	c++;
	console.log ("pasa esta vez");
}while (c < 10);