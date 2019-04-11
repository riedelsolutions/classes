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


function getInfo(){
	var num = document.getElementById('search').value;
	//console.log(num);

	//Hay formas mucho más prolijas y rápidas de hacer esto. Lo vamos a ver la próxima.
	try{
	for (var i = 0; i <= people.length; i++){
		if(people[i].id == num){
			var result = people[i];
			document.getElementById("results").innerHTML = `Nombre: ${result.name} \n
			Edad: ${result.age} \n Número de identificación: ${result.id}`
			break;
		}
	}

	}catch(e){
		//console.log("Persona no encontrada");
		document.getElementById("results").innerHTML = "Persona no encontrada."
	}
}
