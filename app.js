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

///////////////////////////////////F. Biggie Smalls
//Create a variable that contains an integer.
let my_integer = 30;
//Write an if ... elsestatement that:
//1.console.log()s "little number" if the number is entered is less than 100
//2.console.log()s big numberif the number is greater than or equal to 100.
if (my_integer < 100) {
  console.log(`LITTLE NUMBER`);
} else if (my_integer >= 100) {
  console.log(`BIG NUMBER`);
}

///////////////////////////////////G. Monkey in the Middle
//Write an if ... elsestatement that:
//console.log()little numberif the number entered is less than 5.
//If the number entered is more than 10, log big number.
// Otherwise, log "monkey".
if (my_integer < 5) {
  console.log(`LITTLE NUMBER`);
} else if (my_integer > 10) {
  console.log(`BIG NUMBER`);
} else {
  console.log(`monkey`);
}

///////////////////////////////H. What's in Your Closet?
//Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps",
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],
  [
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs",
  ],
  [
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans",
  ],
];

//1. What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
console.log(`Kristyn is rocking that ${kristynsCloset[3]} today!`);

//2. Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
kristynsCloset.splice(6, 0, "raybans");
console.log(kristynsCloset);
//3. Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
kristynsCloset[5] = "stained knit hat";
console.log(kristynsCloset);

//4. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
console.log(thomsCloset[0][0]);

//5. In the same way, access one item from Thom's pants array.
console.log(thomsCloset[1][0]);
//6. Access one item from Thom's accessories array.
console.log(thomsCloset[2][2]);
//7. Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log(
  `Thom is looking fierce in ${thomsCloset[0][0]}, ${thomsCloset[1][0]} and ${thomsCloset[2][2]}`
);

//8. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][2] = "Footie Pajamas";
console.log(thomsCloset[1]);

/////////////////////////////////////////IV. Functions
//A. printGreeting
//B. printCool

//Write a function printCoolthat accepts one parameter, name as an argument.
//The function should print the name and a message saying that that person is cool.

function is_cool(name) {
  console.log(`${name} is cool`);
}

is_cool("Captain Reynolds");

//C. calculateCube
//Write a function calculateCube that takes a single number and prints the volume of a
// cube made from that number.

function calculateCube(num) {
  console.log(num * num * num);
}
calculateCube(5);

//. D. isVowel
//Write a function isVowelthat takes a character (i.e. a string of length 1)
// and returns true if it is a vowel, false otherwise. The vowel could be upper or
// lower case. Test your function on every vowel and make sure it's working.
// In general, when you write functions, take a minute to test them with different
// values to make sure they behave the way you want.

function is_vowel(char) {
  let vowel = ["a", "e", "i", "o", "u"];
  let str = char.toLowerCase();
  if (typeof str === "string" && vowel.includes(str)) {
    console.log(`${str} is a vowel`);
  } else {
    console.log(`${str} is not a vowel`);
  }
}

is_vowel("q");

//E. getTwoLengths
// Write a function getTwoLengthsthat accepts two parameters (strings).
// The function should return an array of numbers where each number is
// the length of the corresponding string.

function getTwoLengths(str1, str2) {
  let new_arr = [];
  let new_str1 = str1.length;
  let new_str2 = str2.length;
  new_arr.push(new_str1, new_str2);
  return new_arr;
}
console.log(getTwoLengths("Hank", "Hippopopalous"));

// F. getMultipleLengths
// Write a function getMultipleLengthsthat accepts a single parameter as
// an argument: an array of strings. The function should return an array
// of numbers where each number is the length of the corresponding string.

