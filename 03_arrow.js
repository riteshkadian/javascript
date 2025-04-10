const user = {
    username :"Ritesh",
    price:999,
    welcomeUser:function(){
        console.log(`${this.username},welcome to the website `)
        console.log(this)
    }
}
// user.welcomeUser()
user.username="sam"
// user.welcomeUser()
// console.log(this)//this can only be used in the object it is not much  used in the functions


//this in functions
// function chai(){
//     let username="Ritesh"
//     console.log(this)
//     console.log(this.username)
// }
// chai()


//Arrow function 
const coffe = ()=>{//remove the function and put => in front of paranthesis to make it a arrow function 
    let username = "Ritesh "
    console.log(this.username)
    console.log(this)

}
coffe()

//Pure Arrow function 
const addTwo= (num1,num2) => {
    return num1+num2;
}
//Implicit Return 
const addTwo1= (num1,num2) =>  (num1+num2) //we have to remove the paranthesis
//we do not neeed to write return when we use () . we have to write if we have {} 

const addTwo2= (num1,num2) =>  ({username:"riitesh "})
console.log(addTwo(3,4));
console.log(addTwo1(3,4))
console.log(addTwo2())