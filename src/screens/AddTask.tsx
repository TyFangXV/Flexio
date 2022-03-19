import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { Task } from '../../types';
import MinimizableModel from '../components/MinimizableModel';
import CalendarPicker from '../components/nested/AddTask/calendar';
import TimePicker from '../components/nested/AddTask/TimePicker';
import Header from '../components/PromptHeader';
import CustomSafeView from '../components/root/View';
import Colors from '../constants/Colors';
import { useTaskList } from '../context/AddTask';
import { defaultData, useTask } from '../context/Task';

const minsPerDay = (time: Date) => {
  //convert the time to minutes
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let totalMins = hours * 60 + minutes;
  return totalMins;
};

const AddTask = () => {
  const navigation = useNavigation();
  const { task, setTask } = useTask();
  const { TaskList, setTaskList } = useTaskList();

  const AddTheTask = (task: Task) => {
    let uniqueId =
      Date.now().toString(36) + Math.random().toString(36).substring(2);

      
    //check if the time is valid if the date is the same 
    if (task.date.from.toLocaleDateString() === task.date.till.toLocaleDateString()) {  
      if (minsPerDay(task.Time.from) > minsPerDay(task.Time.till)) 
      {
        alert('Invalid time');
        return;
      }
    }

    //add the task to the list
    const newTask: Task = {
      id: uniqueId,
      title: task.title,
      date: task.date,
      isDone: false,
      Time: task.Time,
    };

    //add the data to the list and clear out the task data
    setTaskList((prev) => [...prev, newTask]);
    setTask(defaultData);
  };
  return (
    <CustomSafeView>
      <View style={styles.header}>
        <Header
          title="Add your task"
          cancelFunction={() => navigation.goBack()}
          acceptFunction={() => AddTheTask(task)}
        />
      </View>
      <View>
        <MinimizableModel
          title="Enter your task"
          color={Colors.light.modelBackground}
        >
          <TextInput
            style={styles.input}
            placeholder="Type here"
            onChangeText={(t) => setTask({ ...task, title: t.trim() })}
          />
        </MinimizableModel>

        <MinimizableModel
          title="Pick the Date"
          color={Colors.light.modelBackground}
        >
          <CalendarPicker />
        </MinimizableModel>

        <MinimizableModel
          title="Pick the Time"
          color={Colors.light.modelBackground}
        >
          <TimePicker />
        </MinimizableModel>
      </View>
    </CustomSafeView>
  );
};

const styles = StyleSheet.create({
  header: {
    margin: 5,
  },
  input: {
    margin: 0,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  datePicker: {
    flexDirection: 'row',
  },
});

export default AddTask;
