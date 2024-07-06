import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
    email: { type: String, required: true, trim: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    isActive: { type: Boolean, default: false } 
});

const AdminModel=mongoose.model("admins",AdminSchema);

export default AdminModel;