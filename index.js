console.log(`Hello. This document is for learning basic javascript. It was created to help you further understand this great programming language!\
\nBe careful when changing code! It could cause some of the functions to return as errors or not work how they are supposed to.\
\nI'm going to put these lines inbetween each segment so it looks better in the console.\n----------`)
// Using // Creates a single lined comment.

// Using /*(text)*/ creates mutliple lined comments. Example:

/*
This 
is a 
multiple
lined
comment
*/



/*
"var"s can be changed throughout code. 
"const"s cannot be changed throughout code.
"let"s are only within a certain part of your code.
*/


console.log(`Starting off with the Basics.\n`)

var sum = 0 + 0; // "+" = addition.
var difference = 0 - 0; // "-"" = subtraction.
var product = 0 * 0; // "*" = multiplication.
var quotient = 0 / 0; // "/" = division.
var remainder = 0 % 0; // "%" = remainder.



const introToConsts = 'Welcome to this file!'; // Cannot be changed throughout code, and can be used anywhere.
var introToVars = 'Hello!'; // This can be changed throughout code because it is a variable!
let introToLets = 'Coding is worth your time'; // We can use these to declare variables that are limited in scope to the block.

const createdBy = 'Ryan'; // Keep in mind that this cannot be changed throughout code, as it is a "const"!

// You can use ${} to put variabes into a string, but only if the string starts and ends with backticks (``)

console.log(`This was created by ${createdBy}. (first method)`)

// You can also do this to put variables into a string. Keep in mind backticks are not required for this!

console.log(`This was created by ` + createdBy + `. (second method)`)

// The "+=" is the same thing as adding the strings together, which is another method you could use.

var myStr = `This was created by `;
myStr += createdBy
myStr += `. (third method)`
console.log(myStr)


console.log(`----------`)
console.log(`Using "+", "-", "*", and "/" with the "=" to do Math.\n`)


// These variables can be changed as we go.

var a = 1;
var b = 2;
var c = 3;


// I'm going to put \n at the end of all of these to separate them in the console.


console.log(`The original value of "a" is ${a}.\n`) // Should be 1.
console.log(`The original value of "b" is ${b}.\n`) // Should be 2.
console.log(`The original value of "c" is ${c}.\n\n`) // Should be 3.

a += c; // Adding c to a.

console.log(`After adding "c" (${c}) to the original value of "a", we get ${a}.\n`) // Should be 4.

a = 1; // Setting a back to it's original form.

c -= a; // Subtracting a from c.

console.log(`After adding the original value of "a" (${a}) to "c", we get ${c}.\n`) // Should be 2.

c = 3 // Setting c back to it's original form.

b *= c; // b times c.

console.log(`After mutliplying "b" by the original value of "c" (${c}), we get ${b}.\n`) // Should be 6.

b = 2 // Setting b back to it's original form.

c /= b; //  Dividing c by b.

console.log(`After dividing "c" by the original value of "b" (${b}), we get ${c}.\n`) // Should be 1.5.

c = 3 // Setting c back to it's original form.

c %= b; // ?

console.log(`Not to sure why, but we get ${c} after using "c %= b".\n`) // Should be 1.


console.log(`----------`)
console.log(`More Javascript Need-to-Knows\n`)


// All 3 of these can be used with strings.

var str1 = "Quotes";
var str2 = 'Single Quotes';
var str3 = `Backticks`;



/*
CODE OUTPUT
\'      single quote
\"      double quote
\\      backslash
\n      new line
\r      carriage return
\t      tab
\b      backspace
\f      form feed
*/

// I'm going to put \n at the end of all of these to separate them in the console.

var singleQuote = `This is a single quote: \'\n`; // Using \' will allow you to have a ' without the string ending.
console.log(singleQuote);

var doubleQuote = `This is a double quote: \"\n`; // Using \" will allow you to have a " without the string ending.
console.log(doubleQuote);

var backSlash = `This is a backslash: \\\n`; // Using \\ will display a backslash since "\" alone cannot be seen.
console.log(backSlash);

var newLine = `By using \\n, we can put the following text down a line as seen here:\nFirstLine\nSecondLine\nThirdLine\n`; // Using \n puts the string down a line, even if it's not shown when it is defined originally.
console.log(newLine)

