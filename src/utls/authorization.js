import jwt from 'jsonwebtoken' ;
import userModel from '../../DB/model/user.model.js';
const authorization = ()=>{
    return async(req,res,next) => {
        const {authorization} = req.headers ;
        if(!authorization){
            return next(new Error("Invalid authorization"))
        }
        if (authorization.startsWith(process.env.brearToken)) {
            const token = authorization.split(process.env.brearToken)[1];
            const decode = jwt.verify(token, process.env.secretKeyToken); 
            const user = await userModel.find({_id : decode._id}) ;
            if(user.length){
                req.user= decode;
                next();
            } 
           else {
            return res.json({massege : "invalid token"})
           }
        }
        else{
            return res.json({massege : "invalid token"})
        }
    }
}
export default authorization