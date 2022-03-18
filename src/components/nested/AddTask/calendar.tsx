import React from 'react';
import { useRecoilState } from 'recoil';
import { StyleSheet, View, Text } from 'react-native';
import CustomDatePicker from '../../CustomDatePicker';
import { date } from '../../../state/AddTask';

const CalendarPicker = () => {

  const setPickedDate = ( from:Date, till:Date) => {
     console.log("ji")
  }



  return (
    <View style={style.container}>
      <CustomDatePicker
        onChange={(event: any, selectedDate: Date | undefined) => setPickedDate(selectedDate as Date, new Date)}
        value={new Date()}
        mode={'date'}
        is24Hour={false}
      />
      <Text style={style.line}>-</Text>
      <CustomDatePicker
        onChange={(event: any, selectedDate: Date | undefined) => (event: any, selectedDate: Date | undefined) => setPickedDate(selectedDate as Date, new Date)}
        value={new Date()}
        mode={'date'}
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
