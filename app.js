// //1. How do we assign a value to a variable?
// you can assign a value to a variable using let or const along with the equal sign.

//2.How do we change the value of a variable?
//you can change the value of a variable by assigning a new value to it using let or const along with the equal sign.

//3.How do we assign an existing variable to a new variable?
//You can assign an existing variable to a new variable using let or const along with the equal sign.

//4.Remind me, what are declare, assign, and define?
//When you declare a variable in JavaScript, you are essentially creating a labeled box to store information. You use words like var, let, or const to tell JavaScript what the box is called and how it should be used.
//Assigning a value to a variable means giving it a specific value to hold. After declaring a variable, you can use the assignment operator (=) to store a value in it.
//Define means creating functions or objects for later use in a program. It involves writing the code or structure necessary to use them, like using the function keyword to define a function with its name and implementation.

//5.What is pseudocoding and why should you do it?
//Pseudocode is to plan and design code using plain language. It helps us solve problems and work together by making things easier to understand and organize.

//6.What percentage of time should be spent thinking about how you're going to solve a
// problem vs actually typing in code to solve it?

//Understanding the problem and planning solution should take about 50-60% of our time. The remaining 30-40% is for writing and testing the code.

/////////////////////////////////STRINGS////////////////////////////////////////////////
//1.Create a variable called firstVariable
let first_variable;

//2.Assign it the value of the string "Hello World"
first_variable = "Hello World";

//3.Change the value of this variable to some number
first_variable = 100;
//4.Store the value of firstVariablein a new variable called secondVariable
let second_variable = first_variable;

//5.Change the value of secondVariableto any string.
second_variable = "Per Scholas";

//6.What is the value of firstVariable?
console.log(first_variable); // output 100

//7.Create a variable called yourNameand set it equal to your name as a string.
// Then, write an expression that takes the string "Hello, my name is "
// and the variable yourNameso that it returns a new string with them concatenated.
// ex: Hello, my name is Jean Valjean

let your_name = "Shehroze";
console.log(`Hello my name is ${your_name}`);

/////////////////////////////////BOOLEANS////////////////////////////////////////////////
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "Kevin";

console.log(a < b);
console.log(c > d);
console.log("Kevin" === "Kevin");
console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(false === false);
console.log(e === "Kevin");
console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == "48");

/////////////////////////////////THE FARM////////////////////////////////////////////////

//1. Declare a variable animal. Set it to be either "cow" or something else.

let animal = "cow";
//2. Write code that will print out "mooooo" if the it is equal to cow

if (animal === "cow") {
  console.log(`mooooo`);
} else {
  console.log(`Hey! You are not a cow.`);
}

//3.Change your code so that if the variable animalis anything other than a cow,
// it will print "Hey! You're not a cow."Commit
animal = "cat";
if (animal === "cow") {
  console.log(`mooooo`);
} else {
  console.log(`Hey! You are not a cow.`);
}
