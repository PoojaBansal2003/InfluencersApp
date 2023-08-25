import React from 'react';
import {TextInput} from 'react-native';
import {darkGreen} from './Constants';

const Field = ({ placeholder, keyboardType, onChangeText, value }) => {
  return (
    <TextInput
      style={{borderRadius: 100, color: darkGreen, paddingHorizontal: 15, width: '65%', backgroundColor: 'rgb(220,220, 220)', marginVertical: 10, paddingLeft: 20, marginRight: 50}}
      placeholder={placeholder}
      keyboardType={keyboardType}
      onChangeText={onChangeText}
      value={value}
      placeholderTextColor={darkGreen}>
      </TextInput>
  );
};

export default Field;