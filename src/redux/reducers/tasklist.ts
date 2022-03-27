import { Reducer } from "redux";
import {Task } from '../../../types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './index';
const taskM = useSelector((state:RootState) => state);

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


export const taskListReducer: Reducer<Task[]> = (state = initialState.TaskList, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, action.payload.task];
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
        default:
            return state;
    }
}

export default taskListReducer;

