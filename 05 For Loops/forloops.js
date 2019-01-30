/*For loop, como todo otro loop, hace que se produzcan acciones mientras se cumpla cierta condición. La sintaxis es:
*/

for (var i = 0; i < 10; i++){
	console.log("la variable i vale " + i);
}


/*Que significa lo siguiente:

Por la variable i que tiene cierto valor, y mientras esta variable sea menor a diez, hacer lo que esté entre corchetes.
Una vez que se termine eso, incrementar i por 1.

for (declara variable; mientras se cumpla esto; hacer que corra el loop y al final pase lo que ponés acá).

el 99% de las veces los for loops son (i = 0; i < a algo; i++)
*/

for (var i = 0; i < 10; i++){
	if(i%2 === 0){
		console.log ("El número " + i + " es par");
	}
	console.log("la variable i vale " + i);
}


for (var i = 0; i < 10; i++){
	if(i%2 === 0){
		console.log ("El número " + i + " es par");
	}else{
		console.log("El número " + i + " es impar");
	}
	
}

for (var i = 3; i >= 0; i--){
	alert("Esto es i: " + i);
}
