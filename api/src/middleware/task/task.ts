import { Router } from 'express';
import userModel from '../../utils/model/auth/user';
import taskModel from '../../utils/model/task/task';
import { Task } from '../../../types'
const router = Router();

router.post("/addTask", async (req, res) => {
    const { userid, task } = req.body;

    const UserIDVerification = await userModel.findOne({ _id: userid });

    if (UserIDVerification) {

        const newTask = new taskModel<Task>({
            userID: userid,
            ...task
        });
        console.log(newTask);
        
        await newTask.save();
        res.send({
            status: "success",
            message: "Task added successfully"
        });

    }
    else {
        res.send({
            status: "error",
            message: "User snot found"
        });
    }
})

router.get("/getTask", async (req, res) => {
    const { userid } = req.query;
    const UserIDVerification = await userModel.findOne({ _id: userid });
    console.log(UserIDVerification);
    
    //check if user exist
    if (UserIDVerification) {
        const task = await taskModel.find({ userID: userid });
        res.send({
            status: "success",
            message: "Task found",
            data: task
        });
    }
    else {
        res.send({
            status: "error",
            message: "User not found"
        });
    }
})
export default router;