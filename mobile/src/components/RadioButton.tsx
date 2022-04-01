import React from "react";
import { Ionicons } from '@expo/vector-icons';
import {Pressable, StyleSheet, View, TouchableOpacity } from "react-native";

type Props = {
    OnPress: () => void;

}

const RadioButton:React.FC<Props> = ({OnPress}) => {
    const [isChecked, setIsChecked] = React.useState(false);
    return (
        <View style={styles.container}>
            <Pressable style={styles.button}>
                <TouchableOpacity  onPress={() => {setIsChecked(!isChecked); OnPress()}}>
                <Ionicons name={isChecked ? "checkmark-circle" : "time"} size={30} color="white" />
                </TouchableOpacity>
            </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    button : {
        backgroundColor : "#ffffff50",
        borderWidth: 2,
        borderColor : "#ffff",
        borderRadius : 50,
        padding : 1,
        
    },
    container : {
        margin: 2
    }
})

export default RadioButton;