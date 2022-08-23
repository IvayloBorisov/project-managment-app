const mongoose = require('mongoose');

const connectDB = async () => {
    const connected = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB connected: ${connected.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;