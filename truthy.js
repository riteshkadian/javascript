const usermail = [ 

]
if(usermail){
    console.log("got username")

}
else{
    console.log("dont have user name")
}

// Falsy values

// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN


//truthy values

// true , "0" , 'false' , " " , arr[] , obj{} , Function(){}

const username=[]
if(username.length ===0){
    console.log("empty")
}
const myObj={}
if(Object.keys(myObj).length===0){
    console.log("emmpty")
}

//Nullish Coalescing Operator(??): null undefined 
 let val1;
 val1=5??10
 val2=null??10
 val3=undefined??15 
 val4=null??10??30
 console.log(val4)


 //Ternairy operator 

 //condition ? true:false

 const iceTeaPrice = 100
 iceTeaPrice<=100?console.log("less than 80 "): console.log("more than 80")
   