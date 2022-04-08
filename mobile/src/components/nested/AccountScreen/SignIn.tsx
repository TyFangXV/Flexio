import axios from "axios";
import React, { useState } from "react";
import { View, Text, StyleSheet, Touchable, TouchableOpacity, Alert } from "react-native";
import { useDispatch } from "react-redux";
import { Account } from "../../../../types";
import Colors from "../../../constants/Colors";
import Setting from "../../../constants/Setting";
import { UpdateAccount } from "../../../redux/reducers/Account";
import { setItem } from "../../../utils/database";
import Divider from '../../Divider'
import CustomTextInput from "../../root/CustomTextInputProps";

interface Props {
    OnPressEvent: () => void;
}

const SignInComponent:React.FC<Props> = ({OnPressEvent}) => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    
    const setUpUser = async(account: Account) => { 
        await setItem("account", JSON.stringify(account))
        dispatch(UpdateAccount(account));
    }

    const signIn = async() => {
        try {

            if(email.length === 0 || password.length === 0) {
                alert("The email or password is empty");
                return;
            }

            const {data} = await axios.post(`${Setting.ApiUrl}/auth/account/signin`, {
                email,
                password
            })

            console.log(data);
            
            
            if(data.data !== null)
            {
                const userData:Account = {
                        id: data.data.id,
                        email: data.data.email,
                        username : data.data.username,
                        password : data.data.password,
                        isSignIn : true,
                }                 
                await setUpUser(userData);
            }else{
                alert(data.error);
            }
        
        } catch (error) {
            console.log(error);
            
        }

        
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign-In to your Account</Text>
            <Divider width={"90%"} color={Colors.light.foreground} height={5}/>
            <View style={{minHeight : 20}}></View>
            <CustomTextInput value={email} onChangeText={(e)=> setEmail(e.nativeEvent.text)} placeholder={"Enter your Email"} />
            <CustomTextInput value={password} onChangeText={(e)=> setPassword(e.nativeEvent.text)} placeholder={"Enter your Password"} />
            <View style={{minHeight : 20}}></View>
            <TouchableOpacity style={styles.btn} onPress={async() => {await signIn(); OnPressEvent()}}>
                <Text style={styles.SignInText}>Sign In</Text>
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

export default SignInComponent;