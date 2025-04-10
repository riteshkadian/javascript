//Immediately invoked Function Expressions (IIFE)
//use this to prevent from scope pollution 
(function chai (){
    console.log("DB Connected");
})()
((name ) => {
    console.log("DB connected 2");
})("ortes")