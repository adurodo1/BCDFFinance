import mongoose from 'mongoose';
const Schema=mongoose.Schema;
export const CountrySchema=new Schema({

    Code:{type:String,required:true},
    Currency:{type:String,required:true},
    Country:{type:String,required:true},
});
