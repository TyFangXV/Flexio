import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, Linking, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Account } from '../../types';
import Divider from '../components/Divider';
import AccountInfo from '../components/nested/AccountScreen/AccountInfo';
import SignInComponent from '../components/nested/AccountScreen/SignIn';
import SignUpComponent from '../components/nested/AccountScreen/SignUp';
import SwitchAuthorizationStatus from '../components/nested/AccountScreen/SwitchAuthorizationStatus';
import SafeView from '../components/root/View';
import Colors from '../constants/Colors';
import Setting from '../constants/Setting';
import { RootState } from '../redux/reducers';
import { UpdateAccount } from '../redux/reducers/Account';
import { getItem, setItem } from '../utils/database';

const verifyAuth = async(id:string, password :string) => {
  try {
    const {data:res} = await axios.post(`${Setting.ApiUrl}/auth/account/verify`, {
      id,
      password
    })

    if(res.data !== null)
    {
      return true
    }else{
      return false
    }
  } catch (error) {
    console.log(error)
  }
}

const AccountScreen: React.FC = () => {
  const dispatch = useDispatch();
  const account = useSelector((state: RootState) => state.Account);
  const [isSignInStatus, setAuthorizationStatus] = useState<boolean>(true);

  useEffect(() => {
    //check if the user auth data is stored locally and if so authenticate with it 
    (async()=> {
      const storageResponse = await getItem("account");
      if(storageResponse !== null)
      {
        const parsedData:Account = JSON.parse(storageResponse as string);
        if(!account.isSignIn)
        {
            const res = await verifyAuth(account._id, account.password);
            if(res === true)
            {
              dispatch(UpdateAccount(parsedData));
            }else{
              alert("Authentication failed")
            }
        }
      }
    })()
  })


  return (
    <SafeView>
      {!account.isSignIn ? (
        <>
          {isSignInStatus ? <SignInComponent OnPressEvent={() => console.log("drex")}/> : <SignUpComponent />}
          <SwitchAuthorizationStatus
            onClick={() => setAuthorizationStatus(!isSignInStatus)}
            status={isSignInStatus}
          />
        </>
      ) : (
        <View>
            <AccountInfo email={account.email} password={account.username} username={account.username} _id={account._id} isSignIn={false}/>
        </View>
      )}
    </SafeView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AccountScreen;
