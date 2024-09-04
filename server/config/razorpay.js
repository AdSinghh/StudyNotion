const Razorpay = require("razorpay"); // Import the Razorpay library to interact with Razorpay's payment gateway

// Create and export an instance of Razorpay with API keys from environment variables
exports.instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY, // The public key ID for Razorpay API, loaded from environment variables
    key_secret: process.env.RAZORPAY_SECRET, // The private key secret for Razorpay API, also loaded from environment variables
});
