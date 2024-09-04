const mongoose = require("mongoose"); // Import Mongoose to interact with MongoDB

// Define the Section schema
const sectionSchema = new mongoose.Schema({
	// Field for storing the name of the section
	sectionName: {
		type: String, // Section name is stored as a string
	},

	// Field for storing references to sub-sections within the section
	subSection: [
		{
			type: mongoose.Schema.Types.ObjectId, // Type is ObjectId to reference sub-section documents
			required: true, // This field is mandatory
			ref: "SubSection", // Reference to the "SubSection" model
		},
	],
});

// Export the Section model
module.exports = mongoose.model("Section", sectionSchema); // Create and export a Mongoose model named "Section" using the schema
