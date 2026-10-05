// Arrays
// Arrays hold multiple values with same data type or different data type
// Indexing starts from 0
// Arrays are declared using '[]' or the generic 'Array<T>' type
// Arrays are an ordered collection of elements

// Approach 1: using leteral 

/* let names:string[]=[]; //Array declaration

//Initialization/assigning the value

names[0]="Geetha";
names[1]="Geetha1";
names[2]="Geetha2";
names[3]="Geetha3"; */

//combining declaration and initialization

/* let names:string[]=["abc","adf","dgg","wer"]
console.log(names); */

//Approach 2 - generic 'Array<T>' - commonly used methos in JS and TS and specific to JS and TS

//let empnames:Array<string>=["abc","adf","dgg","wer"]
//console.log(empnames);
//console.log(empnames[1]); 

/* let empids:Array<number>=[123,345,325,345]
console.log(empids); 

let data:Array<number | string>=[123,"abc", 345, "sfdg", 325, "dggfd", 345]
console.log(data); 

let data1:Array<any>=[123,"abc", 345, "sfdg", 325, "dggfd", 345]
console.log(data1);  */

//Iterating over an array using the traditional for loop
/* console.log("Employee names"); 
for(let i=0; i<empnames.length; i++) // or i<=empnames-1
{
console.log(empnames[i]) // i is representing an index
} */

//Example 2: Iterating array using "For... in" loop (indexes)
/* let empids:Array<number>=[123,345,325,345]
console.log("Employee names"); 
for(let i in empids) //
{
    console.log(empids[i]) // this will return the value of the index[i]
}
 */

//Example 2: Iterating array using "For... of" loop (values)
/* let data:Array<number | string>=[123,"abc", 345, "sfdg", 325, "dggfd", 345]
console.log("Mixed data")

for(let value of data)
{
    console.log(value) // this will return the value directly one by one
} */

//Ex 4: passing an array to the function

//Search an element in an array using function

/* function search(ele:number, arr:number[]):boolean
{
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i]===ele)
        {
            return true //element found
        }
    }
    return false //element not found
}
let arr:number[]=[10,20,30,40,50]
console.log(search(30,arr)) // true */
//console.log(search(100,arr)) // false

//Ex 5: passing an array to the function and reutrn an array

/* function lctouc(lcarray:string[]):string[]
{
let ucase:string[]=[]
for(let i=0; i<lcarray.length; i++)
{
 ucase[i] = lcarray[i].toUpperCase()
}
return ucase
}
let res:string[] = ["ab","cd","de","ef"]
console.log(lctouc(res)) */

//tuple - fixed array, fixed data type and fixed return type