//1.Conditional/Decision making statements:
/*
1. simple if statement
    if(statement)
    {
        statement block
    }
2. if else statement
    if(statement)
    {
        statement block
    }
    else
    {
        statement block
    }
3. nested if statement
    if(statement)
    {
        statement block
    }
    elseif
    {
        statement block
    }
    else
    {
        statement block
    }
4. switch case with condition
    switch(condition) //condition will return only boolean value - true or false
    {
    case1: statement1; break;
    case1: statement1; break;
    case1: statement1; break;
    default: statement // optional
    }

5. switch case with expression
    switch(expression) //expression can return any value - number, string, boolean
    {
    case1: statement1; break;
    case1: statement1; break;
    case1: statement1; break;
    default: statement // optional
    }
*/

//examples

console.log("************************if condition********************************")
let g:number=5;
if(g=5)
{
    console.log("matching value")
}

console.log("************************if else condition********************************")
if(g=6)
{
    console.log("matching value")
}
else
{
    console.log("Not matching")
}

console.log("************************Nested if condition********************************")
if(g=5)
{
    console.log("value is 5")
}
else if(g=6)
{
    console.log("value is 6")
}
else if(g=7)
{
    console.log("value is 7")
}
else
{
    console.log("value is something else")
}
console.log("************************Switch case with condition********************************")
let day:number=3
switch(day)
{
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    default: console.log("something else");

}
console.log("************************Switch case with expression********************************")
let x=20, y=10
switch(x-y) // here, x-y is an expression, it will return the number value
{
case 1: console.log("value is 1"); break;
case 2: console.log("value is 2"); break;
case 10: console.log("value is 10"); break;
}