/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { Icon } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, TouchableOpacity, StyleSheet } from 'react-native';
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from '../../types';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/mainScreen';
import TabTwoScreen from '../screens/AccountScreen';
import LinkingConfiguration from './LinkingConfiguration';
import AddTask from '../screens/AddTaskScreen';
import HistoryScreen from '../screens/HistoryScreen';

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#E2EAF1',
  },
};

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer linking={LinkingConfiguration} theme={Theme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddTask"
        component={AddTask}
        options={{ headerShown: false }}
      />
      
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabTwo"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors['light'].foreground,
          margin: 5,
          paddingTop: 20,
          borderRadius: 5,
        },
      }}
    >
      <BottomTab.Screen
        name="TabOne"
        component={HistoryScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: '',
          tabBarIcon: ({focused}) => (
              <MaterialIcons 
                name="history"
                size={40}
                style={styles.icon}
                color={focused ? "#00A3FF" : "white"}
                tvParallaxProperties={undefined}
              />
          ),
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabOneScreen}
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
              <MaterialIcons 
                name="home"
                color={focused ? "#00A3FF" : "white"}
                style={styles.icon}
                size={40}
                tvParallaxProperties={undefined}
              />
          ),
        }}
      />
      <BottomTab.Screen
        name={'TabThree'}
        component={TabTwoScreen}
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
              <MaterialIcons 
                name="account-circle"
                size={40}
                style={styles.icon}
                color={focused ? "#00A3FF" : "white"}
                tvParallaxProperties={undefined}
              />
          ),  
        }}
      />
    </BottomTab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    height: 40,
  },
});
