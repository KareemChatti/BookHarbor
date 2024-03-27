import express from 'express';

import {SignUp,login} from "../controller/UserController.js"

const router = express.Router();

router.post("/user/signup",SignUp)
router.post("/user/login",login)

export { router as UserRouter };
