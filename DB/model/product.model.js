import mongoose, { Types,model,Schema } from "mongoose";

const productSchema = new Schema({
    name : {
        type : String , 
        required : true,
        unique : true
    },
    mainImage : {
        type : Object ,
        required : true
    },
    subImage :[{
        type : Object ,
        required : true
    }],
    slug : {
        type : String ,
        required : true
    },
    stock : {
        type : Number , 
        required : true,
        default : 1
    },
    price : {
        type : Number , 
        required : true
    },
    discount : {
        type : Number ,
        default : 0
    },
    priceAfterDiscount : {
        type : Number 
    },
    categoryId : {
        type : Types.ObjectId ,
         ref : 'category',
         required : true
    },
    subCategoryId : {
        type : Types.ObjectId ,
         ref : 'subcategory',
         required : true
    },
    description : {
        type : String
    },
    status : {
        type : String , 
        enum  : ['active', 'not_active'],
        default : 'active'
    },
    sizes : [{
        type : String , 
        enum  : ['s','m' ,'l']
    }],
    colors : [{
        type : String 
    }],
    createdBy : {
        type : Types.ObjectId,
        ref : 'User'
    },
    updatedBy : {
        type : Types.ObjectId,
        ref : 'User'
    }


},{timestamps : true,
    toJSON : {virtuals : true} ,
    toObject : {virtuals : true}

}
)
productSchema.virtual('reviews',
   { ref : 'reviews',
    localField : '_id' ,
    foreignField : 'productId'
   }

)
const productModel = model('product',productSchema)
export default productModel