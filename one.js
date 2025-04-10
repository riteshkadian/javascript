// for
for (let index=0;index<10;index++){
    const element =index
    console.log(element)
}

for(let i =0;i<=10;i++){
    console.log(`outerloop:${i}`)
    for(let j =0;j<=10;j++){
        // console.log(`innerloop : ${j} and inner loop ${i} `)
        console.log(i + '*' +  j + '=' + i*j)
    }
}

let myArray = ["rief" , "dfw", "fdgs"]
console.log(myArray.length)
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element)
    
}

//break and Continue 



for (let i = 0; i <=20; i++) {
   if(i==5){
    console.log(`detected 5`)
    break
   }
    console.log(`value of i is:${i}`)
    
}
for (let i = 0; i <=20; i++) {
   if(i==5){
    console.log(`detected 5`)
    continue
   }
    console.log(`value of i is:${i}`)
    
}
