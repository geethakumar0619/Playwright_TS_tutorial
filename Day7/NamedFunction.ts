/* Named functions: A fucntion that declated with a name */

/* Syntax

function functionName(paramenter):returnType
{
    Block of code
}
functionName(); //invoking the function or calling the function
*/

//Ex.1 function with no parameter and no return type

/* function display():void{
    console.log("function with no parameter and no return value")
}
display(); */ // calling function

//function and method are same, a group of code writted inside the block and we can call this function/method whenever its needed
//difference between function and method
// when you write a piece of code inside the class are called method, we need objects to call the method

//ex.2 Named functions with parameter and return value

/* function addNumbers(x:number, y:number):number
{
    return (x+y)
}
console.log(addNumbers(2,3)); */

//ex.3 Named functions with Rest parameters - same type parameters
// with Rest parameters - we can pass n number of parameters - especially in type script we have this concept

/* function addNumbers(...num:number[])
{
    let i:number;
    let sum:number = 0;
    for(i=0;i<num.length;i++)
    {
        sum=sum+num[i]        
    }
    console.log("sum of the numbers:",sum)
}
addNumbers(1,2,3) */

//ex.4 Named functions with Rest parameters - different type parameters

/* function findElements(...elements:(number | string)[]):number
{
return elements.length
}
console.log(findElements(3,"john",2,"geetha",1,10,20,30)) */

//ex.5 Named functions with optional parameters - when you put question mark before the datatype,it becomes optional

/* function optionalParameters(id:number, name:string, mailId?:string):void
{
console.log("ID:",id)
console.log("Name:",name)
if(mailId != undefined){ // not printing the email id if values were not given
console.log("Email:",mailId)
}
}
optionalParameters(1,"geetha", "geetha@gmail.com") // will return all the 3 values
optionalParameters(1,"geetha") // will return ID and name, but email will be undefined */

//ex.6 Named functions with default parameters

/* function defParams(price:number, rate:number=0.50):void // here, we are passing the default value to the rate parameter
{
    let discount:number = price*rate
    console.log("Discount amount:", discount)
}
defParams(1000) // this will pass the value to the first parameter - number and default value will be taken for second parameter
defParams(1000, 0.30) // expilicitely we are passing the value to the second parameter eventhough it has default value, so the explicit value will be considered and calculated
 */