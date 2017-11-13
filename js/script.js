// This declares the variable myVar
var myVar;

// This sets the value of the myVar variable to the number .7
myVar = 0.7;

// This declares the myName variable and sets it to the string value of Kurt
var myName = "Kurt";

// A double quoted string cannot contain double quotes within unless they are escaped using a backslash \ same applies for single quoted strings
var mySentence = "What's up";
var thing = "and he said \"What's up\" to me";

var myLongString = "This actually isn't too long.";

var myBoolean = false;

var numA = 14;
var numB = 27;

// addition in js is done with the + symbol
var sumofAandB = numA + numB;

// This reassigns the value of the numA variable to 32, this does not effect the line above but will effect the line below.
numA = 32;

// subtraction
var numAMinusNumB = numA - numB;

// multiplication is done through an *
var numC = 3 * 3;

// divison is done with /
var numD = 4 / 2;

// exponents are done with **
var myExponent = 2 ** 4;

// modulus is done with a % returning the remainder after divison, 5 % 2 = 1

var myModulus = 5 % 2;

// This is concatenation, adding strings together
var myFullName = myName + " " + "Petrek";

// This creates an object the me variable and assigns to be an object
var me = {
  // objects are made of named key value pairs
 name: "Kurt Petrek",
 age: 29,
  isAwesome: true,
  head: {
    eyes:2,
    hairColor: "brown",
    brain: true
  }
};
// Properties on the me object would generally be accessed using dot notation
// me.name would return Kurt Petrek, me.head.eyes would return 2

console.log(me.age);

// This sets the age property on the me oboject to the value of 30
me.age = 30;

console.log(me.age);

// arrays are key value pairs where the key is a number, arrays are created using [], each element within an array is seperated by a ,
var myArr = [55, "Tiger", true, me ];

// arrays in javascript start with a 0 index, to access elements within an array using [] with the index number, myArr[0] would be 55, myArr[1] would be Tiger
console.log(myArr[0]);

var daysOfTheWeek = ["Sunday", "Monday", "Tuesday"];

// objects can hold arrays as the value for Properties
// this adds a hobbies property to the me object and sets it to be an array
me.hobbies = ["Code", "Music", "Food", "Games"];

console.log(me.hobbies[0]);

var something;
// something is undefined the variables has been declared but a value has been set
console.log(something);

var somethingElse;
// if javascript encounters a variable that does not exist it will throw an error and stop executing any further script by default
console.log(somethingElse);

// null is nothing
var nothing = null;

// this function declarations that create a function called sayHello
function sayHello() {
  console.log("Welcome to Javascript City");
}
// function declarations do not end in a ;

// this calls or invokes the sayHello function.
sayHello();

sayHelloTo("meeeee");

// variables created within a function are only avliable within the function, this is called function scope
function sayHelloTo(name) {
  var message = "Welcome to Javascript " + name + "!";
  console.log(message);
}

// sayHelloTo("Mughead");
// sayHelloTo("Lars C-Tier")
// sayHelloTo(myFullName);
// sayHello();

// this will throw an error, functions should be defined before they are called
// sumNums();

// this is a function expression that creates a function called sumNumbs
var sumNums = function(firstNum, secondNum) {
  var sum = firstNum + secondNum;
  // this will return the value of the sum vriable to where the function is called, once a return statement is triggered no further code within the function is executed.
  return sum;
  console.log("This is never going to happne");
};

sumNums(2,2);

// console.log (sumNums (2,2) );

var mySum = sumNums(923, 13454);
