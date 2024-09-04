const mongoose = require("mongoose"); // Import the Mongoose library to interact with MongoDB

// Define the Tags schema
const categorySchema = new mongoose.Schema({
    name: {
        type: String, // The 'name' field is of type String
        required: true, // This field is required
    },
    description: { 
        type: String // The 'description' field is optional and of type String
    },
    courses: [
        {
            type: mongoose.Schema.Types.ObjectId, // Each item in the array is an ObjectId type
            ref: "Course", // Refers to the "Course" model, establishing a relationship
        },
    ],
});

// Export the Tags model
module.exports = mongoose.model("Category", categorySchema); // Create and export the "Category" model based on the defined schema
