import { Router } from "express";
import * as uuid from 'uuid'
import { verifyToken } from "../../../.secrets/adminToken";
import { TokenPermissionLevel, userPermissionLevel } from "../../utils/constants/Permissions";
import crypto from 'crypto'
import ObjectPropertyFinder from "../../utils/functions/ObjectPropertyFinder";
import userModel, { userAccountType } from "../../utils/model/auth/user";
const permisionRequirement = TokenPermissionLevel.ADMIN


//check if the user has the permision

//endpoint to create an account and return the account
const router = Router();


const generateAccount = async (email: string, password: string, role: string, username: string, ip: string, userAgent: string) => {
    const userRoleAccess = ObjectPropertyFinder(userPermissionLevel, role);

    try {
        if (userRoleAccess) {
            const id = uuid.v4()
            const user = new userModel<userAccountType>({
                username: username,
                password: crypto.createHash("sha256").update(password).digest("hex"),
                email: email,
                permission: userRoleAccess.name,
                _id: id
            });

            const newUser = await user.save();
            return newUser._id;
        } else {
            return "An error occured";
        }
    } catch (error: any) {
        if (error.code === 11000) {
            return "Email already exists";
        }
        return error
    }


}


router.post("/signUp", async (req, res) => {
    if (req.headers.authorization) {

        //get the token and the params from the request body
        const token = req.headers.authorization;
        const { email, password, role, username } = req.body;

        //verify the token passed in has the correct permision
        if (verifyToken(token, permisionRequirement, role)) {
            if (email && password && role && username && req.ip && req.get('user-agent')) {
                const account = await generateAccount(email as string, password as string, role as string, username as string, req.ip, req.headers["user-agent"] as string);
                //console.log(await account);

                if(account === "An error occured")
                {
                    res.status(500).send(account);
                }

                if(account !== "An error occured")
                {
                    res.status(200).send(account);
                }
            } else {
                res.send("Missing params");
            }
        }

        if (!verifyToken(token, permisionRequirement, role)) {
            res.send("Your token do not have the required permissions to create an account");
        }

    }
}
);


router.post("/signIn", async (req, res) => {
    const { email, password } = req.body;
    try {
        if(email && password)
        {
            const userData = await userModel.findOne({email: email as string});
            if(userData)
            {
                if(userData.password === crypto.createHash("sha256").update(password as string).digest("hex"))
                {
                    res.status(200).send({error : null , data : userData});
                }
                else
                {
                    res.status(200).send({error : "incorrect password", data :  null});
                }
            }else{
                res.status(200).send({error : "Email not Found", data :  null});
            }   
        }else{
            res.send("Missing params");
        }
    } catch (error) {
        res.send(error);        
    }

})


export default router;