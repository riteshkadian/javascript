//objects created using constructor method 

// const tinderuser = new Object()//singleton object
const tinderuser={} //both above can be used to create object. this method is non singleton object 
tinderuser.name = "ritesh"
tinderuser.age=19
tinderuser.id="ritesh2123"
tinderuser.isloggedin=false;
// console.log(tinderuser)

const regularname = {
    email :"irteshkadian02@mgial.cpm",
    username:{
        fullname:{
            firstname:"ritesh",
            lastname:"Kadian" 
        }
    }
}
// console.log(regularname.username.fullname)

const obj1 = {
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}

// const obj3={obj1,obj2}
// const obj3 = Object.assign(obj1,obj2)
//can be written as :-
// const obj4 = Object.assign({},obj1,obj2)

// spread method can be be used concatenate 
const obj3={...obj1,...obj2 }

// console.log(obj3);

const user = [
    {
        email:"ritehs@gmaik.com",
        age:20
    },
    {
        email:"ritehs@gmaik.com",
        age:20
    },
    {
        email:"ritehs@gmaik.com",
        age:20
    }
]
console.log(user[2].email)

//if we want to access the keys 
console.log(Object.keys(tinderuser))//the output(keys) will be in array form 
//similary we can also access the values
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))
// hasownProperty (to check if the key is there )
console.log(tinderuser.hasOwnProperty('isLoggedIn'))



//Destructuring 

const course ={
    coursename:"Javascript",
    price:"999",
    courseTeacherName:"Ritesh"
}
// course.courseTeacherName;
const {courseTeacherName}=course
// console.log(courseTeacherName);
const {courseTeacherName:Instructor}=course;
console.log(Instructor);



