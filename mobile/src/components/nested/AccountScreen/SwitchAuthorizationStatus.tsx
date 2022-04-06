import React from "react";
import { View, StyleSheet, Text, Pressable, TouchableOpacity } from "react-native";
import Colors from "../../../constants/Colors";
import Divider from '../../Divider'

type Props = {
    onClick: () => void;
    status: boolean;
}
const SwitchAuthorizationStatus:React.FC<Props> = ({onClick, status}) => {
    return (
        <View style={styles.container}>
            <View style={{minHeight : 10}}></View>
            <Divider color={Colors.light.foreground} width={"90%"} height={2}/>
            <Pressable style={{flexDirection : "row"}}>
                <Text style={[styles.text]}>{status ? "Doesn't have an Account?" : "Already have an Account?"}</Text>
                <TouchableOpacity onPress={onClick}>
                    <Text style={[styles.text, {textDecorationLine : "underline"}]}>{status ? "Sign Up" : "Sign In"}</Text>                    
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