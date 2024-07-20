
const name = "Lokendra pandey";
const age = 434;
console.log(`my name is ${name} and age is ${age}`);

console.log(`my name is lokendra pandey 
            and i am recently graduate in btech
            form lnct college and i completed lots
             of internship`)

 let FriendList = ["Aniket", "Lokendra", "Naman", "Akshat", "Risharth"];
let bestFriend = ([First, Second] = FriendList);
console.log(First, Second);

let a = {
    title: "shivam ",
    author: "father",
    ReleaseYear: 2002,
};
let { title, author } = a;
console.log(`Title is: ${title} and author is: ${author}`);

const arr = ["shivam", "lokendra", "naman", "aniket","pushpa"];
const arr2 = [...arr, "a", "b", "c"];
console.log(arr2);

function sum(...numbers) {
    return numbers.reduce((total, numbers) => total + numbers, 0);
}
console.log(sum(2, 5, 6, 7, 4)); //Outpur is 24
console.log(sum(2, 5, 6, 7, 4, 30)); //Outpur is 54



function multiply(num1, num2 = 1) {
    return num1 * num2;
}
console.log(multiply(20, 2)); //Output 40
console.log(multiply(20)); // Output 20


const friendName = "Aniket";
const friendAge = 22;
const friendDetail = {
    friendName,
    friendAge,
    Greeting() {
        return `Hello ${friendName} Good Morning your age is ${friendAge}`;
    },
};
console.log(friendDetail.Greeting());




const moviename = "Kalki";
const actor = "Prabhas";
const moviedetail = {
    [moviename]: "Bahubali",
    [actor]: "Tamannah",
    details() {
        return `Movies name is ${this[moviename]} and actor is ${this[actor]}`;
    },
};
console.log(moviedetail.details());

