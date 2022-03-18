import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import React from 'react';

type Props = {
  minimumDate?: Date;
  maximumDate?: Date;
  onChange: (event: any, selectedDate: Date | undefined) => void;
  value: Date;
  mode: 'date' | 'time' | 'datetime';
  is24Hour: boolean;
  display?: 'default' | 'spinner' | 'clock' | 'calendar';
};

const CustomDatePicker = ({
  minimumDate,
  maximumDate,
  onChange,
  value,
  mode,
  ...rest
}: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [date, setDate] = React.useState(value);
  const formatedPickedDate:string = date.toLocaleDateString();

  //function to update the date and close the date picker 
  //while running the onchange function passed in by the user
  const onChangeFunction = (event: any, selectedDate: Date | undefined) => {
    
    if (selectedDate) {
      setDate(selectedDate);
      onChange(event, selectedDate);
      setIsOpen(false);
    }

    setIsOpen(false);
  }


  return (
    <View>

      <Pressable style={styles.btn} onPress={() => setIsOpen(true)}>
        <TouchableOpacity style={styles.btnContent}  onPress={() => setIsOpen(true)}>
          <Text style={styles.text}>{formatedPickedDate}</Text>
          <AntDesign
            name="calendar"
            size={24}
            color="black"
            style={styles.icon}
          />
        </TouchableOpacity>
      </Pressable>

      {isOpen && (
        <DateTimePicker
          value={date}
          minimumDate={minimumDate}
          maximumDate={maximumDate}
          mode={mode}
          onChange={onChangeFunction}
          {...rest}
        />
      )}

    </View>
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

/*
 
*/

export default CustomDatePicker;
