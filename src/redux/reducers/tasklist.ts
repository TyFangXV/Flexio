import { Reducer } from "redux";
import {Task } from '../../../types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './index';

let initialState = {
    TaskList: []
}

export const addTask = (task:Task) => {
    return {
        type: 'ADD_TASK',
        payload: {
            task: task
        }
    };
}

export const removeTask = (id:string) => {
    return {
        type: 'REMOVE_TASK',
        payload: {
            id: id
        }
    };
}

export const getTaskFomList = (id:string) => {
    return {
        type: 'GET_TASK_FROM_LIST',
        payload: {
            id: id
        }
    };
}


export const UpdateTaskList = (taskList:Task[]) => {
    return {
        type: 'UPDATE_TASK_LIST',
        payload: {
            taskList: taskList
        }
    };
}



export const taskListReducer: Reducer<Task[]> = (state = initialState.TaskList, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            const newTask = action.payload.task;
            //check if the task is already in the list
            const taskList = state.filter(task => task.id === newTask.id);
            if (taskList.length === 0) {
                return [...state, newTask];
            }
            else {
                return state;
            }
            
        case 'DELETE_TASK':
            return state.filter(task => task.id !== action.payload.id);
        case 'EDIT_TASK':
            return state.map(task => {
                if (task.id === action.payload.id) {
                    return {
                        ...task,    
                        ...action.payload.task
                    }
                }
                return task;
            });
        case 'GET_TASK_FROM_LIST':
            return state.filter(task => task.id === action.payload.id);    
        case "UPDATE_TASK_LIST":
            return state = action.payload.taskList;    
        default:
            return state;
    }
}

export default taskListReducer;

