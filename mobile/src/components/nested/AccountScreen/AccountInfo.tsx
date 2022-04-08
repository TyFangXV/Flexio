import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Account } from '../../../../types';
import ProfilePic from './profile_pic/Profile_pic';
import Setting from '../../../constants/Setting';
import Colors from '../../../constants/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import MinimizableModel from '../../MinimizableModel';
interface DataDisplayModelProps {
  title: string;
  data: string;
  icon: string;
}

const DataDisplayModel: React.FC<DataDisplayModelProps> = ({
  title,
  data,
  icon,
}) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <MaterialCommunityIcons
          name={icon as any}
          color={'black'}
          size={30}
          style={{
            borderRightWidth: 2,
            borderRightColor: Colors.light.foreground,
            paddingRight: 5,
          }}
        />
        <Text style={{ fontFamily: 'Amiko-Regular', marginLeft: 10 }}>
          {title}
        </Text>
      </View>
      <Text style={{ fontFamily: 'Amiko-Regular', paddingRight: 10 }}>
        {data}
      </Text>
    </View>
  );
};

const AccountInfo: React.FC<Account> = ({ username, email }) => {
  return (
    <View style={style.container}>
      <ProfilePic
        backgroundColor="Blue"
        height={150}
        width={150}
        imageStyle={{
          borderWidth: 2,
          borderColor: Colors.light.modelBackground,
          padding: 5,
        }}
      />
      <Text style={style.username}>{username}</Text>

      <MinimizableModel
        color={Colors.light.modelBackground}
        title="Account"
        width={'95%'}
      >
        <DataDisplayModel title="Email" data={email} icon="email" />
      </MinimizableModel>

      <MinimizableModel
        color={Colors.light.modelBackground}
        title="Stats"
        width={'95%'}
      >
          <Text>stats</Text>
      </MinimizableModel>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  username: {
    fontSize: 20,
    fontFamily: Setting.defaultFontFamily,
  },
});

export default AccountInfo;
