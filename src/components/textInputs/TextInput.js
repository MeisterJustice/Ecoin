import React from 'react';
import {TextInput} from 'react-native';
import Styles from '../../Styles';

const Input = (props) => {
  return (
    <>
      <TextInput
        placeholder={props.placeholder}
        secureTextEntry={props.isSecure}
        placeholderTextColor="rgba(0, 0, 0, 0.61)"
        style={Styles.inputStyle}
        value={props.value}
        keyboardType={props.keyboardType}
        onChangeText={props.onChange}
        maxLength={props.maxLength}
      />
    </>
  );
};

export default Input;