function getMultipleLengths(arr) {
  let new_arr = [];
  for (let i = 0; i < arr.length; i++) {
    new_arr.push(arr[i].length);
  }
  return new_arr;
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// G. maxOfThree
// Define a function maxOfThreethat takes three numbers as arguments and
// returns the largest of them. If all numbers are the same, it doesn't
//  matter which one is returned. If the two largest numbers are the same,
//  one of them should be returned. Be sure to test it with larger values
//  in each of the three locations.

function maxOfThree(num1, num2, num3) {
  let new_arr = [];
  new_arr.push(num1, num2, num3);
  new_arr.sort((a, b) => a - b);
  return new_arr[new_arr.length - 1];
}
console.log(maxOfThree(6, 9, 1));

// H. printLongestWord
// Write a function printLongestWordthat accepts a single argument,
// an array of strings. The method should return the longest word in
// the array. In case of a tie, the method should return the word that
//  appears first in the array.

function printLongestWord(arr) {
  let new_arr = [];
  for (let i = 0; i < arr.length; i++) {
    new_arr.push(arr[i].length);
  }
  let x = Math.max(...new_arr);
  let y = new_arr.indexOf(x);
  return arr[y];
}

console.log(
  printLongestWord([
    "BoJack",
    "Princess",
    "Diane",
    "a",
    "Max",
    "Peanutbutter",
    "big",
    "Todd",
  ])
);

////////////////////////////////////////Objects
// Let's set up an object data structure. Let's say we have a website that
//  sells products, and we have a user of our website, and we want to
//  store that user's data. The object data structure is a good way to
//  organize the data from our user.

// A. Make a user object
// Create an object called user.
// Write in to the object the key-value pairs for name, email, age, and
//  purchased. Set the value of purchasedto an empty array []. Set the
//  other values to whatever you would like.

const user = {
  name: "Shehroze",
  email: "Shehroz4543@gmail.com",
  age: 31,
  purchased: [],
};

// B. Update the user
// Our user has changed his or her email address. Without changing the
// original userobject, update the emailvalue to a new email address.
// Our user has had a birthday! Without changing the original userobject,
//  increment the agevalue using the postfix operator. Hint: age++

user.email = "shigri2023@gmail.com";
user.age++;

// C. Adding keys and values
// You have decided to add your user's location to the data that you want
//  to collect.
// Without changing the original userobject, add a new key locationto the
// object, and give it a value or some-or-other location (a string).

user.location = "Flushing, NY";

// D. Shopaholic!
// Our user has purchased an item! They have purchased some "carbohydrates".
//  Using .push(), add the string "carbohydrates" to the purchasedarray.
// Our user has purchased an item! They have purchased some "peace of mind".
// Using .push(), add the string "peace of mind" to the purchasedarray.
// Our user has purchased an item! They have purchased some "Merino jodhpurs".
//  Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
// Console.log just the "Merino jodhpurs" from the purchasedarray.

user.purchased.push("carbohydrates");
user.purchased.push("piece of mind");
user.purchased.push("Merino Jodhpurs");
console.log(user.purchased[2]);
console.log(user);

// E. Object-within-object
// Remember that you can add an object to an existing object in the same
// way that you can add any new property/value pair.
// If we want to give our user a friendwith a nameand age, we could write:
// user.friend = {
//   name: "Grace Hopper",
//   age: 85
// }
// When we console.log user, we would see the friendobject added to our
// user object.

// Write a friendobject into your userobject and give the friend a name,
//  age, location, and purchased array (empty for now)
user.friend = {
  name: "Michael Scott",
  age: 85,
  location: "Richmond Hill, NY",
  purchased: [],
};
// Console.log just the friend's name
console.log(user.friend.name);

// Console.log just the friend's location
console.log(user.friend.location);

// CHANGE the friend's age to 55
user.friend.age = 55;

// The friendhas purchased "The One Ring". Use .push()to add "The One Ring"
//  to the friend's purchasedarray.
user.friend.purchased.push("The One Ring");

// The friendhas purchased "A latte". Use .push()to add "A latte" to the
//  friend's purchasedarray.
user.friend.purchased.push("A latte");

// Console.log just "A latte" from the friend's purchasedarray.
console.log(user.friend.purchased[1]);

//F. Loops
// Write a for loop that iterates over the User's purchasedarray
//  (NOT the friend's purchased array), and prints each element to the
//  console.

user.purchased.forEach((e) => console.log(e));

//Write a for loop that iterates over the Friend's purchasedarray,
// and prints each element to the console.
user.friend.purchased.forEach((e) => console.log(e));


//G. Functions can operate on objects

