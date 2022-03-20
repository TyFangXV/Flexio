/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  AddTask: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  TabThree: undefined;
  AddTask: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type Task = {
  id: string;
  title: string;
  date: {
    from: Date;
    till: Date;
  };
  isDone: boolean;
  Time: {
    from: Date;
    till: Date;
  },
  settings : TaskSettings
};

//array of catergories
export type Category = {
  id: string;
  name: string;
  color: string;
};

export type CategoryList = Category[];

export type CategoryListContextType = {
  categoryList: CategoryList;
  setCategoryList: React.Dispatch<React.SetStateAction<CategoryList>>;
};

export type TaskContextType = {
  task: Task;
  setTask: React.Dispatch<React.SetStateAction<Task>>;
};


export type TaskListContextType = {
  TaskList: Task[];
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
};

export type TaskSettings = {
  category : Category;
  icon : string;
  color : string;
}