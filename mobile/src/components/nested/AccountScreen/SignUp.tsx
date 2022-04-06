import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";
import Divider from '../../Divider';
import CustomTextInput from "../../root/CustomTextInputProps";

const SignUpComponent:React.FC = () => {
    const [username , setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Sign-Up for an Account</Text>
        <Divider width={"90%"} color={Colors.light.foreground} height={5}/>
        <View style={{minHeight : 20}}></View>
        <CustomTextInput value={username} onChangeText={(e)=> setUsername(e.nativeEvent.text)} placeholder={"Enter your Username"} />
        <CustomTextInput value={email} onChangeText={(e)=> setEmail(e.nativeEvent.text)} placeholder={"Enter your Email"} />
        <CustomTextInput value={password} onChangeText={(e)=> setPassword(e.nativeEvent.text)} placeholder={"Enter your Password"} />
        <View style={{minHeight : 20}}></View>
        <TouchableOpacity style={styles.btn}>
            <Text style={styles.SignInText}>Sign Up</Text>
        </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
    title : {
        fontSize: 20,
        fontFamily : "Amiko-Bold",
        color: Colors.light.foreground,
    },
    btn : {
        backgroundColor: Colors.light.modelBackground,
        width : "35%",
        height : 50,
        borderRadius: 10,
        borderColor : Colors.light.foreground,
        borderWidth : 2,
        justifyContent : "center",
        alignItems : "center",
    },
    SignInText : {
        fontSize : 20,
        fontFamily : "Amiko-Bold",
        color : "white"
    }
})

export default SignUpComponent;