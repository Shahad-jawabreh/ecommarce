import userModel from "../../../DB/model/user.model.js";
import bcrypt from 'bcryptjs' 
import SendEmail from "../../utls/sendEmail.js";
import jwt from 'jsonwebtoken'

export const login =async (req,res,next)=>{
    const {email , password}=req.body
    const user = await userModel.findOne({email})
    if(user){
        if(user.status == 'not_active') {
            return res.status(400).json({massege : "you are blocked"})
        }
        
        const checkPassword =await bcrypt.compare(password, user.password)
        if(!checkPassword) {
            return res.status(400).json({massege :"password mismatch"})
        }

        if( !user.confirmEmail ) {
            return res.json({massege : "you dont confirm your email"})
        }
        const token = jwt.sign({_id:user._id ,role : user.role},process.env.secretKeyToken, { expiresIn: '2h' });
        return res.status(200).json({massege : "welcom",token})
    }else{
        return next(new Error("this email is not exist"))
    }
}

export const signup =async (req,res)=>{
    const {userName, password, email} = req.body; 
    const findUser = await userModel.find({email})
    if(findUser.length == 0){
        const hashPassword = await bcrypt.hash(password, parseInt(process.env.SALT))
        const user = await userModel.create({userName, password:hashPassword, email})
        const token = jwt.sign({_id:findUser._id ,role : findUser.role},process.env.secretKeyToken, { expiresIn: '2h' });
        SendEmail(email,req,token)
        return res.json({massege : "added successfully",user})
    }
    return res.json({massege : "you are already exist"})
}