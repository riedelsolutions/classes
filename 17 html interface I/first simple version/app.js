var people = [
	{
		name: "Ale",
		age: 40,
		id: 134
	},
	{
		name: "Cami",
		age: 90,
		id: 223
	},
	{
		name: "Valeria",
		age: 23,
		id: 329
	}

];
//console.log(people[1].id);

function getInfoPreeliminar(num){

	//Hay formas mucho más prolijas y rápidas de hacer esto. Lo vamos a ver la próxima.
	for (var i = 0; i <= people.length; i++){
		if(people[i].id === num){
			console.log(people[i]);
			break;
		}

	}
}

getInfoPreeliminar(223); //cami
getInfoPreeliminar(329); //valeria
getInfoPreeliminar(134); //ale
//getInfoPreeliminar(100); //No hay una persona con este id en la base de datos

//Version final


function getInfo(){
	var num = document.getElementById('search').value;
	//console.log(num);

	//Hay formas mucho más prolijas y rápidas de hacer esto. Lo vamos a ver la próxima.
	try{
	for (var i = 0; i <= people.length; i++){
		if(people[i].id == num){
			var result = people[i];
			console.log(result);
			break;
		}
	}

	}catch(e){
		console.log("Persona no encontrada");
	}
}
