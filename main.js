
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
try{
    const result = 0/10;
    console.log(result)

}
catch(error){
    console.log(error)
}



// Working with APIs in Javascript
url = 'https://catfact.ninja/fact'
async function getCatQuote(endpoint) {
    try{
        let response = await fetch(endpoint);
        let data = await response.json();
        if (data){
            let quotes = document.querySelector('.catqoute')
            quotes.textContent = data.fact;
        }

        else{
            let quotes = document.querySelector('.catqoute')
            quotes.textContent = 'Error feteching qoute try again';
        }
        console.log(data);
     
    }
    catch(error){
        console.log(error);
    }
}
getCatQuote(endpoint=url);


// Dom manipulation
let dom = document.querySelector('.dom');
dom.addEventListener('click',function(){
    // You can style elements here
    // dom.style.color = 'red';
    // dom.style.fontSize = '50px';
    // dom.style.marginLeft = '50%';
    
    // You can call a custom style name from a css file
    // dom.classList.add('domsonclicked')

    // You can set a text content directly here
    dom.textContent = 'Dominology'

    // You can render html directly
    // dom.innerHTML= '<h4 class="special">Doming </h4>'

    // Adding a new content to the page
    dom.insertAdjacentHTML('beforeend','<h4 class="special"> New Doming </h4>')
});



// Scoping and hoisting in Javascript
/*
-variables defined in a function cannot be accessed and used
-variable defined in condition statements using let and const
cannot also be accessed outside the condition
-variables declared using var cannot be accessed in a function but
can be accessed in conditionals.

// Scoping
*/
// function Age(){
//     let age = 55;
// }

// if(100>40){
//     const myAge = 500;
// }
// if(100>40){
//    var myAge = 500;
// }
// // console.log(age)
// console.log(myAge)


// Hoisting
/*
function declarations can be called at any where
that is to say you can define a function at the bottom and 
call it or use it at the top because function declarations are 
hoisted.

That is not the same for arrow functions though.
*/
myName('Felix');
function myName(name){
    console.log(name);
}

// String concatenation (+) vs template literals()
// using string concatenation
amount = 2000;
// const balanceMessage = 'Your balance is: ' + amount;


// Using template literals
const expenditure = 600;
const balanceMessage = `Your balance is: ${amount - expenditure}`;
console.log(balanceMessage);