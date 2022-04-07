import { Router } from "express";

const router = Router();

router.post("/apps", (req, res) => {
    const token = req.headers.authorization;
    console.log(token);
    res.send("Hello World!");
})