/*TAREA*/
/*1*/
var  mascota1 ='romeo' ;
var mascota2 = 'arya';

function animal(){

	var gato;
	var perro;

	gato = mascota1;
	perro = mascota2;


console.log('La mascota se llama '+ gato)

};

animal();

/*2*/
var mascota = 'arya';
var mascota1 = 'romeo';

 function generoDeLaMascota(string){

 	if( string === 'arya'){
 		console.log('arya es una hembra')
 	}else if( string === 'romeo'){
 		console.log('romeo es un macho')
 	}else{
 		console.log('animal no registrado')
 	}
 }

 generoDeLaMascota('arya');
 generoDeLaMascota(mascota);
 generoDeLaMascota('romeo');
 generoDeLaMascota(mascota1);
 generoDeLaMascota('beto');


/*3*/
/*Escribir una función que, si le das el numero 10, imprima "sobresaliente", si la nota es entre 6 y 9, diga "aprobado", y si es menor a 6, diga "desaprobado"*/
 function notaFinal(nota){
   if(nota === 10){
     console.log('sobresliente');
   }else if(nota <= 9 && nota >= 6){
     console.log('aprobado');
   }else{
     console.log('desaprobado');
   }
 }

notaFinal(10);
notaFinal(7);
notaFinal(3);

 
/* COMPARADORES:
 
 < menor a 
 
 > mayor a
 
 <= menor o igual a
 
 >= mayor o igual a
 
( condicion1 && condicion2) las dos condiciones tienen que ser true

( condicion1 || condicion2) al menos una condicion tiene que ser true
*/


/*EJEMPLO FONTDATABASE*/

<div>

</div>


/*FUNCIONES - IMPLEMENTACION*/
