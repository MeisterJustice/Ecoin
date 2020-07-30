import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Styles from '../../Styles';

const Button = (props) => {
  return (
    <TouchableOpacity
      style={[Styles.inputButtonWrapper, {marginBottom: 80}]}
      onPress={props.onPress}>
      <View style={Styles.inputButton}>
        <Text style={Styles.inputText}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
