//tuple - fixed array, fixed data type and fixed return type
// It helps in storing multiple fields of different data types together

//Declaring and Initializing Tuple
//Tuple with 2 values of string, number
/* let data:[string,number]=["abc",123]
console.log(data[0])
console.log(data[1])
console.log(data) */

//Tuple with multiple values

/* let user:[number, string, boolean, number, string] = [123,"abc",true,456,"dgg"]
console.log(user) 

//example 3: - using for loops for tuple

// traditional for loop

for(let i=0; i<user.length; i++)
{
    console.log(user[i])
}

//For in loop (index based iteration)

for(let i in user)
{
    console.log(user[i])
}

//For of loop (value based iteration)

for(let value of user)
{
    console.log(value)
}
 */
//Ex 6: Tuple array (Array of tuples)

let students:[number,string][]=[[123,"abc"], [345,"567"] ]

console.log(students.length) // gives the lenth of tuples
console.log(students[0]) // prints the first tuple
let res=students[0]
console.log(res[0])//prints the first value of tuple