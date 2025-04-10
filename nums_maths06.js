const score = 400
console.log(score) 
const balance = new Number(100) 
console.log((balance))
console.log(balance.toString().length)
// console.log(typeof(balance))
console.log(balance.toFixed(3))

const otherName = 100.23525
console.log(otherName.toPrecision(3)); 
const name = 1000000
console.log(name.toLocaleString('en-IN'))



//*********************MATHS***********************//

console.log(Math)
console.log(Math.abs(-3));
console.log(Math.round(3.324));
console.log(Math.ceil(3.5));
console.log(Math.floor(3.9));
console.log(Math.min(2,3,4,2,-1))
console.log(Math.max(2,3,4,2,-1))
console.log(Math.random())
console.log((Math.random()*10)+1)//value always lies between 0 and 1 

console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)