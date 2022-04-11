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

        res.send({userid, ...task});
    }
    else {
        res.send({
            status: "error",
            message: "User snot found"
        });
    }
})

export default router;