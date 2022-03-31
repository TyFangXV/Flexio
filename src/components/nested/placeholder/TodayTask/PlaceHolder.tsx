import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import Colors from '../../../../constants/Colors';

const PlaceHolderImage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./TaskPlaceHolder.png')}
        style={{ width: '100%', height: 300 }}
      />
      <Text style={styles.warner}>No Task Has been added</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container : {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  warner: {
    fontSize: 20,
    fontFamily: 'Amiko-Bold',
    color: Colors.light.text_secondary,
  },
});

export default PlaceHolderImage;
