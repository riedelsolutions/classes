var array = [
{
	name: 'A',
	surname: "surname1"
}];

function pushPerson(){
	document.getElementById('added').innerHTML = "";
	document.getElementById('fullList').innerHTML = "";

	var getName = document.getElementById('name').value;
	var getSurname = document.getElementById('surname').value;

	var obj = {
		name: getName,
		surname: document.getElementById('surname').value
	}

	array.push(obj);

	document.getElementById('added').innerHTML = `${array[array.length-1].name}, has sido agregado a la lista.`;

	//forEach for later

	var title = document.createElement('h4');
	title.textContent = "Personas registradas";
	document.getElementById('fullList').appendChild(title);

	array.forEach(function(obj){
		var element = document.createElement('p');
		element.textContent = `${(array.indexOf(obj)) + 1}. Nombre: ${obj.name} \n Apellido: ${obj.surname}`;
		document.getElementById('fullList').appendChild(element);
	}) 

}