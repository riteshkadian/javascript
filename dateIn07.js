//Dates
let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate);

let CreateMyDate = new Date(2025 , 4 , 23 , 5,4)
console.log(CreateMyDate);
console.log(CreateMyDate.toLocaleString());


//Time stamp 
let myTimeStamp =  Date.now()
console.log(myTimeStamp);
console.log(CreateMyDate.getTime());//output will be in miliseconds 
//convert into seconds 
console.log(Math.floor(Date.now()/1000))
console.log(CreateMyDate.getMonth()+1)
