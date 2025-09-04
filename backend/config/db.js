import mongoose from "mongoose";

export const connectDB = async (req, res) => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DataBase is Connected")
    } catch (error) {
        console.log("Error in DataBase Connections", error);
    }
}