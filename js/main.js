// Asynchronous js (1.Call back function, 2.Promises)

// (Line 5 to 7 is example for a basic Synchronous code) 

// console.log('First');
// console.log('Second');
// console.log('Third');


// (Line 12 to 17 is example for a basic asynchronous code)

// console.log('First');

//Note: set timeout for 2 minutes
// setTimeout(() => console.log('second'), 2000);

// console.log('Third');

//Callback function Topic:A basic example of call back function code is given above where we are using settimout method to execute a particular function after a particular time(Note: Callback function is not in use now because of its problems of confusing and complicated code style (i.e,) using this call back function(A callback function is basically function inside another function and another function inside that function and it keeps on going to many functions inside another functions) will look easier in a small piece of code but when it is used in a projet of thousands of line, then the code will look so difficult to interpret)

// Promises Topic:

// Promise converts js from synchronous to asynchronous.

// Three states in promise:
// 1.Pending
// 2.Fulfilled
// 3.Rejected

// An example for promise is given below: 

const myPromise = new Promise((resolve, reject) => {
    const error = false;
    if(!error){
        resolve("Yes! resolved the promise")
    } else {
        reject("No! rejected the promise.")
    }
})

console.log(myPromise) //In this line, the line "Yes! resolved the promise" alone wont be printed as output. Instead, the promise will return weather the promise is "fullfilled" or "rejected" along with the output statement "Yes! resolved the promise"

// Inorder to get the statement "Yes! resolved the promise" alone as output, we should use "tenables". (i.e.,) calling the variable say like "myPromise" with .then method and passing a parameter say like "value" in console as shown below. Likewise, .catch method is used to print the error statement if the promise rejected and error occurs.

myPromise.then(value => {
    console.log(value);
}).catch(err => {
    console.log(err)
})

//Another example for promise is given below:

const myNextPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve ("myNextPromise resolved!")
    }, 3000);
})

myNextPromise
.then(value => {
    console.log(value);
})
.catch(err => {
    console.log(err)
})

// In the above two examples, we have seen about the two states of promise "fulfilled" and "rejected". In the below example, we will discuss about the state "pending" in promise with the help of "fetch" method!

const users = fetch("https://jsonplaceholder.typicode.com/users").then(response => {
    return response.json();
}).then(users => {
    console.log(users);
})