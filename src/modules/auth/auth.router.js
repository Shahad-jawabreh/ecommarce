import Router from 'express'
import * as authController from './auth.controller.js'
import errorHandler from '../../utls/asyncHandler.js';
const router = Router();

router.post('/login', errorHandler(authController.login))
router.post('/signup', errorHandler(authController.signup))
export default router