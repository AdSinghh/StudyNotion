const mongoose = require("mongoose"); // Import Mongoose to interact with MongoDB

// Define the SubSection schema
const SubSectionSchema = new mongoose.Schema({
	// Field for the title of the sub-section
	title: { 
		type: String, // Title is stored as a string
	},

	// Field for the time duration of the sub-section
	timeDuration: { 
		type: String, // Time duration is stored as a string
	},

	// Field for a description of the sub-section
	description: { 
		type: String, // Description is stored as a string
	},

	// Field for the URL of the video associated with the sub-section
	videoUrl: { 
		type: String, // Video URL is stored as a string
	},
});

// Export the SubSection model
module.exports = mongoose.model("SubSection", SubSectionSchema); // Create and export a Mongoose model named "SubSection" using the schema
