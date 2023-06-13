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

/////////////////////////////////DRIVER'S ED////////////////////////////////////////////////
//1.Make a variable that holds a person's age; be semantic
let driver_age = 15;
//2.Write code that will print out "Here are the keys!",
// if the age is 16 years or older, or, if the age is younger than 16,
// a message should print "Sorry, you're too young."
if (driver_age >= 16) {
  console.log(`Here are the keys`);
} else {
  console.log(`Sorry you're too young to drive`);
}

/////////////////////////////////LOOPS////////////////////////////////////////////////
//A. The basics

//1. Write a loop that will print out all the numbers from 0 to 10, inclusive

for (let i = 0; i < 11; i++) {
  console.log(i);
}

//2. Write a loop that will print out all the numbers from 10 up to and including 400
/* for (let i = 10; i < 401; i++) {
  console.log(i);
} */

//3. Write a loop that will print out every third number starting with 12 and going no higher than 4000
for (let i = 12; i <= 4000; i += 3) {
  console.log(i);
}
console.log(
  `----------------------------------------------------------------------------`
);
//B. Get even
//Print out the numbers that are within the range of 1 - 100
for (let i = 1; i <= 100; i++) {
  console.log(i);
}

//Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is an even number`);
  } else {
    console.log(i);
  }
}

//C. Give me Five
//1.For the numbers 0 - 100, print out "I found a number. High five!"
//   if the number is a multiple of five

for (let i = 0; i <= 100; i++) {
  if (i > 0 && i % 5 === 0) {
    console.log(`I found a ${i}. High five!`);
  } else {
    console.log(i);
  }
}

//Add to the code from above to print out "I found a number. Three is a crowd"
// if the number is a multiple of three
//For numbers divisible by both three and five, be sure your code prints both messages
console.log(
  `-------------------------------------------------------------------`
);
for (let i = 0; i <= 100; i++) {
  if (i > 0 && i % 5 === 0 && i % 3 === 0) {
    console.log(`I found a ${i}. High five and three is a crowd!`);
  } else if (i > 0 && i % 5 === 0) {
    console.log(`I found a ${i}. Three is a crowd!`);
  } else if (i > 0 && i % 3 === 0) {
    console.log(`I found a ${i}. Three is a crowd!`);
  } else {
    console.log(i);
  }
}

/////////////////////////////////SAVING'S ACCOUNT////////////////////////////////////////////////
//1.Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your bank_account should have $55 in it.
let bank_acc = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = bank_acc.reduce((acc, value) => acc + value);
console.log(sum);

//2.You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10,100 in it.

const pay_calc = function () {
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    sum = sum + i * 2;
  }
  return sum;
};

console.log(pay_calc());

////////////////////////////////////III. Arrays & Control flow///////////////////////////////////////
//A. Talk about it:
//1.What are the things in an array called?
// The things inside an array are called elements. Elements hold a value of any data type.

//2.Do Arrays guarantee those things will be in order?
//the order of the items can sometimes be unpredictable,we need to be careful and sort
// or change the order of items themselves if we want them to be in a specific arrangement.

//3.What real-life thing could you model with an array?

// Aschedule for a weekly exercise routine can be modeled with an array in JavaScript.
// We can use array to represent the days of the week and store different exercises or activities for each day.
// We can add, remove, or update exercises for specific days.

//B. Easy Does It
//1. Create an array that contains three quotes and store it in a variable called quotes
let quotes = [
  `I'm not superstitious, but I am a little stitious.`,
  `I wish there was a way to know you're in the good old days, before you've actually left them.`,
  `'R' is among the most menacing of sounds. That's why they call it 'murder' and not 'mukduk.'  `,
];

//C. Accessing elements
//Given the following array
const randomThings = [1, 10, "Hello", true];

//1.How do you access the 1st element in the array?
console.log(randomThings[0]);

//2.Change the value of "Hello"to "World"
randomThings.splice(2, "World");

//3.Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings);

//D. Change values
//Given the following array
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

//1. What would you write to access the 3rd element of the array?
console.log(ourClass[2]);

//2. Change the value of "Github" to "Octocat"
ourClass.splice(4, "Octocat");

//3. Add a new element, "Cloud City" to the array
ourClass.push("Cloud City");
console.log(ourClass);

//E. Mix It Up
//Given the following array:
const myArray = [5, 10, 500, 20];
//1. Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
myArray.push("Aegon", "Dunder Mifflin");

//2. Remove the 5from the beginning of the array.
myArray.shift();

//3. Add the string "Bob Marley"to the beginning of the array.
myArray.unshift("Bob Marley");

//4. Remove the string of your choice from the end of the array.
myArray.pop();
console.log(myArray);
//5. Reverse this array using Array.prototype.reverse().
//Did you mutate the array? What does mutate mean?
// Did the .reverse()method return anything?

myArray.reverse();
myArray.forEach((element) => console.log(element));
