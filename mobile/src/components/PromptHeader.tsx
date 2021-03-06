import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

import Colors from "../constants/Colors";
import React from "react";

type HeaderType = {
    title : string,
    cancelFunction : () => void,
    acceptFunction : () => void
}

const Header:React.FC<HeaderType> = ({title, cancelFunction, acceptFunction}) => {
    return (
        <View style={styles.container}>
            <View style={styles.declineBtn}>
                <TouchableOpacity onPress={cancelFunction}>
                <MaterialIcons name="cancel" size={35} color="white" style={styles.btnIcon}/>
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>{title}</Text>    
            <View style={styles.acceptBtn}>
                <TouchableOpacity onPress={acceptFunction}>
                <AntDesign name="checksquare" size={35} color="white" style={styles.btnIcon}/>
                </TouchableOpacity>
            </View>         
        </View>
    )
}


export default Header;

const styles = StyleSheet.create({
    container  : {
        flexDirection : "row",
        justifyContent : "space-between",
        backgroundColor : Colors.light.foreground,
        borderRadius: 20
    },
    title : {
        fontSize : 23,
        textAlign : "center",
        fontFamily : "Amiko-Bold",
        padding : 10,
        color : "white"
    },
    declineBtn : {
        backgroundColor : Colors.light.red,
        padding : 5,
        borderTopLeftRadius : 10,
        borderBottomLeftRadius : 10,
    },
    acceptBtn : {
        backgroundColor : Colors.light.green,
        padding : 5,
        borderTopRightRadius : 10,
        borderBottomRightRadius : 10,
    },
    btnIcon : {
        padding : 2
    }
})