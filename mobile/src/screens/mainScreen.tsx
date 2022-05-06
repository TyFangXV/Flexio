import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import SafeView from '../components/root/View';
import { RootTabScreenProps, Task } from '../../types';
import TopButtons from '../components/nested/mainScreen/TopButtons';
import TodaysTask from '../components/nested/mainScreen/TodaysTask';
import OnGoingTask from '../components/nested/mainScreen/OnGoingTask';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/reducers';
import Colors from '../constants/Colors';
import PlaceHolderImage from '../components/nested/placeholder/TodayTask/PlaceHolder';
import { addTaskList } from '../redux/reducers/tasklist';
import { SyncTaskWithRest } from '../utils/TaskManager';

const TabOneScreen: React.FC<any> = ({
  navigation,
}: RootTabScreenProps<'TabOne'>) => {
  const TaskList = useSelector((state: RootState) => state.TaskList);
  const Account = useSelector((state: RootState) => state.Account);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      if (Account.isSignIn) {
        const task = await SyncTaskWithRest(Account._id);
        dispatch(addTaskList(task));
      }
    })()
  }, []);

  return (
    <SafeView style={styles.container}>
      <TopButtons />
      {TaskList.length === 0 ? (
        <View style={styles.placeHolderContainer}>
          <PlaceHolderImage />
        </View>
      ) : (
        <View>
          <OnGoingTask />
          <TodaysTask />
        </View>
      )}
    </SafeView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
  placeHolderContainer: {},
  warner: {
    fontSize: 20,
    fontFamily: 'Amiko-Bold',
    color: Colors.light.text_secondary,
  },
});

export default TabOneScreen;
