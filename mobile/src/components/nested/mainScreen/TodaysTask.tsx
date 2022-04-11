import { MaterialIcons } from '@expo/vector-icons';
import React, { useRef, useState } from 'react';
import {
  Animated,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Divider } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { Category, Task } from '../../../../types';
import Colors from '../../../constants/Colors';
import Setting from '../../../constants/Setting';
import * as uuid from 'uuid';
import { RootState } from '../../../redux/reducers';
import { removeTaskFromList } from '../../../utils/TaskHandler';
import TaskComponent from '../../Task';


const TodaysTask: React.FC = () => {
  const dispatcher = useDispatch();
  const TaskList = useSelector((state: RootState) => state.TaskList);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [categoryList, _setCategoryList] = useState<Category[]>(Setting.category);
  const [selectedCategory, setSelectedCategory] = useState<Category>(Setting.category[0]);
  const transition = useRef(new Animated.Value(0)).current;
  let filteredTaskList: Task[] = TaskList.filter((task: Task) => new Date(task.date.from).toLocaleDateString() === new Date().toLocaleDateString() || new Date(task.date.till).getTime() > new Date().getTime());



  //filter the list to based of the selected category and time
  if (selectedCategory.name !== 'All') {
    filteredTaskList = filteredTaskList.filter(
      (task) => task.settings.category.name === selectedCategory.name
    );
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
            horizontal={false}
            automaticallyAdjustContentInsets={false}
            key={uuid.v4()}
            data={
              selectedCategory.name !== 'All'
                ? filteredTaskList
                : filteredTaskList
            }
            renderItem={({ item }) => {
              return (
                <TaskComponent
                  title={item.title}
                  color={item.settings.category.color}
                  _id={item._id}
                  till={item.Time.till}
                  date={item.date}
                  from={item.Time.from}
                  isTemplate={item.isTemplate}
                  isDone={item.isDone}
                  icon={item.settings.category.icon}
                  OnPress={() => removeTaskFromList(item._id, dispatcher)}
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
    marginTop : 0,
    paddingBottom : 300
  },
  titleHeader: {
    flexDirection: 'row',
    width: '60%',
  },
  title: {
    fontSize: 28,
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
  placeHolderContainer : {
    justifyContent: 'center',
    alignItems: 'center',
  },
  warner : {
    fontSize: 20,
    fontFamily: 'Amiko-Bold',
    color: Colors.light.text_secondary,

  }
});

export default TodaysTask;
