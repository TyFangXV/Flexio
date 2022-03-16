import { useNavigation } from '@react-navigation/native';
import { StyleSheet, TextInput, View } from 'react-native';
import Header from '../components/PromptHeader';
import ResizableModel from '../components/resizeableModel';
import CustomeSafeView from '../components/root/View';
import Colors from '../constants/Colors';

const AddTask = () => {
  const navigation = useNavigation();
  return (
    <CustomeSafeView>
      <View style={styles.header}>
        <Header
          title="Add your task"
          cancelFunction={() => navigation.goBack()}
          acceptFunction={() => console.log('accept')}
        />
      </View>
      <View>
        <ResizableModel
          title="Enter your task"
          color={Colors.light.modelBackground}
        >
          <TextInput style={styles.input} placeholder="Type here" />
        </ResizableModel>
        <ResizableModel
          title="Enter your task"
          color={Colors.light.modelBackground}
        >
          <TextInput style={styles.input} placeholder="Type here" />
        </ResizableModel>
        <ResizableModel
          title="Enter your task"
          color={Colors.light.modelBackground}
        >
          <TextInput style={styles.input} placeholder="Type here" />
        </ResizableModel>
        <ResizableModel
          title="Enter your task"
          color={Colors.light.modelBackground}
        >
          <TextInput style={styles.input} placeholder="Type here" />
        </ResizableModel>
      </View>
    </CustomeSafeView>
  );
};

const styles = StyleSheet.create({
  header: {
    margin: 5,
  },
  input: {
    margin : 0,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
});

export default AddTask;
