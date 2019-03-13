function greet (name = "anonymous stranger", guestOrUser){
	console.log("Welcome " +  name);

	if(guestOrUser === 1){
		console.log("I see you're a guest, make sure to join us if you enjoy our content!");
	}else if(guestOrUser === 2){
		console.log("Glad to see you again!");
	}
  
}