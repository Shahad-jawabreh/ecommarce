import {Schema,Types,model} from 'mongoose'

const cartSchema = new Schema({
    userId  : {
        type : Types.ObjectId,
        ref : 'User',
        required : true,
        unique : true
    },
    products : [{
        productId : {
            type : Types.ObjectId,
            ref  :'product'
        },
        quantity : {
            type : Number,
            default : 1
        },
        totalPrice : {
            type : Number,    
        }
    }]
})

const cartModel = model('cart',cartSchema)

export default cartModel