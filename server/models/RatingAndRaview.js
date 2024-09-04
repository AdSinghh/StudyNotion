const mongoose = require("mongoose"); // Import Mongoose to interact with MongoDB

// Define the RatingAndReview schema
const ratingAndReviewSchema = new mongoose.Schema({
	// User who gave the rating and review
	user: {
		type: mongoose.Schema.Types.ObjectId, // Reference to a user document
		required: true, // This field is mandatory
		ref: "user", // Reference to the "user" model
	},

	// Rating given by the user
	rating: {
		type: Number, // Rating is stored as a number
		required: true, // This field is mandatory
	},

	// Review given by the user
	review: {
		type: String, // Review is stored as a string
		required: true, // This field is mandatory
	},

	// Course being reviewed
	course: {
		type: mongoose.Schema.Types.ObjectId, // Reference to a course document
		required: true, // This field is mandatory
		ref: "Course", // Reference to the "Course" model
		index: true, // Create an index for faster queries
	},
});

// Export the RatingAndReview model
module.exports = mongoose.model("RatingAndReview", ratingAndReviewSchema); // Create and export a Mongoose model named "RatingAndReview" using the schema
