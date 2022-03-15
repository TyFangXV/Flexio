import SafeView from "../components/root/View";
import { Text, StyleSheet, View } from "react-native";
import Header from "../components/PromptHeader";
import { useNavigation } from "@react-navigation/native";
const AddTask = ()=>{
    const navigation = useNavigation();
    return (
        <SafeView>
            <View style={styles.header}>
                <Header title="Add your task" cancelFunction={()=> navigation.goBack()} acceptFunction={()=> console.log("accept")}/>
            </View>
        </SafeView>
    )
}


const styles = StyleSheet.create({
    header : {
        margin : 5
    }
})

export default AddTask;