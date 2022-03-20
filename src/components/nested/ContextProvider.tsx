import React from 'react';
import TaskListProvider from '../../context/AddTask';
import CategoryProvider from '../../context/Category';
import TaskProvider from '../../context/Task';

const ContextProvider: React.FC = ({ children }) => {
  return (
    <TaskProvider>
      <TaskListProvider>
        <CategoryProvider>{children}</CategoryProvider>
      </TaskListProvider>
    </TaskProvider>
  );
};

export default ContextProvider;
