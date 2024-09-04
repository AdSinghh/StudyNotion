const mongoose = require("mongoose"); // Import Mongoose to interact with MongoDB

// Define the Profile schema
const profileSchema = new mongoose.Schema({
	// Field for storing gender
	gender: {
		type: String, // Gender is stored as a string
	},

	// Field for storing date of birth
	dateOfBirth: {
		type: String, // Date of birth is stored as a string
	},

	// Field for storing a brief description about the user
	about: {
		type: String, // About field is stored as a string
		trim: true, // Whitespace will be trimmed from the start and end of the string
	},

	// Field for storing contact number
	contactNumber: {
		type: Number, // Contact number is stored as a number
		trim: true, // This is not necessary for numbers; `trim` is generally used for strings
	},
});

// Export the Profile model
module.exports = mongoose.model("Profile", profileSchema); // Create and export a Mongoose model named "Profile" using the schema

