// Q1. Demonstrate an example of callback hell by nesting multiple callbacks.
/*
Step 1: Define a function that takes a callback and performs an asynchronous action (e.g., setTimeout).
Step 2: Within this function, create another call to an asynchronous function with another callback.
Step 3: Repeat the nesting a few times (at least three levels deep).
Step 4: Print a message at each level to see the nested structure.
*/
function levelOne(callback) {
    setTimeout(() => {
        console.log("Level 1");
        callback();
    }, 1000);
}

function levelTwo(callback) {
    levelOne(() => {
        setTimeout(() => {
            console.log("Level 2");
            callback();
        }, 1000);
    });
}

function levelThree(callback) {
    levelTwo(() => {
        setTimeout(() => {
            console.log("Level 3");
            callback();
        }, 1000);
    });
}

levelThree(() => {
    console.log("End of callback hell example");
});

// Q2. Implement error handling with .catch() in a Promise chain.
/*
Step 1: Create a function that returns a Promise, with the chance of rejecting.
Step 2: Chain .then() to handle the resolved state.
Step 3: Attach a .catch() to handle any errors and log an error message.
 */
function fetchData() {
    return new Promise((resolve, reject) => {
        let success = Math.random() > 0.5;
        success ? resolve("Data fetched") : reject("Fetch failed");
    });
}

fetchData()
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));

// Q3. Implement a basic timer with setInterval that stops after 5 seconds.
/*
Step 1: Define a function that uses setInterval to print the time every second.
Step 2: Track elapsed time in a variable.
Step 3: Use clearInterval() to stop the timer after 5 seconds.
 */
function startTimer() {
    let seconds = 0;
    let interval = setInterval(() => {
        seconds++;
        console.log(`Time: ${seconds}`);
        if (seconds >= 5) clearInterval(interval);
    }, 1000);
}
startTimer();

// Q4. Show how to handle an error in a Promise-based function with .catch().
/*
Step 1: Create a function that returns a Promise with potential rejection.
Step 2: Call the function and chain a .catch() to handle any errors.
Step 3: Log the error message within .catch().
*/
function riskyTask() {
    return new Promise((resolve, reject) => {
        let success = Math.random() > 0.7;
        success ? resolve("Task completed") : reject("Task failed");
    });
}

riskyTask()
    .catch((error) => console.error("Caught error:", error));

// Q5. Use Promise.all() to execute two Promises concurrently and log both results.
/*
Step 1: Create two functions that return Promises with different delays.
Step 2: Use Promise.all() with the two functions.
Step 3: Log the results once both Promises have resolved.
*/
function taskOne() {
    return new Promise((resolve) => setTimeout(() => resolve("Task 1 completed"), 2000));
}

function taskTwo() {
    return new Promise((resolve) => setTimeout(() => resolve("Task 2 completed"), 1000));
}

Promise.all([taskOne(), taskTwo()]).then((results) => {
    console.log("All tasks finished:", results);
});

// Q6. Write a function using setTimeout that prints "Hello" after 2 seconds.
/*
Step 1: Define a function named printHello.
Step 2: Inside the function, use setTimeout.
Step 3: Set the delay to 2000 milliseconds (2 seconds).
Step 4: Within setTimeout, log "Hello" to the console.
 */
function printHello() {
    setTimeout(() => console.log("Hello"), 2000);
}
printHello();

// Q10. Implement a callback function to multiply two numbers and print the result.
/*
Step 1: Define a function named multiply.
Step 2: Make multiply accept 3 parameters: two numbers and a callback.
Step 3: Inside multiply, call the callback with the result.
Step 4: Define a callback function that logs the result to the console.
Step 5: Call multiply with 2 numbers and the callback function.
*/
function multiply(num1, num2, callback) {
    let result = num1 * num2;
    callback(result);
}

function logResult(result) {
    console.log(`Multiplication result is:${result}`);
}

multiply(4, 2, logResult);