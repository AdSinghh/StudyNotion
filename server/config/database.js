const mongoose = require("mongoose"); // Import the mongoose library for MongoDB interactions
require("dotenv").config(); // Load environment variables from a .env file

// Define and export a function to connect to the MongoDB database
exports.connect = () => {
    // Connect to the MongoDB database using the connection URL from environment variables
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true, // Use the new URL parser to avoid deprecation warnings
        useUnifiedTopology: true, // Use the new server discovery and monitoring engine
    })
    .then(() => console.log("DB Connected Successfully")) // Log success message if the connection is successful
    .catch((error) => { // Handle any errors that occur during connection
        console.log("DB Connection Failed"); // Log a failure message
        console.error(error); // Log the actual error
        process.exit(1); // Exit the process with a failure code
    });
};
