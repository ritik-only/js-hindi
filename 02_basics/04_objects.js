const tinderUsers = new Object()
const tinderUser = {}

tinderUser.id = "123abc"      
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

 // .id , .name : followings are keys in objects

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "ritik",
            lastname: "jangra"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

const obj3 = { obj1, obj2 }
const obj5 = Object.assign({}, obj1, obj2, obj4)

const obj6 = {...obj1, ...obj2, ...obj4}
console.log(obj3);
console.log(obj5);
console.log(obj6);

const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "b@gmail.com"
    },
    {
        id: 1,
        email: "c@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
// entries : is used create a separte array for each key value pair

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('name'));

console.log(tinderUser.hasOwnProperty('email'));
// hasOwnProperty: is used to seach/find value .


//*********************************************** */

//De structuring  and api


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]