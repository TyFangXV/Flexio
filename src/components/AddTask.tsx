import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Entypo } from '@expo/vector-icons';
import Colors from "../constants/Colors";

const AddTask = () => {
    const navigation = useNavigation();

    return (
        <View>
            <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("AddTask")}>
            <Entypo name="circle-with-plus" size={30} color="white"/>
                <Text style={styles.text}>Add Task</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    btn : { 
        flexDirection : "row",
        alignItems : "center",
        backgroundColor : Colors["light"].foreground,
        borderRadius : 10,
        margin: 5,
        paddingTop : 2,
        paddingBottom : 2,
        paddingLeft : 5,
        paddingRight :  5,
        borderColor : "#DB00FF",
        borderWidth : 1

    },
    text : {
        color : "white",
        fontFamily : "Amiko-Bold",
        fontSize : 18,
        textAlign : "center",
        padding : 10
    }
})

export default AddTask;