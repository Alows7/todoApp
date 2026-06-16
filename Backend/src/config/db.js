import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("Connected successfully to database");
  } catch (error) {
    console.log(`Error when connecting to database : ${error}`);
    process.exit(1);
  }
};
