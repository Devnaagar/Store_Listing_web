import mongoose from "mongoose";

const StoreSchema = new mongoose.Schema({
    store_name: {type:String , required :true , trim: true},
    city_ref: {type: mongoose.Schema.Types.ObjectId, ref: 'cities'},
    address:{type:String,required:true,trim:true},
    latitude:{type:String,required:true,trim:true},
    longitude:{type:String,required:true,trim:true},
    landmark_name:{type:String,required:true,trim:true},
    landmark_dist:{type:String,required:true,trim:true},
    createdAt:{type:Date, default: Date.now},
    status: {type:Boolean,default:true}
});

const StoreModel=mongoose.model("stores",StoreSchema);

export default StoreModel;
