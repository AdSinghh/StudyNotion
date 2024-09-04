// Import the Mongoose library
const mongoose = require("mongoose");

// Define the user schema using the Mongoose Schema constructor
const userSchema = new mongoose.Schema(
	{
		// Define the firstName field with type String, required, and trimmed
		firstName: {
			type: String, // Field type is String
			required: true, // This field is mandatory
			trim: true, // Remove any leading or trailing whitespace
		},
		// Define the lastName field with type String, required, and trimmed
		lastName: {
			type: String, // Field type is String
			required: true, // This field is mandatory
			trim: true, // Remove any leading or trailing whitespace
		},
		// Define the email field with type String, required, and trimmed
		email: {
			type: String, // Field type is String
			required: true, // This field is mandatory
			trim: true, // Remove any leading or trailing whitespace
		},

		// Define the password field with type String and required
		password: {
			type: String, // Field type is String
			required: true, // This field is mandatory
		},
		// Define the accountType field with type String and enum values of "Admin", "Student", or "Instructor"
		accountType: {
			type: String, // Field type is String
			enum: ["Admin", "Student", "Instructor"], // Possible values for this field
			required: true, // This field is mandatory
		},
		// Define the active field with type Boolean and a default value of true
		active: {
			type: Boolean, // Field type is Boolean
			default: true, // Default value is true
		},
		// Define the approved field with type Boolean and a default value of true
		approved: {
			type: Boolean, // Field type is Boolean
			default: true, // Default value is true
		},
		// Define the additionalDetails field with type ObjectId, required, and references the Profile model
		additionalDetails: {
			type: mongoose.Schema.Types.ObjectId, // Field type is ObjectId
			required: true, // This field is mandatory
			ref: "Profile", // Reference to the Profile model
		},
		// Define the courses field as an array of ObjectId references to the Course model
		courses: [
			{
				type: mongoose.Schema.Types.ObjectId, // Field type is ObjectId
				ref: "Course", // Reference to the Course model
			},
		],
		// Define the token field with type String
		token: {
			type: String, // Field type is String
		},
		// Define the resetPasswordExpires field with type Date
		resetPasswordExpires: {
			type: Date, // Field type is Date
		},
		// Define the image field with type String and required
		image: {
			type: String, // Field type is String
			required: true, // This field is mandatory
		},
		// Define the courseProgress field as an array of ObjectId references to the courseProgress model
		courseProgress: [
			{
				type: mongoose.Schema.Types.ObjectId, // Field type is ObjectId
				ref: "courseProgress", // Reference to the courseProgress model
			},
		],
	},
	// Add timestamps for when the document is created and last modified
	{ timestamps: true }
);

// Export the Mongoose model for the user schema, using the name "user"
module.exports = mongoose.model("user", userSchema);
