import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const con = await mongoose.connect("mongodb+srv://nityam1111:Nityam111Mishra@cluster1.rpvxr.mongodb.net/");
    console.log(`\nMongoDB connected! DB Host: ${con.connection.host}`);
  } catch (error) {
    console.log("MONGODB connection error:", error);
    process.exit(1); // Exit the process on failure
  }
};

export default connectDB;
