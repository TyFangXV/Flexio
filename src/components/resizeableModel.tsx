import react, { ReactNode, useRef, useState } from 'react';
import { View, ViewProps, Text, StyleSheet, Pressable, Animated } from 'react-native';
import { Icon } from 'react-native-elements';

type Props = {
  children: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<View> &
    Readonly<ViewProps> &
    Readonly<{ children?: ReactNode }>;
  title: string;
  color: string;
};

const ResizableModel = ({ title, children, color }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const transition  = useRef(new Animated.Value(0)).current;

  //animation for a clean opening/closing of the model by increasing the height of the model
  const openingAnimation = () => {
    Animated.timing(transition, {
      toValue: isOpen ? 0 : 100,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const toggle = () => {
    openingAnimation();
    setIsOpen(!isOpen)
  }

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <View>
        <Pressable onPress={toggle} style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <View>
            <Icon
              type="MaterialIcons"
              name={isOpen ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
              size={30}
              color="white"
              style={styles.icon}
              tvParallaxProperties={undefined}
            />
          </View>
        </Pressable>
      </View>
      <Animated.View style={{ display: isOpen ? 'flex' : 'none',  maxHeight : transition }}>{children}</Animated.View>
    </View>
  );
};

export default ResizableModel;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 10,
    margin: 5,
  },
  title: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'Amiko-Bold',
  },
  header: {
    width: '55%',
    flexDirection: 'row',
  },
  icon: {
    padding: 0,
    margin: 0,
    color: 'white',
  },
});
