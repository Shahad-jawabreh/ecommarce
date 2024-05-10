import mongoose, { Types,model,Schema } from "mongoose";

const subCategorySchema = new Schema({
    categoryId : {
       type : Types.ObjectId ,
       required : true , 
       ref : 'category'
    },
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

const subCategoryModel = model('subcategory',subCategorySchema)
export default subCategoryModel