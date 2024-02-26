import mongoose  from "mongoose";
const menushema=mongoose.Schema({
    name:{
        type:String,
        required:true,
     },
    price:{
        type:Number,

    },
    quntity:{
        type:String,
    }
})
const MenuSchemaModal=mongoose.model("menuItem",menushema)
export default MenuSchemaModal;