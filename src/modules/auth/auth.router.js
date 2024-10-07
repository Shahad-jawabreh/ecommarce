import {Router} from 'express'
import * as authController from './auth.controller.js'
import errorHandler from '../../utls/asyncHandler.js';
const router = Router();

router.post('/login', authController.login)
router.post('/signup', errorHandler(authController.signup))
router.patch('/sendcode', errorHandler(authController.sendCode))
router.patch('/forgetpassword', errorHandler(authController.forgetPassword))

export default router