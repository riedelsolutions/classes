function hello(name, lang = "en"){
	if(lang === "es"){
		console.log("hola " + name + "!");
	}else if (lang === "en"){
		console.log("hello " + name + "!");
	}
}

hello("Camila","es");
hello("Camila", "en");

function signIn(username, password, age = -1){

	if(age >= 18){
		console.log("Caso 1: Puedes ver todo el contenido de este sitio.");
	}else if (age === -1){
		console.log("Caso 2: Edad no especificada.Por su seguridad, el contenido sensible de este sitio no estará disponible.");
		console.log("Si es mayor de 18, puede cambiar esto en la configuración");
	}else{
		console.log("Caso 3: Por su seguridad, el contenido sensible de este sitio no estará disponible.");
	}
}

signIn("camila", "contraseña123", 40);
signIn("camila", "contraseña123", 14);
signIn("camila", "contraseña123");



//How to optimize code (D.R.Y) -> reverse string example
var one = "uno";

console.log(one.split(''));
console.log(one);
console.log(one.split('').reverse());
console.log(one);
console.log(one.split('').reverse().join(''));

/////////////////

var str = "hello world!";

function reverse(){

	console.log(str.split('').reverse().join(''));
}

reverse();
reverse();

////////////////

function reverseTwo(){
	let string = "hello world!";

	console.log(string.split('').reverse().join(''));

}

reverseTwo();
reverseTwo();


////////////////

function reverseFinal(string){
	console.log(string.split('').reverse().join(''));
}

reverse("hello world!");


