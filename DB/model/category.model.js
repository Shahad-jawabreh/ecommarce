import mongoose, { Types } from "mongoose";

const categorySchema = mongoose.Schema({
    name : {
        type : String , 
        required : true
    },
    image : {
        type : Object 
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
        ref : 'user',
        required : true
    },
    updatedBy : {
        type : Types.ObjectId ,
        ref : 'user',
        required : true
    },
},{timestamps : true})
const categoryModel = mongoose.model('User',categorySchema)
export default categoryModel