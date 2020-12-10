# Converting-a-Callback-to-a-Promise

A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

Promise has 3 types:- 
1. Pending: The initial state indicating that the asynchronous operation is not complete.
2. Fulfilled: Meaning that the asynchronous operation completed successfully.
3. Rejected: Meaning that the asynchronous operation failed.


Difference between callbacks and promises is that with callbacks you tell the executing function what to do when the asynchronous task completes, whereas with promises the executing function returns a special object to you (the promise).


Most of the asynchronous functions that accept a callback in Node.js, such as the fs (file system) module, have a standard style of implementation - the callback is passed as the last parameter.

Refer the code file for the example

