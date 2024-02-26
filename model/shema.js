import mongoose  from "mongoose";
const usershema=mongoose.Schema({
    name:{
        type:String,
        required:true,
     },
     age:{
       type:Number,
     },
     mobile:{
        type:String,
        required:true["mobile num is requ"],
     },
     email:{
        type:String,
        required:true,
        unique:true,
     },
     address:{
        type:String,

     },
     salary:{
        type:Number,
        required:true,
     },
     worktype:{
         type:["vater","manager","cook"],

     }
   
})
const UserSchemaModal=mongoose.model("user",usershema)
export default UserSchemaModal;