/*
"Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz”
instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples
of both three and five print “FizzBuzz”."*/

var toOneHundred = 1;

while (toOneHundred <= 100){
	if(toOneHundred%3 === 0 && toOneHundred%5 ===0){
		console.log("FizzBuzz");
	}else if (toOneHundred%3 === 0 && toOneHundred !== 0){
		console.log("Fizz");
	}else if(toOneHundred%5 === 0 &&  toOneHundred !== 0){
		console.log("Buzz");
	}else{
		console.log(toOneHundred);
	}

	toOneHundred++;
}

for (var i = 1; i <= 100; i++){
	if(i%3===0 && i%5===0){
		console.log("FizzBuzz");
	}else if (i%3 === 0 && i%5 !== 0){
		console.log("Fizz");
	}else if(i%5 === 0 && i%3!== 0){
		console.log("Buzz");
	}else{
		console.log(i);
	}
}