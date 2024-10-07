import userModel from "../../../DB/model/user.model.js";
import jwt from 'jsonwebtoken' ;

export const confirmEmail =async (req,res,next)=>{
    const token = req.params.token ;
    const decode = jwt.verify(token, process.env.secretKeyToken); 
    const user = await userModel.findByIdAndUpdate( decode._id,
      {confirmEmail:true}) ;
   
   return res.json({massege : "confirm email successfully"})
}

export const getUser = async (req, res) => {
   const user = await userModel.find({});
   return res.json({user})
}
export const getUserInfo = async (req, res) => {
   const user = await userModel.findById(req.user._id);
   return res.json({user})
}
