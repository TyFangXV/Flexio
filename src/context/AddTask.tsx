import React, { createContext, useState } from 'react';
import { Task, TaskListContextType } from '../../types';
import { defaultData } from './Task';

const TaskListContext = createContext<TaskListContextType>(
  {} as TaskListContextType
);

const TaskListProvider: React.FC = ({ children }) => {
  const [TaskList, setTaskList] = useState<Task[]>([defaultData]);

  return (
    <TaskListContext.Provider value={{ TaskList, setTaskList }}>
      {children}
    </TaskListContext.Provider>
  );
};



export const useTaskList = () => React.useContext(TaskListContext);


export default TaskListProvider;
