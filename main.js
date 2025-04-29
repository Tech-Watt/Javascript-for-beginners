
// Variables
// for defining variables you can use var,let or const.
// var is old way of declaring a variable. Is barely used nowadays.
// Let is used in declaring a variable whose value can be updated later.
// Finally for declaring variables whose value cannot be changed in code use const. 

let name = 'Felix';
const Salary = 700.90;
var Age = 55;

// Data types and structures
let number = 67;
let television = 'Samsung';
let laptop = true;
let trackingCode = 55.6;

// Arrays
let myColors = ['red','blue','orange','brown','yellow'];
// accessing items in array
// Elements in array can be accessed using their index
let red = myColors[0];
let blue = myColors[1];
let orange = myColors[2];

// Modifying Arrays
// Arrays can be modified by adding, removing, or changing elements.

// Adding elements
myColors.push(4); // Adds 4 to the end: ['red','blue','orange','brown','yellow',4];
myColors.unshift(0); // Adds 0 to the beginning:  [0,'red','blue','orange','brown','yellow',4]
myColors[5] = 6; // Adds 6 at index 5: 

// Removing elements
myColors.pop(); // Removes the last element
myColors.shift(); // Removes the first element
myColors.splice(2, 1); // Removes 1 element starting from index 2:

// Changing elements
myColors[0] = 10; // Changes the first element to 10



// Array Methods
// JavaScript provides various built-in methods for working with arrays. 
// concat(): Joins two or more arrays.
// join(): Converts array elements into a string.
// slice(): Extracts a portion of an array.
// splice(): Adds or removes elements from an array.
// indexOf(): Returns the first index of an element.
// lastIndexOf(): Returns the last index of an element.
// includes(): Checks if an array contains a specific element.
// find(): Returns the first element that satisfies a condition.
// findIndex(): Returns the index of the first element that satisfies a condition.
// filter(): Creates a new array with elements that pass a test.
// map(): Creates a new array by applying a function to each element.
// forEach(): Executes a function for each element.
// every(): Checks if all elements satisfy a condition.
// some(): Checks if at least one element satisfies a condition.
// sort(): Sorts the elements of an array.
// reverse(): Reverses the order of elements.
// reduce(): Applies a function against an accumulator and each element (from left-to-right).
// reduceRight(): Applies a function against an accumulator and each element (from right-to-left).
// isArray(): Checks if a variable is an array.
// from(): Creates a new array from an array-like or iterable object.


// Objects
let transactions = {
    amount: 800,
    description:'Salary',
    to:'Felix',
}
console.log(transactions.amount,transactions.description,transactions.to);


// Functions
// function declarations
function balance(income,expenses){
    let myBalance = income - expenses;
    return myBalance;
}

// function expression
var balance = function(income,expenses){
    let myBalance = income - expenses;
    return myBalance;
}

// Arrow Function
const balances = (income,expenses)=>{
return income  - expenses;
}
console.log(balances(500,100));


// For loops
// part one 
const numbers = [2,3,5,7,4,7,4]
for (let i=0;i<numbers.length; i++){
    console.log(numbers[i])
}

// part two
for (let num of numbers){
    console.log(num)
}

// Foreach 
const array = ['a', 'b', 'c'];
array.forEach( function cal(a){
    console.log(a)
});



// if else conditions
if (numbers[3]< numbers[2]){
    console.log(true)
}

else if(numbers[2]<= 67){
console.log('Yes')

}
else{
    console.log(false)
}


// Error Handling in Javascript