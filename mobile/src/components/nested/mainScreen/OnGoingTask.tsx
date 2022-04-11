import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Divider } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { Task } from '../../../../types';
import Colors from '../../../constants/Colors';
import * as uuid from 'uuid';
import { RootState } from '../../../redux/reducers';
import OnGoingTaskComponent from '../../OnGoingTaskComponent';

const OnGoingTask: React.FC = () => {
  const TaskList = useSelector((state: RootState) => state.TaskList);
  //filter the list by if the task till and from time is between the current time
  const filteredTaskList: Task[] = TaskList.filter(
    (task: Task) =>
      new Date(task.Time.till).getTime() < new Date().getTime() ||
      (new Date(task.Time.from).getTime() > new Date().getTime() &&
        new Date(task.date.till).getTime() < new Date().getTime())
  );

  //filer the TaskList based on the time
  if (filteredTaskList.length === 0) {
    return <View></View>;
  } else {
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
          <FlatList
            data={filteredTaskList}
            horizontal={true}
            key={uuid.v4()}
            renderItem={({ item }) => (
              <OnGoingTaskComponent
                title={item.title}
                settings={item.settings}
                _id={item._id}
                date={item.date}
                isDone={false}
                Time={item.Time}
                isTemplate={false}
              />
            )}
          />
        </View>
      </View>
    );
  }
};

const style = StyleSheet.create({
  container: {
    margin: 5,
    marginBottom: 10,
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
