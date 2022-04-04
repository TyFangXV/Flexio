import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import View from '../components/root/View'
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  scopes : ["https://www.googleapis.com/auth/calendar"],
  webClientId : ""
});


const signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    console.log(userInfo);
    
  } catch (error:any) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      console.log("SIGN_IN_CANCELLED");
      
    } else if (error.code === statusCodes.IN_PROGRESS) {
      console.log("IN_PROGRESS");
      
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      console.log("PLAY_SERVICES_NOT_AVAILABLE");
      
    } else {
      console.log(error);
    }
  }
};

export default function TabTwoScreen() {
  return (
    <View>
       <TouchableOpacity style={{backgroundColor : "red"}} onPress={signIn}>
         <Text>SignIn</Text>
       </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({

});
