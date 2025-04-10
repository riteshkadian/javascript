function functionName (){
    console.log("R")
    console.log("I")
    console.log("T")
    console.log("E")
    console.log("S")
    console.log("H")
}
//functionName()

// function addTwoNumbers(number1,number2){//num1,num2 are called as parameters 
//     console.log(number1+number2)
// }

function addTwoNumbers(number1,number2){
    // let result = (number1+number2)
    // return result
    return number1+number2
}


let result = addTwoNumbers(3,4)//here 3 , null are called arguments
// console.log("result:",result)



function loginuser(username){
    if(username===undefined || !username){
        // console.log("please enter a valid username")
        return "please enter a valid username"
    }
    return `${username} just logged in `
}
// console.log(loginuser())



function calculateCartPrice(val1,val2,val3,...num1){//rest operator is used to handle multiple parameters 
    return num1
}
// console.log(calculateCartPrice(200,2330,230,354,3240,23420))


const user={
    username:"Ritesh",
    price: 999
}
function HandleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}
// HandleObject(user)
HandleObject({
    username:"sandy",
    price:100
})

const MynewArray = [100,200,300,400]
function returnSecondvaluse(getArray){
    return getArray[1]
}
console.log(returnSecondvaluse(MynewArray))