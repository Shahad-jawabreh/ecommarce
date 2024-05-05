import userModel from "../../DB/model/user.model.js";
import jwt from 'jwt'
export const confirmEmail = async(req,res,next)=>{
    const {token} = req.params ;
    const decoded = jwt.verify(token, process.env.secretKeyToken);
    const Update = await userModel.findByIdAndUpdate({_id:decoded._id},{confirmEmail: 'true'})
}
export default confirmEmail