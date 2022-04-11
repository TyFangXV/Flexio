import { Router } from "express";
import TaskRouter from "./task";
const router = Router();

router.use("/", TaskRouter);

export default router;