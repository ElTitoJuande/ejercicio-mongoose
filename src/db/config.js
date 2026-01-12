import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;
const connectDB = async () => {
try {
    const database = await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB database:", database.connection.name);
  } catch (error) { 
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  } 
};

export default connectDB;
