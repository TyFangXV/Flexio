import { Router } from "express";
import * as uuid from 'uuid'
import { verifyToken } from "../../../secrets/adminToken";
import { TokenPermissionLevel, userPermissionLevel } from "../../utils/constants/Permissions";
import { binarySearch } from "../../utils/functions/binarysearch";
import ObjectPropertyFinder from "../../utils/functions/ObjectPropertyFinder";
import userModel, { userAccountType } from "../../utils/model/auth/user";
const permisionRequirement = TokenPermissionLevel.ADMIN


//check if the user has the permision

//endpoint to create an account and return the account
const router = Router();


const generateAccount = async (email: string, password: string, role: string, username: string) => {
    const userRoleAccess = ObjectPropertyFinder(userPermissionLevel, role);

    try {
        if (userRoleAccess) {
            const user = new userModel<userAccountType>({
                username: username,
                password: password,
                email: email,
                permission: userRoleAccess.name
            });

            const newUser = await user.save();
            return "newUser";
        } else {
            return "An error occured";
        }
    } catch (error) {
        return error;
    }


}


router.post("/", async (req, res) => {
    if (req.headers.authorization) {

        //get the token and the params from the request body
        const token = req.headers.authorization;
        const { email, password, role, username } = req.body;

        //verify the token passed in has the correct permision
        if (verifyToken(token, permisionRequirement, role)) {
            if (email && password && role && username) {
                const account = generateAccount(email as string, password as string, role as string, username as string);
                console.log(account);

                res.send(await account);
            }

            if (!email || !password || !role || !username) {
                res.send("Missing fields");
            }
        }
        
        if(!verifyToken(token, permisionRequirement, role)){
            res.send("Your token do not have the required permissions to create an account");
        }

    }
}
);


export default router;