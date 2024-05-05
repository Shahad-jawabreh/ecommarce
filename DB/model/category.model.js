import mongoose, { Types,model,Schema } from "mongoose";

const categorySchema = new Schema({
    name : {
        type : String , 
        required : true,
        unique : true
    },
    image : {
        type : Object ,
        required : true
    },
    slug : {
        type : String ,
        required : true
    },
    status : {
        type : String,
        default : 'active',
        enum : ['active', 'not_active']
    },
    createdBy : {
        type : Types.ObjectId ,
        ref : 'user'
    },
    updatedBy : {
        type : Types.ObjectId ,
        ref : 'user'
    },
},{timestamps : true})
const categoryModel = model('category',categorySchema)
export default categoryModel