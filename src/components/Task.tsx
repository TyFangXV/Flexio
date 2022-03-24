import { Ionicons } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements';
import React from 'react';
import { StyleSheet, View, Text, PixelRatio, BackHandler } from 'react-native';
import { formatAMPM } from '../utils/formatAMPM';

type Props = {
  props: any;
  color: string;
  title: string;
  icon: string;
  from: Date;
  till: Date;
  isDone: boolean;
  isTemplate: boolean;
  Onpress: () => void;
};

const Task: React.FC<Props> = ({
  props,
  color,
  title,
  icon,
  from,
  till,
  Onpress,
  isDone,
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
                  ? PixelRatio.getPixelSizeForLayoutSize(10)
                  : PixelRatio.getPixelSizeForLayoutSize(8),
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
          <Text style={style.time}>{`${formatAMPM(new Date(from))}-${formatAMPM(
            new Date(till)
          )}`}</Text>
          <CheckBox checked={isDone} onPress={Onpress} />
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
