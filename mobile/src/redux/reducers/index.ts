import { combineReducers, createStore } from "redux";
import { Task } from "../../../types";
import accountReducer from "./Account";
import TaskReducers from "./task";
import taskListReducer from "./tasklist";



const combinedReducers = combineReducers({ Task : TaskReducers, TaskList : taskListReducer, Account : accountReducer });

export type RootState = ReturnType<typeof combinedReducers>;

export default combinedReducers;