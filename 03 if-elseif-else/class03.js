	var x = 10;

	if(x> 5){
		console.log("x es mayor a 5");
	}

	if(x> 11){
		console.log("x es mayor a 11");
	} //No hace nada

	var string = "Hola";

	if(string === "Hola"){
		console.log("La variable string dice 'Hola'");
	} 

	if(string === "hola"){
		console.log("La variable string dice 'hola'");
	}//No hace nada



//ELSE STATEMENTS
	if(x> 11){
		console.log("x es mayor a 11");
	}else{
		console.log("x es menor a 11");
	}

//ELSE IF STATEMENTS

	var names = ["Camila", "Alejandro", "Pedro", "Martin"];

	if (names.length == 2){
		console.log("La lista tiene 2 items");
	} else if (names.length < 2){
		console.log("La lista es corta");
	}else{
		console.log("La lista es larga");
	}

	//que se podria mejorar? y si esta vacía o no tiene un largo?