const mongoose = require("mongoose"); // Import Mongoose to interact with MongoDB

// Define the courseProgress schema
const courseProgress = new mongoose.Schema({
  courseID: {
    type: mongoose.Schema.Types.ObjectId, // Data type is ObjectId for referencing another document
    ref: "Course", // References the "Course" model
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId, // Data type is ObjectId for referencing another document
    ref: "user", // References the "user" model
  },
  completedVideos: [
    {
      type: mongoose.Schema.Types.ObjectId, // Array of ObjectId references
      ref: "SubSection", // References the "SubSection" model
    },
  ],
});

// Export the courseProgress model
module.exports = mongoose.model("courseProgress", courseProgress); // Create and export the "courseProgress" model based on the schema
