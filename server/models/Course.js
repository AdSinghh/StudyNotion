const mongoose = require("mongoose"); // Import Mongoose to interact with MongoDB

// Define the Courses schema
const coursesSchema = new mongoose.Schema({
    courseName: { type: String }, // The name of the course
    courseDescription: { type: String }, // Description of the course
    instructor: {
        type: mongoose.Schema.Types.ObjectId, // Type is ObjectId for referencing other documents
        required: true, // This field is mandatory
        ref: "user", // References the "user" model
    },
    whatYouWillLearn: {
        type: String, // Describes what students will learn
    },
    courseContent: [
        {
            type: mongoose.Schema.Types.ObjectId, // Array of ObjectId references
            ref: "Section", // References the "Section" model
        },
    ],
    ratingAndReviews: [
        {
            type: mongoose.Schema.Types.ObjectId, // Array of ObjectId references
            ref: "RatingAndReview", // References the "RatingAndReview" model
        },
    ],
    price: {
        type: Number, // Price of the course
    },
    thumbnail: {
        type: String, // URL or path to the course thumbnail image
    },
    tag: {
        type: [String], // Array of tags for categorizing the course
        required: true, // This field is mandatory
    },
    category: {
        type: mongoose.Schema.Types.ObjectId, // Type is ObjectId for referencing other documents
        // required: true, // Optional: uncomment if this field should be mandatory
        ref: "Category", // References the "Category" model
    },
    studentsEnrolled: [
        {
            type: mongoose.Schema.Types.ObjectId, // Array of ObjectId references
            required: true, // This field is mandatory
            ref: "user", // References the "user" model
        },
    ],
    instructions: {
        type: [String], // Array of instructions related to the course
    },
    status: {
        type: String, // Status of the course
        enum: ["Draft", "Published"], // Only these values are allowed
    },
    createdAt: {
        type: Date, // Timestamp of when the course was created
        default: Date.now, // Default value is the current date and time
    },
});

// Export the Courses model
module.exports = mongoose.model("Course", coursesSchema); // Create and export the "Course" model based on the schema

module.exports = mongoose.model("Course", coursesSchema);
