import mongoose , { Schema ,model} from "mongoose";

const userSchema =new Schema({
    userName : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    gender : {
        type : String,
        enum : ['male', 'female']
    },
    image : {
        type : Object
    },
    phone : {
        type : String
    },
    address : {
        type : String
    },
    confirmEmail : {
        type : Boolean,
        default : false
    },
    status : {
        type : String,
        default : 'active',
        enum : ['active', 'not_active']
    },
    role :{
        type : String,
        default : 'user',
        enum : ['user', 'admin']
    }
},{timestamps : true})
const userModel = model('User',userSchema)
export default userModel