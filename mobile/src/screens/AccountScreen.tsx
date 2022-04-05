import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, Linking } from 'react-native';
import Divider from '../components/Divider';
import SignInComponent from '../components/nested/AccountScreen/SignIn';
import SwitchAuthorizationStatus from '../components/nested/AccountScreen/SwitchAuthorizationStatus';
import View from '../components/root/View';
import Colors from '../constants/Colors';

const AccountScreen:React.FC = () => {
  const [isSignInStatus, setAuthorizationStatus] = useState<boolean>(true);
  return (
    <View>
      {
        isSignInStatus ? (<SignInComponent/>) : (<Text>AccountScreen</Text>)
      }
      <SwitchAuthorizationStatus/>       
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