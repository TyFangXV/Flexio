import {Router} from 'express';
const tasks:any[] = [];
const router = Router();

router.post("/t", (req, res) => {
    //get the task from the request body
    const task = req.body;
    //add the task to the list of tasks
    console.log(task);
    
    tasks.push(task);
    //send the task back to the client
    res.send(tasks);
})

export default router;