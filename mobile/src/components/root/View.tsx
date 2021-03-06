import React, { ReactNode } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  View,
  StyleSheet,
  ViewProps,
  Platform,
  SafeAreaView,
} from 'react-native';

/*
 Add padding to the top of the screen if the platform is android and put the children in SafeView if the platform is ios to avoid the Notch from covering the children.
*/

const view = (
  props: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<View> &
    Readonly<ViewProps> &
    Readonly<{ children?: ReactNode }>
) => {
  const insets = useSafeAreaInsets();
  return (
    <>
      {Platform.OS === 'ios' ? (
        <SafeAreaView {...props} style={style.container}>
          {props.children}
        </SafeAreaView>
      ) : (
        <View {...props} style={{paddingTop : insets.top}}>
          {props.children}
        </View>
      )}
    </>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
});

export default view;
