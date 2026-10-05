//ARROW functions - most important and frequently used function in TS
//Arrow functions/Lambda functions
//Arrow functions is also a anonymous function, it doesn't name function name

//Syntax

/* let variable = (parameters):datatype =>
{
    //block of code
}
variable(); */


//ex.1 arrow function with no parameters and no return type

/* let val = ():void =>
{
    console.log("This is arrow function with no paraments and no return type")
}
val() */

//ex.2 arrow function with parameters and return type

/* let func = (x:number, y:number): number=>
{
    return x+y 
 
}
console.log(func(2,3)) */

//ex.3 arrow function with implicit return - no need to mention curly braces and no need to mention return keyword

/* let func = (x:number, y:number): number=> x+y 
console.log(func(2,3)) */

//ex.3 arrow function with optional parameters
//when you make first parameter optional, you need to make next parameters also options
//otherwise it will throw compile time error

/* let arrowoptionalparameters = (id:number, name:string, mailId?:string):void =>
{
console.log("ID:",id)
console.log("Name:",name)
if(mailId != undefined){ // not printing the email id if values were not given
console.log("Email:",mailId)
}
}
arrowoptionalparameters(1,"geetha", "geetha@gmail.com") // will return all the 3 values
arrowoptionalparameters(1,"geetha")  */

//ex.4 arrow function with default parameters

/* let arrowdefaultparams = (price:number, rate:number=0.50):void =>
{
    let discount:number = price*rate
    console.log("Discount amount:", discount)
}
arrowdefaultparams(1000) // this will pass the value to the first parameter - number and default value will be taken for second parameter
arrowdefaultparams(1000, 0.30) */

//ex.5 arrow function with REST parameters - same datatype

/* let arrowrestparams = (...num:number[]) =>
{
    let i:number;
    let sum:number = 0;
    for(i=0;i<num.length;i++)
    {
        sum=sum+num[i]        
    }
    console.log("sum of the numbers:",sum)
}
arrowrestparams(1,2,3)  */