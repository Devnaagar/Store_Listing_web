import mongoose from "mongoose";

//defining cityschema
const CitySchema = new mongoose.Schema({
    city_name: {type:String , required :true , trim: true},
    country_name: {type:String , required: true , trim: true},
    createdAt:{type:Date, default: Date.now},
    status: {type:Boolean,default:true}
});

const CityModel=mongoose.model("cities",CitySchema);

export default CityModel;
