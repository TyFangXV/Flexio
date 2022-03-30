import { useDispatch, useSelector } from "react-redux"
import { Dispatch } from "redux";
import { Task } from "../../types";
import { RootState } from "../redux/reducers";
import { addTask, removeTask } from "../redux/reducers/tasklist"
import { getItem, setItem } from "./database";

export const removeTaskFromList = (id:string, dispatch:Dispatch) => {
    dispatch(removeTask(id))
}


export const reDeclareOfflineTaskList = (TaskList:Task[]) => {
    setItem("TaskList", JSON.stringify(TaskList));
}