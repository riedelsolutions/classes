//Try/Catch


var baseDeDatos = [];
function datos(){

}

try{
	baseDeDatos();

}catch(e){
	console.log("Por favor usá sólo números!");
}


try {

  alert('try se muestra');

  mifuncion();

  alert('Try termina si no hay un error.');

} catch(e) {

  alert(`Error!`); 

}

alert("sigue funcionando el programa.");