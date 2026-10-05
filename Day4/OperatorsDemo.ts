// we can assign all the variables using one let comment
// ex:

let a:number = 10, b:number =20;

//1. arithmetic operators (+,-,*,/,%,** exponential)
console.log("********************************arithmetic operators**********************************************************************************")
console.log(a+b); //result = 30
console.log(b-a); //result = 10
console.log(a*b); //result = 200
console.log(a/b); //result = 0.5 //division, will return the quotient value
console.log(a%b); //result = 0 //modulo division, will return the remainder value
console.log(5**2); //result = 25 // double star is exponential, 5 square 2, 5*5=25

//2. Assignment operators (+=,-=,==) shorthand operators (+=,-=,*=,/=,%=)
console.log("********************************Assignment operators**********************************************************************************")
a=10; // no need to use the let keyword again, because we can do variable declaration once and initialize the value multiple times
b=5;

console.log(a+=b); //a=a+b //10+5=15, now value of a is 15
console.log(b-=a); //b=b-a //5-15 = -10, now value of b is -10
console.log(a*=b); //a=a*b //15*-10 = -150
console.log(a/=b); //a=a/b // -150/-10 = 15
console.log(a%=b); //a=a%b //15%-10=5

//3. Relational operators (>,<,>=,<=,== (it compares only the value),!=, === (Strict equal, this is only for JS & TS, it compares the value and data type)
console.log("********************************Relational operators**********************************************************************************")
a=10, b=20
console.log(a>b) // false
console.log(a<b) // true
console.log(a>=b) //false
console.log(a<=b) //true
console.log(a==b) //false
console.log(a!=b) //true
console.log("********************************Strict equal operators**********************************************************************************")
let num1:any=10, num2:any='10' //num1 is number type, num2 is string type
console.log(num1==num2) //true // it only compares the value
console.log(num1===num2) //false // it compares both value and data type


//4. Logical operators (&&,||, ! - boolean results)
let c=true, d=false
console.log("********************************Logical operators**********************************************************************************")
console.log(c&&d) //false
console.log(c||d) //true
console.log(!c) //false

//5. Increment/Decrement operators (++,--) a++ post increment, ++a pre increment
a=10,b=15
console.log("********************************Increment/Decrement operators **********************************************************************************")
console.log(a=a++) //10
let res:number=a++
console.log(res) //10 (post increment, variable will store the value first and then increment the value)
console.log(a) //11
res=++a //now a value is 11
console.log(res) //12 (pre increment, increment the value and then variable will store the value)
console.log(a) //12
//same applies to the decrement

//6. Ternary operators ( condition ? :) eg(a>b?a:b)
a=20, b=40
console.log("********************************Ternary operators **********************************************************************************")

console.log((a>b)?true:false)
console.log((a>18)?"Adult":"minor")
