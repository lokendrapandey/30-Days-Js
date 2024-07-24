function throwError() {
    try {
        throw new Error("This is an intentional error.");
    } catch (error) {
        console.error("Error caught: ", error.message);
    }
}

throwError();


function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Cannot divide by zero.");
        }
        return a / b;
    } catch (error) {
        console.error("Error: ", error.message);
    }
}

console.log(divide(4, 2));
console.log(divide(4, 0));



function demonstrateFinally() {
    try {
        console.log("In the try block.");
        throw new Error("Something went wrong!");
    } catch (error) {
        console.error("In the catch block: ", error.message);
    } finally {
        console.log("In the finally block.");
    }
}

demonstrateFinally();


class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

function throwCustomError() {
    try {
        throw new CustomError("This is a custom error.");
    } catch (error) {
        console.error(`${error.name}: ${error.message}`);
    }
}

throwCustomError();


function validateInput(input) {
    try {
        if (!input) {
            throw new CustomError("Input cannot be empty.");
        }
        console.log("Valid input: ", input);
    } catch (error) {
        console.error(`${error.name}: ${error.message}`);
    }
}

validateInput("Hello, World!");
validateInput("");


const randomPromise = new Promise((resolve, reject) => {
    const random = Math.random();
    if (random > 0.5) {
        resolve("Promise resolved!");
    } else {
        reject("Promise rejected!");
    }
});

randomPromise
    .then(message => console.log(message))
    .catch(error => console.error(error));



    async function handleRandomPromise() {
        try {
            const message = await randomPromise;
            console.log(message);
        } catch (error) {
            console.error("Async/Await Error: ", error);
        }
    }
    
    handleRandomPromise();

    
    fetch("https://invalidurl.com")
    .then(response => response.json())
    .catch(error => console.error("Fetch error: ", error));



    async function fetchData() {
        try {
            const response = await fetch("https://invalidurl.com");
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error("Async Fetch Error: ", error);
        }
    }
    
    fetchData();
    