import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Header from '../components/PromptHeader';
import MinimizableModel from '../components/MinimizableModel';
import CustomeSafeView from '../components/root/View';
import Colors from '../constants/Colors';
import CustomDatePicker from '../components/CustomDatePicker';
import React from 'react';
import CalendarPicker from '../components/nested/AddTask/calendar';

const AddTask = () => {
  const navigation = useNavigation();
  return (
    <CustomeSafeView>
      <View style={styles.header}>
        <Header
          title="Add your task"
          cancelFunction={() => navigation.goBack()}
          acceptFunction={() => console.log('accept')}
        />
      </View>
      <View>

        <MinimizableModel
          title="Enter your task"
          color={Colors.light.modelBackground}
        >
          <TextInput style={styles.input} placeholder="Type here" />
        </MinimizableModel>

        <MinimizableModel
          title="Pick the Date"
          color={Colors.light.modelBackground}
        >
          <CalendarPicker/>
        </MinimizableModel>
      </View>
    </CustomeSafeView>
  );
};

const styles = StyleSheet.create({
  header: {
    margin: 5,
  },
  input: {
    margin: 0,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  datePicker : {
    flexDirection : "row"
    
  }
});

export default AddTask;
