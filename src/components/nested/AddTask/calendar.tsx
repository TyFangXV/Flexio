import React, { useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CustomDatePicker from '../../root/CustomDatePicker';
import { useTask } from '../../../context/Task';

const CalendarPicker = () => {
  const { task, setTask } = useTask();

  const setPickedDate = (from: Date, till: Date) => {
    setTask({ ...task, date: { from: from, till: till } });
  };

  //set the default date in the date if the value returned is undefined
  return (
    <View style={style.container}>
      <CustomDatePicker
        onChange={(e: any, date: Date | undefined) => setPickedDate(date || task.date.from, task.date.till)}
        value={task.date.from}
        mode={'date'}
        is24Hour={false}
      />
      <Text style={style.line}>-</Text>
      <CustomDatePicker
        onChange={(e: any, date: Date | undefined) =>
          setPickedDate(task.date.from, date || task.date.till  || new Date)
        }
        value={task.date.till}
        mode={'date'}
        minimumDate={task.date.from}
        is24Hour={false}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
  },
  line: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 5,
    color: 'white',
  },
});

export default CalendarPicker;
