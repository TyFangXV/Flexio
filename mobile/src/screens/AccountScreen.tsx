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
import { RootState } from '../redux/reducers';
import { UpdateAccount } from '../redux/reducers/Account';
import { getItem, setItem } from '../utils/database';

const AccountScreen: React.FC = () => {
  const dispatch = useDispatch();
  const account = useSelector((state: RootState) => state.Account);
  const [isSignInStatus, setAuthorizationStatus] = useState<boolean>(true);

  useEffect(() => {
    getItem("account")
        .then(value => {
            if(value !== null) {
                const parsedData:Account = JSON.parse(value as string);
                if(!account.isSignIn)
                {
                    dispatch(UpdateAccount(parsedData));
                }
            }
        }
    );
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
            <AccountInfo email={account.email} password={''} username={account.username} id={''} isSignIn={false}/>
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
