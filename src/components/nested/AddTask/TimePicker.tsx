import React from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers';
import { setTimeFrom, setTimeTill } from '../../../redux/reducers/task';
import CustomTimePicker from '../../root/CustomTimePicker';

const TimePicker: React.FC = () => {
  const task = useSelector((state:RootState) => state.Task.task);

  
  const dispatcher = useDispatch();



  return (
    <View style={{ flexDirection: 'row' }}>
      <CustomTimePicker
        onChange={(e: any, t: Date) => t !== undefined && dispatcher(setTimeFrom(t))}
        value={task.Time.from}
        is24Hour={false}
      />
      <Text
        style={{ fontSize: 25, fontWeight: 'bold', margin: 5, color: 'white' }}
      >
        -
      </Text>
      <CustomTimePicker
        onChange={(e: any, t: Date) => t !== undefined && dispatcher(setTimeTill(t))}
        value={task.Time.till}
        is24Hour={false}
      />
    </View>
  );
};

export default TimePicker;
