import { NavigationProp, useNavigation } from '@react-navigation/native';

import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import * as uuid from 'uuid'
import { Task } from '../../types';
import MinimizableModel from '../components/MinimizableModel';
import CalendarPicker from '../components/nested/AddTask/calendar';
import TimePicker from '../components/nested/AddTask/TimePicker';
import Header from '../components/PromptHeader';
import CustomSafeView from '../components/root/View';
import Colors from '../constants/Colors';
import Setting from '../constants/Setting';
import { minsPerDay } from '../utils/minsPerDay';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/reducers';
import { resetData, setCategory, setTitle } from '../redux/reducers/task';
import { addTask } from '../redux/reducers/tasklist';
import { setItem } from '../utils/database';
import { Dispatch } from 'redux';
import axios from 'axios';


const AddTaskToList = async(newTask:Task, dispatcher:Dispatch, navigation:NavigationProp<any>, TaskList:Task[], userID:string)=>{

      //add the task to the list
      dispatcher(addTask(newTask));
      //reset the form
      dispatcher(resetData());
  
      //save the task to the local storage
      setItem("TaskList", JSON.stringify([...TaskList, newTask]))
       .then((e) => {
          alert("Task added successfully");
          navigation.goBack();
      })
      .catch(err => {
        //console.log('TaskList not saved');
        alert("Task not added");
        navigation.goBack();   
      });
      
      try {
        const {data} = await axios.post(`${Setting.ApiUrl}/task/addTask`, {userid : userID, task: newTask})
        console.log(data);
        
      } catch (error) {
        console.log(error);
        
      }
}

const AddTask: React.FC = () => {
  const navigation = useNavigation();
  const [isPickerOpen, setIsPickerOpen] = useState<boolean>(false);

  const task = useSelector((state:RootState) => state.Task.task);
  const TaskList  = useSelector((state:RootState) => state.TaskList);
  const account = useSelector((state:RootState) => state.Account);

  const dispatcher = useDispatch();
  //function to add the task to the list
  const AddTheTask = async(task: Task) => {


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
      _id: uuid.v4(),
      title: task.title,
      date: task.date,
      isDone: false,
      Time: task.Time,
      settings: task.settings,
      isTemplate : false
    };

    
    console.log(account);
    
    AddTaskToList(newTask, dispatcher, navigation, TaskList, account._id);
    
  };

  const CategoryPicker: React.FC = () => {
    return (
      <View>
        {isPickerOpen && (
          <View style={styles.pickerContainer}>
            {Setting.category.map(
              (category, index) =>
                category.name !== 'All' && (
                  <TouchableOpacity
                    key={index}
                    onPress={() => dispatcher(setCategory(category))}
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
    );
  };

  return (
    <CustomSafeView>
      <View style={styles.header}>
        <Header
          title="Add your task"
          cancelFunction={() => navigation.goBack()}
          acceptFunction={async() => await AddTheTask(task)}
        />
      </View>
      <View>
        <MinimizableModel
          title="Enter your task"
          color={Colors.light.modelBackground}
        >
          <TextInput
            style={styles.input}
            maxLength={40}
            placeholder="Type here"
            onChangeText={(t) => {
              dispatcher(setTitle(t))
              
              
            }}
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
              <Text style={styles.pickerText}>
                {Setting.category[1].name}
              </Text>
              <AntDesign
                name={!isPickerOpen ? 'caretdown' : 'caretup'}
                size={20}
                color="black"
              />
            </Pressable>
          </MinimizableModel>
          <CategoryPicker />
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
    position: 'absolute',
    top: '5%',
    left: '10%',
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
