import userModel from "../../../DB/model/user.model.js";
import jwt from 'jsonwebtoken'

export const getInforamtion =(req,res,next)=>{
   return res.status(200).json({massege :"success"})
}

export const confirmEmail = async(req,res,next)=>{
   const {token} = req.params ;
   const decoded = jwt.verify(token, process.env.secretKeyToken);
   const Update = await userModel.findByIdAndUpdate({_id:decoded._id},{confirmEmail: 'true'})
   return res.json({massege  : "update successful"})
}