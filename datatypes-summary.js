// Javascript is a Dynamic type languauge because it is not compulsary to define the data type 
//for eg:- let x = 100
// x="Hello"


/*Datatypes are divided into 2 parts */

//types of dataypes 

// Primitive Datatypes : 7 types
//Number , string , boolen , null, undefined , symbol , BigINT

// Refrence Datatypes ( Non Primitive )
//Arrray , objects , Functions

const score = 100
const samplescore = 100.3
const isLoggedIn = false
const outsideTemp = undefined
let username; // let username = undefined


const id = Symbol('123')
const anotherId = Symbol('123')//both id's have different values
console.log(id)
console.log(id == anotherId)
const BigNumber = 3251243515132324243n
console.log(typeof(BigNumber))

//Array 
const ArrayName = ["Name1","Name2","Name3"]
//Object: Key value pair are used and curly brackets are used to define 
let myobj ={
    name:"ritesh",
    age:19,
}
//Function 
const myFunction = function(){
    console.log("hello")
}
console.log(myobj)
console.log(typeof(ArrayName))




/************************************/
//Types of Memory in Javascript : Stack(Primitive) , Heap (Non Primitive )
//In primitive datatypes Stack memory is used
//In Non primitive datatypes Heap memory is used