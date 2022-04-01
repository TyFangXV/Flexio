import React, { useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CustomDatePicker from '../../root/CustomDatePicker';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers';
import { setFromDate, setTillDate } from '../../../redux/reducers/task';
import { Task } from '../../../../types';

const CalendarPicker = () => {
  const task = useSelector((state:RootState) => state.Task.task);
  const dispatcher = useDispatch();

  
  //set the default date in the date if the value returned is undefined
  return (
    <View style={style.container}>
      <CustomDatePicker
        onChange={(e: any, date: Date | undefined) => date !== undefined && dispatcher(setFromDate(date))}
        value={task.date.from}
        mode={'date'}
        is24Hour={false}
      />
      <Text style={style.line}>-</Text>
      <CustomDatePicker
        onChange={(e: any, date: Date | undefined) => date !== undefined && dispatcher(setTillDate(date))}
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
