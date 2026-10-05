//Overloaded functions
//step1: write a signatures of functions
//step2: implement the function
//step3: calling the function

//a function without having a body is called a signature of function

//3 function overloading methods
//1. function with different types of parameters (datatype = number, string)

/* function func1(a:number):string
function func1(b:string):string

function func1(value: number | string):string
{
    if (typeof value === "number")
    {
        return `This is a number value ${value}`
    }
    else{
    return `this is a string value ${value}`
    }
}
console.log(func1(10))
console.log(func1("geetha")) */

//2. function with different number of parameters (a,b)(a,b,c)

/* function func2(a:number, b:number):number
function func2(a:number, b:number, c:number):number

function func2(a:number, b:number, c?:number):number
{
    if (c !== undefined)
    {
        return a+b+c
    }
    else
    {
        return a+b
    }
}
console.log(func2(10,20))
console.log(func2(10,20,30)) */




//3. function with different return data types

/* function func3(name:string):string
function func3(age:number):number
function func3(ismarried:boolean):boolean

function func3(value: string | number | boolean): string | number | boolean
{
    if (typeof value === "string")
    {
        return `Your name is: ${value}`
    }
    else if (typeof value === "number")
    {
    return `Your age is: ${value}`
    }
    else  if (typeof value === "boolean")
    {
        let res = value?"Married":"Unmarried"
        return res
    }
}
console.log(func3(10))
console.log(func3("geetha"))
console.log(func3(true))
console.log(func3(false)) */

