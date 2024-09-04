const mongoose = require("mongoose"); // Import Mongoose to interact with MongoDB
const mailSender = require("../utils/mailSender"); // Import the mail sender utility function
const emailTemplate = require("../mail/templates/emailVerificationTemplate"); // Import the email verification template

// Define the OTP schema
const OTPSchema = new mongoose.Schema({
	email: {
		type: String, // Email is stored as a string
		required: true, // Email is a required field
	},
	otp: {
		type: String, // OTP (One-Time Password) is stored as a string
		required: true, // OTP is a required field
	},
	createdAt: {
		type: Date, // CreatedAt stores the date and time when the OTP was created
		default: Date.now, // Default value is the current date and time
		expires: 60 * 5, // Document expires (and is automatically deleted) 5 minutes after creation
	},
});

// Define a function to send verification emails
async function sendVerificationEmail(email, otp) {
	// Create a transporter to send emails

	// Define the email options

	// Send the email
	try {
		const mailResponse = await mailSender(
			email,
			"Verification Email", // Subject of the email
			emailTemplate(otp) // HTML content of the email
		);
		console.log("Email sent successfully: ", mailResponse.response); // Log success message
	} catch (error) {
		console.log("Error occurred while sending email: ", error); // Log error message if email fails to send
		throw error; // Rethrow the error to be handled by the caller
	}
}

// Define a pre-save hook to send an email after the document has been saved
OTPSchema.pre("save", async function (next) {
	console.log("New document saved to database"); // Log message indicating a new document is saved

	// Only send an email if the document is new
	if (this.isNew) {
		await sendVerificationEmail(this.email, this.otp); // Send the verification email
	}
	next(); // Proceed to the next middleware or save operation
});

// Create and export the OTP model based on the defined schema
const OTP = mongoose.model("OTP", OTPSchema); // Create a model named "OTP" using the schema

module.exports = OTP; // Export the OTP model for use in other parts of the application
