//Forma concisa y práctica de tener funciones. Salieron en ES6.


var array = ["info", 23543, "string at index 2", 3];

var arrow = () => {
	return array[0];
}

arrow();

//No tienen 'this' propio

function getInfo(){
	var name = "Ale";

	var returnInfo = () => {console.log(name)};
	//usa el this del scope en el que vive, en este caso, de getInfo. Comparte su this con
	//getInfo

	returnInfo();
}

getInfo();