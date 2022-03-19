import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import React from 'react';

type Props = {
  minimumTime?: Date;
  maximumTime?: Date;
  onChange: (event: any, t: Date) => void;
  value: Date;
  is24Hour: boolean;
};

//formate the date to be displayed
const formatAMPM = (date: Date) => {
  var hours = date.getHours();
  var minutes: string | number = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes.toString() : minutes.toString();
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
};

const CustomTimePicker: React.FC<Props> = ({
  minimumTime,
  is24Hour,
  onChange,
  value,
}: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [time, setTime] = React.useState(value);
  const formattedPickedTime = formatAMPM(time);

  const onChangeFunction = (e: any, t: Date) => {
    setTime(t);
    setIsOpen(false);
    onChange(e, t);
  };

  return (
    <>
      <Pressable style={styles.btn} onPress={() => setIsOpen(true)}>
        <TouchableOpacity
          style={styles.btnContent}
          onPress={() => setIsOpen(true)}
        >
          <Text style={styles.text}>{formattedPickedTime}</Text>
          <Ionicons name="time" size={24} color="black" style={styles.icon} />
        </TouchableOpacity>
      </Pressable>
      {isOpen && (
        <DateTimePicker
          value={value}
          mode="time"
          display="clock"
          is24Hour={is24Hour}
          onChange={(e: any, t: Date | undefined) =>
            t !== undefined && onChangeFunction(e, t)
          }
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
  },
  text: {
    fontFamily: 'Amiko-semiBold',
    fontSize: 15,
    textTransform: 'uppercase',
  },
  btnContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 10,
  },
});

export default CustomTimePicker;
