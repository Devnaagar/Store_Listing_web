import mongoose from "mongoose";

//defining adminschema
const AdminSchema = new mongoose.Schema({
    email: { type: String, required: true, trim: true }, // Corrected 'trime' to 'trim'
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }, // Automatically set to current date and time
    isActive: { type: Boolean, default: false } // Boolean value with default set to true
});



//model

const AdminModel=mongoose.model("admins",AdminSchema);
// const AdminModel=mongoose.model("admin",AdminSchema);
// const AdminModel=mongoose.model("admin",AdminSchema);

export default AdminModel;