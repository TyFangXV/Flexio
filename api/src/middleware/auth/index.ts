import { Router } from "express";
import TokenRouter from "./accountRouter";
import GoogleSignInRouter from './googleSignRouter'
import CreateAccountRouter from  './accountRouter'
const router = Router();

router.use("/createToken", TokenRouter);
router.use("/google", GoogleSignInRouter);
router.use("/account", CreateAccountRouter);


export default router;