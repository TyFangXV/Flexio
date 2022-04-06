import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, Linking } from 'react-native';
import Divider from '../components/Divider';
import SignInComponent from '../components/nested/AccountScreen/SignIn';
import SignUpComponent from '../components/nested/AccountScreen/SignUp';
import SwitchAuthorizationStatus from '../components/nested/AccountScreen/SwitchAuthorizationStatus';
import View from '../components/root/View';
import Colors from '../constants/Colors';

const AccountScreen:React.FC = () => {
  const [isSignInStatus, setAuthorizationStatus] = useState<boolean>(true);
  return (
    <View>
      {
        isSignInStatus ? (<SignInComponent/>) : (<SignUpComponent/>)
      }
      <SwitchAuthorizationStatus onClick={() => setAuthorizationStatus(!isSignInStatus)} status={isSignInStatus}/>       
    </View>
  );
}


const styles = StyleSheet.create({
  container : {
    justifyContent : "center",
    alignItems : "center",
  }
});

export default AccountScreen;