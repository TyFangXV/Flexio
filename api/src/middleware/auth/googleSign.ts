import { Request, Response, Router } from "express";
import { getGoogleAccountFromCode, OauthUrlToGoogle } from "../../utils/google/auth-utils";
const router = Router();

router.get("/authenticate", (req:Request, res:Response) => {

    
    const id = req.query.callbackID;
    res.write(OauthUrlToGoogle(id as string));
    res.end()
})



router.get("/callback", async(req:Request, res:Response) => {
    const data = await getGoogleAccountFromCode(req.query.code as string);
    res.send(data);
})

export default router;