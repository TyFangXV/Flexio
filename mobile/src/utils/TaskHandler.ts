import { Dispatch } from "redux";
import { Task } from "../../types";
import { removeTask } from "../redux/reducers/tasklist"
import { setItem } from "./database";

export const removeTaskFromList = (id:string, dispatch:Dispatch) => {
    dispatch(removeTask(id))
}


export const reDeclareOfflineTaskList = (TaskList:Task[]) => {
    setItem("TaskList", JSON.stringify(TaskList));
}