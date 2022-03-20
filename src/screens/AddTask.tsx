import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Pressable,
  TouchableOpacity
} from 'react-native';

import { Task } from '../../types';
import MinimizableModel from '../components/MinimizableModel';
import CalendarPicker from '../components/nested/AddTask/calendar';
import TimePicker from '../components/nested/AddTask/TimePicker';
import Header from '../components/PromptHeader';
import CustomSafeView from '../components/root/View';
import Colors from '../constants/Colors';
import { useTaskList } from '../context/AddTask';
import { defaultData, useTask } from '../context/Task';
import Setting from '../constants/Setting';
import { minsPerDay } from '../utils/minsPerDay';

const AddTask: React.FC = () => {
  const navigation = useNavigation();
  const [isPickerOpen, setIsPickerOpen] = useState<boolean>(false);
  const { task, setTask } = useTask();
  const { TaskList, setTaskList } = useTaskList();

  //function to add the task to the list
  const AddTheTask = (task: Task) => {
    console.log(task);

    //generate a new UUID
    let uniqueId =
      Date.now().toString(36) + Math.random().toString(36).substring(2);

    //check if the time is valid if the date is the same
    if (
      task.date.from.toLocaleDateString() ===
      task.date.till.toLocaleDateString()
    ) {
      if (minsPerDay(task.Time.from) > minsPerDay(task.Time.till)) {
        alert('Invalid time');
        return;
      }
    }

    //check if the task name is valid
    if (task.title.length === 0) {
      alert('Invalid task name');
      return;
    }

    //add the task to the list
    const newTask: Task = {
      id: uniqueId,
      title: task.title,
      date: task.date,
      isDone: false,
      Time: task.Time,
      settings: task.settings,
    };

    //add the data to the list and clear out the task data
    setTaskList((prev) => [...prev, newTask]);
    setTask(defaultData);
    navigation.goBack();
  };


  const CategoryPicker:React.FC = ()=> {
    return(
      <View>
      {isPickerOpen && (
        <View style={styles.pickerContainer}>
          {Setting.category.map(
            (category, index) =>
              category.name !== 'All' && (
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    setTask({
                      ...task,
                      settings: { ...task.settings, category },
                    })
                  }
                  style={[
                    styles.pickerContainerContent,
                    task.settings.category.name === category.name &&
                      styles.pickerContainerContentSelected,
                  ]}
                >
                  <Text style={styles.pickerText} key={index}>
                    {category.name}
                  </Text>
                </TouchableOpacity>
              )
          )}
        </View>
      )}
    </View>
    )
  }



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
          title="Pick a Date"
          color={Colors.light.modelBackground}
        >
          <CalendarPicker />
        </MinimizableModel>

        <MinimizableModel
          title="Pick a Time"
          color={Colors.light.modelBackground}
        >
          <TimePicker />
        </MinimizableModel>

        <View>
          <MinimizableModel
            onPress={() => setIsPickerOpen(false)}
            title="Pick a Category"
            color={Colors.light.modelBackground}
          >
            <Pressable
              style={styles.picker}
              onPress={() => setIsPickerOpen(!isPickerOpen)}
            >
              <Text style={styles.pickerText}>{task.settings.category.name}</Text>
              <AntDesign
                name={!isPickerOpen ? 'caretdown' : 'caretup'}
                size={20}
                color="black"
              />
            </Pressable>
          </MinimizableModel>    
           <CategoryPicker/>      
        </View>

        
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
  picker: {
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    width: '50%',
  },
  pickerText: {
    fontSize: 20,
    fontFamily: 'Amiko-semiBold',
  },
  pickerContainer: {
    position : "absolute",
    top: '5%',
    left : "10%",
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'column',
    width: '50%',
  },
  pickerContainerContent: {

    padding: 10,
  },
  pickerContainerContentSelected: {
    backgroundColor: 'grey',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default AddTask;
