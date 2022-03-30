import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { Task } from '../../../../types';
import Colors from '../../../constants/Colors';
import { RootState } from '../../../redux/reducers';
import OnGoingtaskPlaceHolder from '../placeholder/onGoingTask/OnGoingtask';

const OnGoingTask: React.FC = () => {
  const TaskList = useSelector((state: RootState) => state.TaskList);
  const filteredList = TaskList;
  //filer the TaskList based on the time
  return (
    <View style={style.container}>
      <Text style={style.title}>On-Going Task</Text>
      <Divider
        orientation="horizontal"
        style={{
          height: 3,
          backgroundColor: Colors.light.text_secondary,
          borderRadius: 5,
        }}
      />

      <View style={style.viewContainer}>
        {filteredList.length === 0 ? (
          <View style={style.placeHolderContainer}>
            <Text style={style.warner}>No Task Has been added</Text>
            <OnGoingtaskPlaceHolder />
          </View>
        ) : (
          filteredList.map((item, index) => {
            return (
              <View key={index}>
                <Text>{item.title}</Text>
              </View>
            );
          })
        )}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    margin: 5,
    marginBottom : 10
  },
  title: {
    fontSize: 30,
    fontFamily: 'Amiko-Bold',
    color: Colors.light.text_secondary,
  },
  viewContainer: {
    minHeight: 150,
  },
  placeHolderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  warner: {
    fontSize: 18,
    fontFamily: 'Amiko-Bold',
    color: Colors.light.text_secondary,
  },
});

export default OnGoingTask;
