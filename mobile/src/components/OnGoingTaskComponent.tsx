import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  useWindowDimensions,
} from 'react-native';
import { Task } from '../../types';

const OnGoingTaskComponent: React.FC<Task> = ({ title, settings }) => {
  const {height, width} = useWindowDimensions();
  
  return (
    <View style={[style.container, { backgroundColor: '#7300B9' }]}>
      <Text style={style.title}>
        {
          title.length > 15 ? `${title.substring(0, 15)}...` : title
        }
      </Text>
      <View style={style.colum}>
        <Ionicons
          name={settings.category.icon as any}
          size={48}
          color="black"
          style={style.icons}
        />
        <Pressable style={style.btn}>
          <Ionicons name="time" size={28} color="white" style={[style.icons, {includeFontPadding : false}]} />
          <Text style={{color : "white", paddingLeft : 5, fontFamily : "Amiko-Bold"}}>Completing</Text>
        </Pressable>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    paddingTop : 10,
    paddingBottom : 10,
    padding : 5,
    margin : 5,
    marginBottom : 0,
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 115,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    
    elevation: 12,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Amiko-Bold',
    color: 'white',
    textAlignVertical : "center"
  },
  colum: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  icons: {
    fontFamily: 'Amiko-Bold',
    color: 'white',
    paddingRight: 5,
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
