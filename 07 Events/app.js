	var ale = {
		name: "Alejandro",
		surname: "c",
		year: 2018
	};

	var cami = {
		name: "Camila",
		surname: "rie",
		year: 2018
	};

	var juan = {
		name: "Juan",
		surname: "Perez",
		year: 2018
	};


	var cata = {
		name:"Cata",
		surname:"Mango",
		year:2018,
	}

	var azul = {
		name:"Azul",
		surname: "Riedel",
		year: 2018,
	}



	var listOfPeople = [ale, cami, juan];
	var VIPlist = [cata, azul];


	function list(chosenList){
		
		var typeofList = "";
		var results = [];

		for(var i = 0; i <= chosenList.length - 1; i++){
			results[i] = "Full name: " + chosenList[i].name + " " + chosenList[i].surname + "<br>";
		}

		if(chosenList == listOfPeople){
			typeofList = "Invitados generales: " + "<br><br>";
			document.getElementById("resultados").innerHTML = typeofList + results;
		}else if (chosenList == VIPlist){
			typeofList = "VIP Guests: " + "<br><br>";
			document.getElementById("resultados").innerHTML = typeofList + results;
		}

	}

	