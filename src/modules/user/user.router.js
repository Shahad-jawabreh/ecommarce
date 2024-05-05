import Router from 'express'
import * as userController from './user.controller.js'
import autherization from '../../utls/authorization.js';
import errorHandler from '../../utls/asyncHandler.js';
const router = Router();

router.get('/', userController.getInforamtion)
router.get('/confirmemail/:token',errorHandler(userController.confirmEmail));

export default router