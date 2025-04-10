var c =200//global scope
let a=300
if(true){
    let a = 10//block scope

    const b = 20
    var c = 30
}
//    this is called scope {}. it is used in function and conditional statements 

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }


 console.log(a);
// console.log(b);
console.log(c);


function one(){
    const username = "ritesh"
    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)
    two()//andar ka fucntion bhahar ky variabls ko acess kr pata hai but bhr ka function andr ky varibles ko acess nhi kr pata
}
one()



if(true){
    const username = "ritesh"
    if(username==="ritesh"){
        const website = "youtube"
        console.log(username+website)
    }
    // console.log(website)
}
// console.log(username)

//++++++++++++++Intresting+++++++++++++++++++

console.log(addOne(5))
function addOne(num1){
    return num1+1;
}


// console.log(addTwo(5))
const addTwo = function(num2){//this function is known as expression 
    return num2+2;
}
console.log(addTwo(5))