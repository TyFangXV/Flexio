import React from 'react';
import { Image } from 'react-native';

const OnGoingtaskPlaceHolder: React.FC = () => {
  return (
    <Image
      source={require('./time.png')}
      style={{ width: "50%", height: 200 }}
    />
  )
};

export default OnGoingtaskPlaceHolder;
