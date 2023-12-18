import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    const connectDB = await mongoose.connect(process.env.MONGO_URI);
    console.log(`db connected : ${connectDB.connection.host}`);
  } catch (error) {
    console.log(`db failed : ${error}`);
  }
};

export default connectDatabase;
