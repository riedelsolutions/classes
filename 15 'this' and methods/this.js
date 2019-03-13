//'this' and methods

var person = {
    name: "Nick",
    surname: "Smith",
    age: 23,
    formalGreeting: function(){
        return "Welcome " + this.name;
    }
}

console.log(person.formalGreeting());

var user = {
    id: 171,
    name: "Nick",
    surname: "Smith",
    age: 23,
    greetings: function(formal){
        if(formal){
            return "Welcome, " + this.name + " " +  this.surname + ".";
        }else if (!formal){
            return "Hi " + this.name + "!";
        }
    }
}

console.log(user.greetings(true));
console.log(user.greetings(false));
