import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import { Divider } from 'react-native-elements';
import { Task } from '../../types';

const OnGoingTaskComponent: React.FC<Task> = ({ title, settings }) => {
  return (
    <View style={[style.container, { backgroundColor: '#B90085' }]}>
      <Text style={style.title}>
        {title.split('').length > 12
          ? title.split('').slice(0, 14).concat('...')
          : title}
      </Text>
      <View style={style.colum}>
        <Ionicons
          name={settings.category.icon as any}
          size={48}
          color="black"
          style={style.icons}
        />
        <Pressable style={style.btn}>
          <Ionicons name="time" size={28} color="white" style={style.icons} />
          <Text style={{color : "white", paddingLeft : 5, fontFamily : "Amiko-Bold"}}>Completing</Text>
        </Pressable>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 5,
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: 5,
    maxWidth: '48%',
    minWidth: '48%',
    borderRadius: 5,
    height: 100,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Amiko-Bold',
    color: 'white',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
  colum: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  icons: {
    fontFamily: 'Amiko-Bold',
    color: 'white',
  },
  btn: {
    backgroundColor: '#fff5',
    flexDirection: 'row',
    padding: 2,
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
  },
});

export default OnGoingTaskComponent;
