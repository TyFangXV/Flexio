import { MaterialIcons } from '@expo/vector-icons';
import React, { useRef, useState } from 'react';
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
import TaskComponent from '../../Task';

const TodaysTask: React.FC = () => {
  const { TaskList, setTaskList } = useTaskList();
  const { categoryList } = useCategoryList();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<Category>(Setting.category[0]);
  const transition = useRef(new Animated.Value(0)).current;
  //get the task thats date matches the current date
  let filteredTasklist: Task[] = TaskList.filter(task => task.date.from.toLocaleDateString() === new Date().toLocaleDateString() || task.date.till.getTime());



  //filter the list to based of the selected category and time
  if(selectedCategory.name !== 'All'){
    const date= new Date;
    //filter the list based off time 
    filteredTasklist = filteredTasklist.filter(task => task.settings.category.name === selectedCategory.name);
    console.log(filteredTasklist);
    
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
          keyExtractor={(item) => item.id}
          data={selectedCategory.name !== "All" ? filteredTasklist : filteredTasklist.slice(1, filteredTasklist.length)}
          renderItem={({ item }) => {
            return (
              <TaskComponent
                title={item.title}
                color={item.settings.category.color}
                Onpress={() => {
                  setTaskList(TaskList.filter(task => task.id !== item.id));
                  console.log(TaskList);
                  
                }}
                till={item.Time.till}
                from={item.Time.from}
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
