import { Reducer } from 'redux';
import { Category, Task } from '../../../types';
import Setting from '../../constants/Setting';

let initialState = {
  task: {
    title: '',
    date: {
      from: new Date(),
      till: new Date(),
    },
    settings: {
      category: Setting.defaultCategory,
    },
    isDone: false,
    Time: {
      from: new Date(),
      till: new Date(),
    },
    id: '0',
    isTemplate: true,
  },
};

//temp data for task
let title: string = '';
let date: { from: Date; till: Date } = { from: new Date(), till: new Date() };
let settings: { category: Category } = { category: Setting.defaultCategory };
let isDone: boolean = false;
let Time: { from: Date; till: Date } = { from: new Date(), till: new Date() };
let id: string = '0';
let isTemplate: boolean = true;

export const setTitle = (title: string) => {
  return {
    type: 'ADD_TITLE',
    payload: {
      title: title,
    },
  };
};

export const setFromDate = (fromDate: Date) => {
  return {
    type: 'SET_FROM_DATE',
    payload: {
      fromDate: fromDate,
    },
  };
};

export const setTillDate = (tillDate: Date) => {
  return {
    type: 'SET_TILL_DATE',
    payload: {
      tillDate: tillDate,
    },
  };
};

export const setCategory = (category: Category) => {
  return {
    type: 'SET_CATEGORY',
    payload: {
      category: category,
    },
  };
};

export const setTimeFrom = (timeFrom: Date) => {
  return {
    type: 'SET_TIME_FROM',
    payload: {
      timeFrom: timeFrom,
    },
  };
};

export const setTimeTill = (timeTill: Date) => {
  return {
    type: 'SET_TIME_TILL',
    payload: {
      timeTill: timeTill,
    },
  };
};

export const setIsDone = (isDone: boolean) => {
  return {
    type: 'SET_IS_DONE',
    payload: {
      isDone: isDone,
    },
  };
};

export const resetData = () => {
  return {
    type: 'RESET_DATE',
    payload: {
      initialState,
    },
  };
};



const TaskReducers: Reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_TITLE':
      title = action.payload.title;
      return {
        ...state,
        task: {
          ...state.task,
          title: title,
        },
      };

    case 'SET_FROM_DATE':
      date.from = action.payload.fromDate;
      return {
        ...state,
        task: {
          ...state.task,
          date: { ...date, from: date.from },
        },
      };

    case 'SET_TILL_DATE':
      date.till = action.payload.tillDate;
      return {
        ...state,
        task: {
          ...state.task,
          date: { ...date, till: date.till },
        },
      };

    case 'SET_STATUS':
      isDone = action.payload.isDone;
      return {
        ...state,
        task: {
          ...state.task,
          isDone: isDone,
        },
      };
    case 'SET_FROM_TIME':
      Time.from = action.payload.timeFrom;
      return {
        ...state,
        task: {
          ...state.task,
          Time: { ...Time, from: Time.from },
        },
      };
    case 'SET_TILL_TIME':
      Time.till = action.payload.timeTill;
      return {
        ...state,
        task: {
          ...state.task,
          Time: { ...Time, till: Time.till },
        },
      };

    case 'SET_CATEGORY':
      settings.category = action.payload.category;
      return {
        ...state,
        task: {
          ...state.task,
          settings: { ...settings, category: settings.category },
        },
      };





    case 'RESET_DATA':
      state = initialState;
      return state;

    default:
      return state;
  }
};

export default TaskReducers;
