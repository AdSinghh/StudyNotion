const cloudinary = require("cloudinary").v2; //! Cloudinary is being required

// Define and export a function to configure Cloudinary
exports.cloudinaryConnect = () => {
    try {
        // Configure Cloudinary with credentials from environment variables
        cloudinary.config({
            //!    ########   Configuring the Cloudinary to Upload MEDIA ########
            cloud_name: process.env.CLOUD_NAME, // Set the Cloudinary cloud name
            api_key: process.env.API_KEY,       // Set the Cloudinary API key
            api_secret: process.env.API_SECRET, // Set the Cloudinary API secret
        });
    } catch (error) {
        // Log any error that occurs during the configuration
        console.log(error);
    }
};
