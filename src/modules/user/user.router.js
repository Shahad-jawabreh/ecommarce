import Router from 'express'
import * as userController from './user.controller.js'
import autherization from '../../utls/authorization.js';
import errorHandler from '../../utls/asyncHandler.js';
const router = Router();

router.get('/', userController.getInforamtion)

export default router