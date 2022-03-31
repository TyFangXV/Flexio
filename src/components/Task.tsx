import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View, Text, PixelRatio } from 'react-native';
import { useDispatch } from 'react-redux';
import { removeTask } from '../redux/reducers/tasklist';
import { formatAMPM } from '../utils/formatAMPM';
import RadioButton from './RadioButton';

type Props = {
  props: any;
  color: string;
  title: string;
  icon: string;
  from: Date;
  till: Date;
  date: {from : Date, till : Date};
  isDone: boolean;
  isTemplate: boolean;
  id: string;
  OnPress : () => void;
};

const Task: React.FC<Props> = ({
  props,
  color,
  title,
  icon,
  from,
  till,
  id,
  date,
  OnPress,
  isTemplate,
}) => {


  if (!isTemplate) {
    return (
      <View {...props} style={[{ backgroundColor: color }, style.container]}>
        <Text
          style={[
            style.Text,
            {
              fontSize:
                title.split(' ').length < 2
                  ? PixelRatio.getPixelSizeForLayoutSize(9)
                  : PixelRatio.getPixelSizeForLayoutSize(7),
            },
          ]}
        >
          {title}
        </Text>
        <View style={style.center}>
          <Ionicons name={icon as any} size={85} color={'white'} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >

          <Text style={style.time}>
            {`${formatAMPM(new Date(from))}-${formatAMPM(new Date(till))}`}
          </Text>
          
          <RadioButton OnPress={() => OnPress()} />
        </View>
      </View>
    );
  } else {
    return null;
  }
};

const style = StyleSheet.create({
  container: {
    height: 200,
    margin: 5,
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 5,
    width: '48%',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  time: {
    fontSize: PixelRatio.getPixelSizeForLayoutSize(5),
    fontFamily: 'Amiko-Bold',
    color: 'white',
  },
  Text: {
    fontFamily: 'Amiko-Bold',
    color: 'white',
  },
});

export default Task;
