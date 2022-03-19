import React, { createContext, useState } from 'react';
import { Task, TaskListContextType } from '../../types';

const defaultData: Task = {
  id: 0,
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
};

const TaskListContext = createContext<TaskListContextType>({} as TaskListContextType);

const TaskListProvider: React.FC = ({ children }) => {
  const [TaskList, setTaskList] = useState<Task[]>([defaultData]);

  return (
    <TaskListContext.Provider value={{TaskList, setTaskList}}>{children}</TaskListContext.Provider>
  );
};

export const useTaskList = () => React.useContext(TaskListContext);

export default TaskListProvider;

