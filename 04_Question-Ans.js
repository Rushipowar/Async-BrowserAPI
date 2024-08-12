// Callbacks:-
// A callback is a function passed as an argument to another function, to be executed once an asynchronous 
//operation is completed.

// Example:-
function getData(callback) {
    setTimeout(() => {
      callback('Data received');
    }, 1000);
  }
  
  getData((data) => {
    console.log(data);
  });
  

// Advantages:-
//   1.Simplicity: Easy to understand and use for simple asynchronous operations.
//   2.Widespread Use: Well-known and supported in all JavaScript environments.

// Disadvantages:-
//   1.Overhead: Callbacks can add overhead to the code.
//   2.Compatibility: Callbacks can cause compatibility issues with older browsers.
//   3.Callback Hell: When multiple asynchronous operations are chained, the code can 
//     become deeply nested and difficult to read and maintain.


// Promises:-
// A Promise is an object representing the eventual completion (or failure) of an asynchronous operation 
// and its resulting value.

// Example:-
function getData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data received');
      }, 1000);
    });
  }
  
  getData()
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });

    
// Advantages:-
//   1.Simplicity: Easy to understand and use for simple asynchronous operations.
//   2.Chaining: Promises allow chaining of multiple asynchronous operations, making the code more readable and manageable.

// Disadvantages:-
//   1.Learning Curve: Promises introduce new concepts which might take some time to learn for developers familiar 
//     only with callbacks.
//   2.Browser Compatibility: Older browsers may not support Promises natively, though this can be mitigated using polyfills.


// Why Promises are Preferred:-
//Readability and Maintainability:- Promises make the code more readable and easier to maintain by avoiding deeply nested 
//                                 callbacks and providing a cleaner, linear flow of asynchronous operations.
// Error Handling:- Promises provide a more robust error handling mechanism, making it easier to catch and handle errors 
//                 in asynchronous code.
// Chaining and Composition:- Promises support chaining, making it straightforward to sequence multiple asynchronous 
//                           operations and manage their results in a more readable manner.
// Integration with Modern JavaScript:- Promises integrate seamlessly with modern JavaScript features like async/await, 
//                                     further simplifying asynchronous code management.

async function fetchData() {
    try {
      const data1 = await getData();
      const data2 = await getMoreData(data1);
      const result = await processData(data2);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
  fetchData();
  