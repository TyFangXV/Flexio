import { Router } from "express";
import TokenRouter from "./CreateAccount";
import GoogleSignInRouter from './googleSign'
import CreateAccountRouter from  './CreateAccount'
const router = Router();

router.use("/createToken", TokenRouter);
router.use("/google", GoogleSignInRouter);
router.use("/CreateAccount", CreateAccountRouter);


export default router;