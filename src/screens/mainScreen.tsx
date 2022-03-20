import React from 'react';
import { StyleSheet, Text } from 'react-native';
import View from '../components/root/View';
import { RootTabScreenProps } from '../../types';
import TopButtons from '../components/nested/mainScreen/TopButtons';
import TodaysTask from '../components/nested/mainScreen/TodaysTask';


export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <TopButtons />
      <TodaysTask/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : "red"
  },

});
