// objects can be defined using 2 methods :- 1. Literals 2. Constructer
//singleton :- is made using constructer not created in literals
 
//object literals
//key-value pairs are used in objects
const mySym = Symbol["key1"] 
const myObj = {
    name:"ritesh",
    "fullname":"Ritesh Kadian",
    [mySym]:"mykey1",//symbol is created by using []
    age:19,
    location:"jaipur",
    email:"ritesh@gmail.com",
    isLoggedIn:false,
    lastLoggedInDays:["monday","tuesday","wednesday","thrusday","friday"]
}
// Object.create - consturctor method 
// console.log(myObj.email);
// console.log(myObj["email"]);
// console.log(myObj.email)
// console.log(myObj[mySym])


myObj.email="Riteshkadian@chatgpt.com"
// console.log(myObj.email);
// Object.freeze(myObj);//changes are not made in the object
myObj.email="Riteshkadian@google.com"//this time changes are not made beacuse of freeze operation
// console.log(myObj);



//function in object
myObj.greeting=function(){
    console.log("Hello Js user");
}
myObj.greetingtwo=function(){
    console.log(`HEllo Js user, ${this.age}`)//this is known as interpolation method we can access any property of object 
}
console.log(myObj.greetingtwo())

