import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Header from '../components/PromptHeader';
import MinimizableModel from '../components/MinimizableModel';
import CustomSafeView from '../components/root/View';
import Colors from '../constants/Colors';
import React from 'react';
import CalendarPicker from '../components/nested/AddTask/calendar';
import { useTask } from '../context/Task';
import TimePicker from '../components/nested/AddTask/TimePicker';

const minsPerDay = (time:Date) => {
  return (time.getHours() * 60) + time.getMinutes();
}

const AddTask = () => {
  const navigation = useNavigation();
  const {task, setTask} = useTask();
  
  //value of the text input
  let taskTitle:string = "";
  return (
    <CustomSafeView>
      <View style={styles.header}>
        <Header
          title="Add your task"
          cancelFunction={() => navigation.goBack()}
          acceptFunction={() => { console.log(task.Time.from.toLocaleTimeString(), task.Time.till.toLocaleTimeString()) } }
        />
      </View>
      <View>

        <MinimizableModel
          title="Enter your task"
          color={Colors.light.modelBackground}
        >
          <TextInput style={styles.input} placeholder="Type here" onChangeText={(t)=> taskTitle = t}/>
        </MinimizableModel>

        <MinimizableModel
          title="Pick the Date"
          color={Colors.light.modelBackground}
        >
          <CalendarPicker/>
        </MinimizableModel>

        <MinimizableModel
          title="Pick the Time"
          color={Colors.light.modelBackground}
        >
          <TimePicker/>
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
  datePicker : {
    flexDirection : "row"
    
  }
});

export default AddTask;
