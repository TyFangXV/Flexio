import React from "react";
import { View, StyleSheet, Text, Pressable, TouchableOpacity } from "react-native";
import Colors from "../../../constants/Colors";
import Divider from '../../Divider'

const SwitchAuthorizationStatus:React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={{minHeight : 10}}></View>
            <Divider color={Colors.light.foreground} width={"90%"} height={2}/>
            <Pressable style={{flexDirection : "row"}}>
                <Text style={[styles.text]}>Doesn't have an Account?</Text>
                <TouchableOpacity>
                    <Text style={[styles.text, {textDecorationLine : "underline"}] }>Sign Up</Text>                    
                </TouchableOpacity>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        justifyContent : "center",
        alignItems : "center",
    },
    text : {
        fontSize : 15,
        fontFamily : "Amiko-Bold",
        color : Colors.light.foreground,
        marginHorizontal : 5,

    }
})

export default SwitchAuthorizationStatus;