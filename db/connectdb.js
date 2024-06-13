import mongoose from "mongoose";

const connectDB = async (DATABASE_URL)=> {
//     console.log("Initializing database connection...");
//      console.log(`Connecting to: ${DATABASE_URL}`);
    try {
        const DB_OPTIONS={
            dbName: "store_listing"
        };
        await mongoose.connect(DATABASE_URL,DB_OPTIONS);
        console.log("connected done");
    } catch (error) {
        console.log(error);
    }
};

export default connectDB;