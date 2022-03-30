import React from 'react';
import { Image } from 'react-native';

const PlaceHolderImage: React.FC = () => {
  return (
    <Image
      source={require('./TaskPlaceHolder.png')}
      style={{ width: "100%", height: 300 }}
    />
  );
};

export default PlaceHolderImage;
