import { combineReducers, createStore } from "redux";
import { Task } from "../../../types";
import TaskReducers from "./task";
import taskListReducer from "./tasklist";



const combinedReducers = combineReducers({ Task : TaskReducers, TaskList : taskListReducer });

export type RootState = ReturnType<typeof combinedReducers>;

export default combinedReducers;