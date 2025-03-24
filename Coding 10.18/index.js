/*
 Pseudocode:
 Create a new Promise using the Promise constructor
     Simulate an asynchronous operation
         Generate the current timestamp
         If the timestamp is even, call resolve with the value to fulfill the Promise
         Otherwise, call reject with an error to reject the Promise
     Set a timeout of 1 second to simulate an asynchronous operation

 Chain the Promise using the then() and catch() methods
     The Promise was fulfilled, log the value to the console
     The Promise was rejected, log the error to the console
*/

const promiseTask = new Promise((resolve, reject) => {
    setTimeout(() => {
        const timestamp = Date.now();
        if (timestamp % 2 === 0) {
            resolve("Timestamp is even");
        } else {
            reject(new Error("Timestamp is odd"));
        }
    }, 1000);
})


promiseTask.
    then((value) => {
        console.log(value);
    }
    )
    .catch((error) => {

        console.log("An error has occured: " + error);

    });