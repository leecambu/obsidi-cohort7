/*
 Pseudocode:
 // Define an asynchronous function using the async keyword
    // Simulate an asynchronous operation with a Promise that resolves after 4 second
    // Return an object with a message property having value "Data fetched successfully"

 // Call the asynchronous function using await
    // Under try block
        // Print "Fetching data..."
        // Call getData and wait for the data to be fetched using await
        // Log the message property of the returned object to the console
    //Under catch block
        // Log any errors to the console concatinating "Error fetching data:" with the error

 // Call the startTask function to start the program
*/

const getData = async () => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    return { message: "Data fetched successfully" };
}

const startTask = async () => {
    try {
        console.log("Fetching Data...");
        const data = await getData();
        console.log(data.message);
    } catch (error) {
        console.log("Error fetching data", error)
    }
}

startTask();