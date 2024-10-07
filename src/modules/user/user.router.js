import Router from 'express'
import * as userController from './user.controller.js'
import autherization from '../../utls/authorization.js';
import errorHandler from '../../utls/asyncHandler.js';
import { role } from '../../enum/enum.js';
const router = Router();

router.get('/confirmemail/:token', userController.confirmEmail)
router.get('/allUser', autherization([role.admin]) , userController.getUser)
router.get('/getUserInfo', autherization(Object.values(role)) , userController.getUserInfo)

export default router