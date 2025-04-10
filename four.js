//for each loop
const coding = ["ruby ", " cpp", " java","c++","python "]

coding.forEach(function(val){
    console.log(val)
})

coding.forEach((item)=>{
    console.log(item)
})

function printme(item){
    console.log(item)
}
coding.forEach(printme)


const mycoding =[
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
]
mycoding.forEach((item)=>{
    console.log(item.languageFileName)
})