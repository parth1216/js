// type conversion and coerction
console.log('tut5')

// i = 5
// method 1 : String(i)
// method 2 : i.toString()

console.log(">>int to string")
// int to string 
let myVar;
myVar = 45;
console.log(myVar, (typeof myVar));
myVar = String(myVar);          // type conversion 
console.log(myVar, (typeof myVar));

console.log(">>boolean to string")
//boolean to string 
let bool = true;
console.log(bool, (typeof bool));
bool = String(bool);
console.log(bool, (typeof bool));


console.log(">>date to string")
// date to string 
let date = new Date();
console.log(date, (typeof date));
date = String(date);
console.log(date, (typeof date));


console.log(">>array to string")
// arr to string 
let arr = [12,564,12,10];
console.log(arr, (typeof arr));
console.log(arr.length, (typeof arr));
arr = String(arr);
console.log(arr, (typeof arr));
console.log(arr.length, (typeof arr));

console.log(">>string to number")
// string to number 
let str = "45456465";
console.log(str,(typeof str));
str  = Number(str)
console.log(str,(typeof str));

console.log(">>boolean to number")
//bool to number 
let bool1 = true;
console.log(bool,(typeof bool1));
bool1  = Number(bool1)
console.log(bool1,(typeof bool1));


// parseInt and parseFloat and toFixed

console.log(">>parseInt and parseFloat and toFixed")
let number=parseInt('4564654');
console.log(number ,(typeof number));
let number1=parseFloat('4564654.515615612311');
console.log(number1.toFixed(3) ,(typeof number1));

// type coerction
console.log("type coerction")

let mystr = "54654";// string 
let mynum = 22; // number 
console.log(mystr+mynum,(typeof(mystr+mynum)));
