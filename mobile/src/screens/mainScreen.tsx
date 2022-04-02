import React from 'react';
import { StyleSheet, Text } from 'react-native';
import View from '../components/root/View';
import { RootTabScreenProps, Task} from '../../types';
import TopButtons from '../components/nested/mainScreen/TopButtons';
import TodaysTask from '../components/nested/mainScreen/TodaysTask';
import OnGoingTask from '../components/nested/mainScreen/OnGoingTask';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/reducers';
import Colors from '../constants/Colors';
import PlaceHolderImage from '../components/nested/placeholder/TodayTask/PlaceHolder';
import { getItem } from '../utils/database';
import { addTask } from '../redux/reducers/tasklist';



export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<'TabOne'>) {
  const TaskList = useSelector((state: RootState) => state.TaskList);
  const dispatcher = useDispatch();
  
      //get the Task from the local storage and add it to the list
      getItem('TaskList').then((data) => {
        if (data !== null) {
          const parsedData = JSON.parse(data as string);
          parsedData.map((task: Task) => {
            dispatcher(addTask(task));
          });
        }
      });
      
  return (
    <View style={styles.container}>
      <TopButtons />
      {
        TaskList.length === 0 ? (
          <View style={styles.placeHolderContainer}>
            <PlaceHolderImage/>
          </View>
        ) : (
          <View>
          <OnGoingTask/>
          <TodaysTask/>            
          </View>
        )        
      }
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor : "red"
  },
  placeHolderContainer : {
  },
  warner : {
    fontSize: 20,
    fontFamily: 'Amiko-Bold',
    color: Colors.light.text_secondary,

  }

});
