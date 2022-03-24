import React, {createContext, useState} from "react";
import {Task, TaskContextType} from "../../types";
import Setting from "../constants/Setting";


export const defaultData: Task = {
    id: "0",
    title: '',
    date: {
        from: new Date(),
        till: new Date(),
    },
    isDone: false,
    Time: {
        from: new Date(),
        till: new Date(),
    },
    settings : {
        category : Setting.defaultCategory,
    },
    isTemplate : true
};

const TaskContext = createContext<TaskContextType>({} as TaskContextType);

const TaskProvider:React.FC = ({children})  => {
    const [task, setTask] = useState<Task>(defaultData);


    return (
        <TaskContext.Provider value={{task, setTask}}>{children}</TaskContext.Provider>
    );
};

export const useTask = () => React.useContext(TaskContext);

export default TaskProvider;



