function returnRandom(){
	var max = 3;
	var min = 0;
	return(Math.round(Math.random() * (max - min) + min));
}

function frase(){
	var frases = ["Nunca te des por vencido", "Mejor tarde que nunca", "Al que madruga Dios lo ayuda", "Mejor fallar que no intentar"];
	var randomNum = returnRandom();

	document.getElementById('results').innerHTML = frases[randomNum];
}

var cuantasVeces = 0;
function counter(){
	cuantasVeces++;

	if(cuantasVeces >= 2){
		document.getElementById('counterDiv').innerHTML = `Has consultado frases ${cuantasVeces} veces.`
	}else{
		document.getElementById('counterDiv').innerHTML = `Has consultado frases ${cuantasVeces} vez.`
	}
}