var carriageReturn = `Typo the first word got replaced in thie string because of a carriage return. \rHey,\n`; // Using \r sends the text after back to the FRONT of the string.
console.log(carriageReturn);

var tab = `This message is \tSPLIT\t because of a tab!\n`; // Using \t creates a tab from the point where it is written.
console.log(tab);

var backSpace = `The typo in this sentence is fixed because of a backspacee\b, which is very cool.\n`; // Using \b replaces the character before it with whatever follows.
console.log(backSpace);

var formFeed = `Hello, \fI am testing \fform feeds.`; // Using \f sends whatever follows down a line without sending it to the start.
console.log(formFeed);


console.log(`----------`)
console.log(`Counting\n`)


// Why count when the computer can do it for you?

var onlineName = `Ryle`;
var onlineNameLength = 0;

onlineNameLength = onlineName.length; // Should be 4.
console.log(`The length of 'onlineName' is ${onlineNameLength}\n`)

/*
We can also find out which letter is in which place.
Javascript uses Zero Based Indexing, which means that it starts counting at 0 instead of 1.
This means that if you're looking for the 1st letter, you'd use 0. If youre looking
For the third letter, you'd use 2.
*/

var thirdLetter = "";
thirdLetter = onlineName[2]
console.log(`The third letter of ${onlineName} is "${thirdLetter}"\n`)

// You can also use this method to find the last letters of a string.

var lastLetter = "";
lastLetter = onlineName[onlineName.length - 1]
console.log(`The last letter of ${onlineName} is "${lastLetter}".\n`)

// This can be used with any number. I'll give you another example.

var secondToLastLetter = "";
secondToLastLetter = onlineName[onlineName.length - 2]
console.log(`The second to last letter of ${onlineName} is "${secondToLastLetter}".\n`)

// Strings can be changed throughout code. Lets show an example of that.

var myStr = 'Aello World!\n'; 
console.log(myStr)

// This string has a typo. To change it, we must rewrite the entire string, like so.

var myStr = 'Hello World!'; // Should change the string to Hello World! the next time it is logged.
console.log(myStr)


console.log(`----------`)
console.log(`Word Blanks with Functions\n`)


// We can use functions to create different strings. 

function wordBlanks(myNoun, myAdjetive, myVerb, myAdverb) {
    var result = "";
    result += "The " + myAdjetive + " " + myNoun + " " + myVerb + " " + "to the store" + " " + myAdverb + ".";
    return result
    // The spaces inbetween are so that the string does not return without spaces between words.
}

// With this we are inputting the variables we put in the function earlier.

console.log(wordBlanks("man", "giant", "ran", "swiftly")); // Should return "The giant man ran to the store swiftly."


console.log(`----------`);
console.log(`Arrays\n`);


// We can use arrays to store multiple data types in one.

var exampleArray = ['Ryan', 16, 'RyleStyle'];

// You can even put arrays inside of arrays!

var myArray = [['Test Grade', 80], ['Homework Grade', 92]];

// You can use bracket notation with arrays as well.

var ourArray = ['First', 'Second', 'Third'];
var ourData = ourArray[1]; // Should be 'Second'

console.log(`The second string in the array is ${ourData}\n`);

// We can also use bracket notation to modify arrays, unlike strings.

var originalArray = [0, 2, 2, 3]; // Should come out as 0,2,2,3
console.log(`The original array is [ ${originalArray} ]\n`); // Should come out as: "The original array is [ 0,2,2,3 ]"

originalArray[1] = 1; // Should fix the array to count up from 0.
console.log(`The modified array is [ ${originalArray} ]`); // Should come out as: "The modified array is [ 0,1,2,3 ]"


console.log(`----------`);
console.log(`Global Variables`)

var globalVar = 'Hello World!'; // This is a global variable since it is not inside a function. So if we use it anywhere, it should be able to find it (unless it has been changed)

function globalVariables() {
    
    console.log(globalVar)
}
globalVariables(); // Running the function.


console.log(`----------`);
console.log(`Math with Functions\n`)


// We can use functions for other basic necessities, like math.

function addition(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber)
}
// We can choose which numbers we want to add by doing this.
addition(10, 5); // Should be 15.

// Since we're adding things together, we can also use strings.
addition(`Hello `, `World!`)