//Arrays
const myArray = [1,2,3,4,5]
// console.log(myArray);
// console.log(myArray.length);
const arr2 = new Array(12,32,2)
// console.log(arr2[0]);


//Array Methods

myArray.push(6)
myArray.push(7)
myArray.pop()
myArray.unshift(9)
myArray.shift()
// console.log(myArray.includes(1))
// console.log(myArray.indexOf(1))
// console.log(myArray);
const newArray = myArray.join()
// console.log(typeof(newArray));


//slice and splice 
console.log("A" ,myArray);
const mya1 = myArray.slice(1,3)
console.log(mya1)
console.log("B" , myArray);

console.log("C" , myArray);
const mna2 = myArray.splice(1,3)
console.log("C" , myArray);
console.log(mna2)

