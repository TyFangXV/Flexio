import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import Colors from '../../../../constants/Colors';

const PlaceHolderImage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./time.png')}
        style={{ width: '100%', height: 300 }}
      />
      <Text style={styles.warner}>No Task Has been found</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container : {
    flexDirection : "column",
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems : "center"
  },
  warner: {
    fontSize: 20,
    fontFamily: 'Amiko-Bold',
    color: Colors.light.text_secondary,
  },
});

export default PlaceHolderImage;