/*
1. Primitive Data Types (Built-in) are allowed to store only single value
Number
String
Boolean
Null
Undefined
Any
Union Type
Void

2. Non-Premitive Data Types (Objects) are allowed to store group of values
Array
Class
Function
Interface
Touple etc...
*/

//Number - reprents both integers and floating-point numbers
/* let age:number = 25;
let price = 30.5;
let big = 32543658679780;
console.log("age is", age);
console.log("price is", price);
console.log("big is", big); */


//String - reprents textual data
/* 
1. Singlequote ('')
2. Doublequote ("")
3. Backtick (``) */

/* let firstname:string = "Geetha"; //Double quotes
let lastname:string = 'Kumar'; //Single quotes

let greetings:string = `Hello ${firstname} ${lastname}` //whenever you want to pass the string parameter use backtick

console.log(greetings)

console.log("Hello", firstname, lastname) //to pass the values directly to the console, use "," */

//Boolean type

/* let isStudent:boolean = true;
let hasJob:boolean = false;

console.log("Is student?", isStudent);
console.log("Has job?", hasJob); */

//Null & Undefined - whenever the values are absent, these types are available only on TS.

/* let emptyValue:null = null;
let notAssigned:undefined=undefined;
console.log(emptyValue)
console.log(notAssigned) */

/* let price:number;
console.log(price) // this will return the result as "undefined" becuase the price variable has no value defined.
 */

//Any type - whenever you use the "Any" data type, we need to carefully use it, because it violates the typesafety 
// by using the "Any" data type and loses the Typescript benefit (statically typed & type safety)
// it will behave like a "Dynamically typed language" like JS

/* let value:any = "String";
console.log(typeof(value)) // this will return string
value=100;
console.log(typeof(value)) // this will return number
value=true;
console.log(typeof(value)) // this will return boolean
console.log(value) // the recent value of "value", dynamically typed result "true" will display */

//union type - combine multiple types, this is not a keyword like other data types

/* let id : number|string|boolean

id="ABsgfhsf"
console.log(id)

id=123
console.log(id)

id=true
console.log(id) */

//void - used for a function that don't return anything

/* function show():void // this function is not returning anything, we are not printing the value, in that case, we can mention void in the function
{
    console.log("Welcome");
}
show(); */

// if a fucntion is returning the value, we must specify the return data type in the function

/* function sum(x:number, y:number):number // here we are passing the parameter and returning the value, so we are mentioning the data type
{
return(x+y); // returning the sum of x, y
}
let res:number = sum(10,20); // passing the value
console.log(res) // printing the result */
