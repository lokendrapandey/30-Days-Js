// Save a string value to localStorage
localStorage.setItem('myString', 'Hello, World!');

// Retrieve the string value from localStorage
// const retrievedString = localStorage.getItem('myString');
console.log('Retrieved String:', retrievedString);




// Save an object to localStorage
const myObject = { name: 'John Doe', age: 30 };
localStorage.setItem('myObject', JSON.stringify(myObject));

// Retrieve and parse the object from localStorage
const retrievedObject = JSON.parse(localStorage.getItem('myObject'));
console.log('Retrieved Object:', retrievedObject);











// Save a string value to sessionStorage
sessionStorage.setItem('myString', 'Hello, World!');

// Retrieve the string value from sessionStorage
const retrievedString = sessionStorage.getItem('myString');
console.log('Retrieved String:', retrievedString);





// Save an object to sessionStorage
const myObject = { name: 'Jane Doe', age: 25 };
sessionStorage.setItem('myObject', JSON.stringify(myObject));

// Retrieve and parse the object from sessionStorage
const retrievedObject = JSON.parse(sessionStorage.getItem('myObject'));
console.log('Retrieved Object:', retrievedObject);
