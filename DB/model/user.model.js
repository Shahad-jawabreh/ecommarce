import mongoose from "mongoose";

const userSchema = mongoose.Schema({
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
const userModel = mongoose.model('User',userSchema)
export default userModel