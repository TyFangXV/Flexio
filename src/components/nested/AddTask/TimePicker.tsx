import React from 'react';
import { Text, View } from 'react-native';
import { useTask } from '../../../context/Task';
import CustomTimePicker, { formatAMPM } from '../../root/CustomTimePicker';

const TimePicker: React.FC = () => {
  const { task, setTask } = useTask();

  const setPickedTime = (from: Date, till: Date) => {
    setTask({ ...task, Time: { from: from, till: till } });
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <CustomTimePicker
        onChange={(e: any, t: Date) => setPickedTime(t, task.Time.till)}
        value={task.Time.from}
        is24Hour={false}
      />
      <Text
        style={{ fontSize: 25, fontWeight: 'bold', margin: 5, color: 'white' }}
      >
        -
      </Text>
      <CustomTimePicker
        onChange={(e: any, t: Date) => setPickedTime(task.Time.from, t)}
        value={task.Time.till}
        minimumTime={task.Time.from}
        is24Hour={false}
      />
    </View>
  );
};

export default TimePicker;
