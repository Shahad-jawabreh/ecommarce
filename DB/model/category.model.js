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
        ref : 'User'
    },
    updatedBy : {
        type : Types.ObjectId ,
        ref : 'User'
    },
},{timestamps : true,
    toJSON : {virtuals : true},
    toObject : {virtuals : true}
}
)

categorySchema.virtual('subcategory',{
    localField : "_id" ,
    foreignField : "categoryId",
    ref : "subcategory"
})
const categoryModel = model('category',categorySchema)
export default categoryModel