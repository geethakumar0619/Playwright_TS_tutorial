// Callback function is a function that passed as an argument to the another function

//ex.1

//1. we need to write a function
//2. that function will be called as an argument in another function

/* function mainfunc(a:number, b:number, callback:(res:number)=>void)
{
    let res = a+b
    callback(res)
}

//callback function
function resultfunc(res:number):void
{
console.log(res)
}
mainfunc(10,20,resultfunc); */

//ex:2 callback function with no return result - void

/* function mainfunc(a:number, b:number, callback:(result:number)=>void)
{
    let result = a+b
    callback (result)
}
function res(result:number):void
{
    console.log(result)
}
mainfunc(30,20,res) */