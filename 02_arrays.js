const marvel_heros = ["spiderman ","Hulk","thor"]
const dc_heros =["flash" , " superman ","batman"]
// marvel_heros.push(dc_heros);
// console.log(marvel_heros)
// console.log(marvel_heros[3][0])
const all_heros  = marvel_heros.concat(dc_heros)
// console.log(all_heros)

const all_new_heros = [...marvel_heros,...dc_heros];//spread method 
console.log(all_new_heros)

let another_array = [1,2,3,[4,5,6],7,8,[9,10,11],12];
const real_another_array = another_array.flat(Infinity); 
console.log(real_another_array)


console.log(Array.isArray("Ritesh"))
console.log(Array.from("Ritesh"))


const socre1 = 100
const score2 =200
const socre3 = 300
console.log(Array.of(socre1,score2,socre3))
