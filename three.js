// for of(loop)
[{},{},{},{}]
const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num)
}
const greeting = "HEllo World"
for (const greet of greeting) {
    // console.log(`for each char is ${greet}`)
}

//Map 
const map = new Map()
map.set('In ', "India")
map.set('usa' , "United states")
map.set('In ', "India")
map.set('Fr',"france")
console.log(map)

for (const [key,value] of map) {
    console.log(key,':-',value)
}

//for in loop 
const myObject = {
    game1:"Spiderman",
    game2:"C++",
    game3:"ruby",
    game4:"swift by apple"
} 
for (const key in myObject) {
    console.log(key)
    console.log(myObject[key])//for values
}

const arr1 = ["java","script","ruby","cpp"]
for (const key in arr1) {
    console.log(key)
    console.log(arr1[key])
}


