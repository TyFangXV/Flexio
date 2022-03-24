import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import { Divider } from 'react-native-elements';
import { Category, Task } from '../../../../types';
import Colors from '../../../constants/Colors';
import Setting from '../../../constants/Setting';
import { useTaskList } from '../../../context/AddTask';
import { useCategoryList } from '../../../context/Category';
import { formatAMPM } from '../../../utils/formatAMPM';
import { UuidGenerator } from '../../../utils/UuidGenerator';
import TaskComponent from '../../Task';

const TodaysTask: React.FC = () => {
  const { TaskList, setTaskList } = useTaskList();
  const { categoryList } = useCategoryList();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<Category>(Setting.category[0]);
  const transition = useRef(new Animated.Value(0)).current;let filteredTasklist = TaskList.filter(task => new Date(task.date.from).toLocaleDateString() === new Date().toLocaleDateString() || new Date(task.date.till).getTime());

  
  

  //get the task stored locally and save it to the global variable while not overwriting the existing one
  const getTaskListFromLocalStorage = async () => {
    try {
      const taskList = await AsyncStorage.getItem('taskList');
      
      if (taskList !== null) {
        //convert json into js object
        const taskListObj:{taskList : Task[]} = JSON.parse(taskList);
        
        //set the task list to the global variable
        setTaskList(taskListObj.taskList);
      }
    } catch (e) {
      console.log(e);
    }
  };

  

  //filter the list to based of the selected category and time
  if(selectedCategory.name !== 'All'){
    filteredTasklist = filteredTasklist.filter(task => task.settings.category.name === selectedCategory.name);
  }

  //animation for a clean opening
  const animation = Animated.timing(transition, {
    toValue: isMenuOpen ? 300 : 0,
    duration: 300,
    useNativeDriver: false,
  });

  return (
    <View style={style.container}>
      <View>
        <Pressable
          style={style.titleHeader}
          onPress={() => {
            setIsMenuOpen(!isMenuOpen);
            !isMenuOpen && animation.reset();
          }}
        >
          <Text style={style.title}>Todays Task</Text>
          <MaterialIcons
            name={isMenuOpen ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
            size={30}
            color={Colors.light.text_secondary}
            tvParallaxProperties={undefined}
          />
        </Pressable>
        <Divider
          orientation="horizontal"
          style={{
            height: 3,
            backgroundColor: Colors.light.text_secondary,
            borderRadius: 5,
          }}
        />
        {isMenuOpen &&
          (animation.start(),
          (
            <Animated.View
              style={[style.popUpModel, { maxHeight: transition }]}
            >
              {categoryList.map((item, index) => {
                return (
                  <View key={index}>
                    <TouchableOpacity
                      onPress={() => setSelectedCategory(item)}
                      style={[
                        style.popUpModelItem,
                        selectedCategory.name === item.name &&
                          style.popUpItemSelected,
                      ]}
                    >
                      <Text style={style.popUpItemText}>{item.name}</Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </Animated.View>
          ))}
      </View>

      <View>
        <FlatList
          numColumns={2}
          automaticallyAdjustContentInsets={false}
          key={UuidGenerator(65)}
          data={selectedCategory.name !== "All" ? filteredTasklist : TaskList}
          renderItem={({ item }) => {
            return (
              <TaskComponent
                title={item.title}
                color={item.settings.category.color}
                Onpress={() => console.log('pressed')}
                till={item.Time.till}
                from={item.Time.from}
                isTemplate={item.isTemplate}
                isDone={item.isDone}
                icon={item.settings.category.icon}
                props={undefined}
              />
            );
          }}
        />
      </View>
    </View>
  );
};




const style = StyleSheet.create({
  container: {
    margin: 5,
  },
  titleHeader: {
    flexDirection: 'row',
    width: '50%',
  },
  title: {
    fontSize: 25,
    fontFamily: 'Amiko-Bold',
    color: Colors.light.text_secondary,
  },
  popUpModel: {
    zIndex: 1,
    backgroundColor: 'white',
    width: '35%',
    position: 'absolute',
    left: '35%',
    top: '70%',
    borderRadius: 10,
  },
  popUpModelItem: {
    padding: 10,
  },
  popUpItemText: {
    fontSize: 18,
    fontFamily: 'Amiko-Bold',
  },
  popUpItemSelected: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default TodaysTask;
