import React from 'react';
import { NativeEventEmitter, NativeSyntheticEvent, TextInput, TextInputChangeEventData } from 'react-native';

type CustomTextInputProps = {
  value: string;
  onChangeText: (text: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  placeholder: string;
};

const CustomTextInput: React.FC<CustomTextInputProps> = ({ onChangeText, value, placeholder }) => {
  return (
    <TextInput
      onChange={(e) => onChangeText(e)}
      value={value}
      placeholder={placeholder}
      style={{
        height: 60,
        borderColor: 'gray',
        borderWidth: 2,
        margin: 10,
        padding: 10,
        borderRadius : 10,
        width : '85%',
      }} />
  );
};

export default CustomTextInput;
