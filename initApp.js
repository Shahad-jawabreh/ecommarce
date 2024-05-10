import connection from './DB/connection.js';
import userRouter from './src/modules/user/user.router.js'
import categoryRouter from './src/modules/category/category.router.js'
import subCategory from './src/modules/subcategory/subCategory.router.js'
import authRouter from './src/modules/auth/auth.router.js'
import cors from 'cors'
const initApp=(express,app)=>{
    app.use(cors());
    app.use(express.json());
    connection();
    app.get('/', (req, res)=>{return res.json({massege : "Welcome!"});});
    app.use('/auth',authRouter);
    app.use('/user',userRouter);
    app.use('/category', categoryRouter);
    app.use('*',(req,res)=>{return res.status(404).json({massege : "this page not found"})})
    app.use((err,req,res,next)=>{
        if(err){
            return res.json({massage : err.stack})
        }
    })
}
export default initApp