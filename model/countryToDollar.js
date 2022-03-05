import mongoose from 'mongoose';
const Schema=mongoose.Schema;
export const CurrencyToDollarSchema=new Schema({
    Currency:{type:String,required:true},
    DollarAmount:{type:Number,required:true},
   
  
});
