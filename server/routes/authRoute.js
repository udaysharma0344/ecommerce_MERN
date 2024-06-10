import express from 'express';
import { loginController, registerController, testController } from '../controllers/authController.js';
import {requiredSingIn} from '../middlewares/authMiddleware.js'
// router object 
const router = express.Router();

// routing

// register || nethod post 
router.post('/register',registerController);

// login || POST
router.post('/login',loginController);

// test rout
router.get('/test',requiredSingIn , testController);

export default router;


