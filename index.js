// Follow along with the examples here
function sayHelloToIsabel(){
    console.log("Hello, Isabel!");
}

function sayHelloToSofia(){
    console.log("Hello, Sofia!");
}

function sayHelloToBrendan(){
    console.log("Hello, Brendan!");
}

sayHelloToIsabel();
sayHelloToSofia();
sayHelloToBrendan();

//Understand arguments and parameters
function sayHelloTo(firstname){
    console.log(`Hello, ${firstname}!`);
}

sayHelloTo("Isabel");
sayHelloTo("Sofia");
sayHelloTo("Brendan");

//Saying something new
function say(greeting, firstName){
    console.log(`${greeting}, ${firstName}!`);
}

say("Goodbye", "Julio");

//Return Values in JavaScript
function add(x, y){
    return x + y;
}

console.log(add(80, 9000));

function say(greeting, firstName){
    return `${greeting}, ${firstName}`
}

console.log(say("Hello", "Sofia"));

//creating a simple calculator function
const sum = add(num1, num2);
const message = `The sum of your number is: ${sum}.`;