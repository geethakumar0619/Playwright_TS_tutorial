/*Variables
There are 3 types of variables in JS & TS
1. Var
2. Let
3. Const

We can use these 3 variables based on below 5 aspects:
    1. Scope
    2. Declaration/Assignment
    3. Re-declaration
    4. Re-initialization / Re-assignment
    5. Hoisting

//----------------------------------------------------------------------------------------------------------------------    
    1. How to use variables with the Scope aspect:
        two types of variable scopes:
            1. Functional scope - Var variable
            2. Block scope - Let, Const variable
*/
//Ex1 - Functional scope - var variable

/* function funcscope()
{
    if(true)
    {
    var x=10
    console.log(x) //var inside the block, will return the result
    }
    console.log(x) //var outside the block, will also return the result
}
funcscope(); */

//Ex2 - Block scope - let & const variable

/* function blockscope()
{
    if(true)
    {
    let x=10
    const y = 20
    console.log(x) //let & const inside the block, will return the result
    console.log(y) //let & const inside the block, will return the result
    }
    console.log(x) //let & const outside the block, will never return the result
    console.log(y) //let & const outside the block, will never return the result
}
blockscope(); */
//---------------------------------------------------------------------------------------------------------------------- 

// 2. How to use variables with the "Declaration / initialization" aspect:

//Ex1: Var:
// 1. You can declare the variable "var" without initialization

/* var a; //- Variable declaration 
console.log (a); // - throw the undefined error because the varaible only declared for not initialized
a=30; //- Variable initialization
console.log (a); // - will show the value 30 because the value of the variable has been initialized / assigned */

// Ex2: Let:
// 1. You can declare the variable "Let" without initialization

/* let a; //- Variable declaration 
console.log (a); // - throw the undefined error because the varaible only declared for not initialized
a=30; //- Variable initialization
console.log (a); // - will show the value 30 because the value of the variable has been initialized / assigned */ 

// Ex3: Const:
// 1. You can't declare the variable "Let" without initialization

//const a; //- You can't declare the variable "Let" without initialization, this is wrong and will show runtime error
//const b = 20; //this will show the result 20, because we have declared and assigned the value to the const variable
//console.log (a); // this will throw runtime error
//console.log (b); // this will show the result 20

//---------------------------------------------------------------------------------------------------------------------- 

// 3. How to use variables with the "Re-declaration" aspect:

// var - re-declaration is possible

/* Ex:
var city = "New york";
var city = "Los angelas"
console.log (city); // Result will show "Lost angelas" because Var can be re-declared, that's why var datatype is not type safety
 */
//let & const - re-declaration is not possible
/* let city = "New york";
let city = "Los angelas"
console.log (city);  */// it will show compiletime error because redeclaration is not possible in let & const

/* const city = "New york";
const city = "Los angelas"
console.log (city);  */// it will show compiletime error because redeclaration is not possible in let & const


//---------------------------------------------------------------------------------------------------------------------- 

// 4. How to use variables with the "Re-initialization / re-assignment" aspect:
// Var & let - re-initialization allowed
// ex:
/* var age = 25; //initialization
age = 30; //re-initialization
console.log(age); //this will show the recently assigned value */

/* let age = 25; //initialization
age = 30; //re-initialization
console.log(age); //this will show the recently assigned value */ 


// Const - re-initialization not allowed
/* const age = 25; //initialization
age = 30; //re-initialization, it will show compile time error
console.log(age);  */


//---------------------------------------------------------------------------------------------------------------------- 

// 5. How to use variables with the "Hoisting" aspect:

//Ex. var (Hoisted with undefined)
/* console.log(x); //undefined
var x=10;
console.log(x); */

//Ex. let (Hoisted with not-initialized)
/* console.log(x); //not-initialized
let x=10;
console.log(x);  */

//Ex. const (Hoisted with not-initialized)
/*  console.log(x); //not-initialized
const x=10;
console.log(x);   */
