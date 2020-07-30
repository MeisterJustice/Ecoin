import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Styles from '../../Styles';

const FluidButton = (props) => {
  return (
    <View>
      <TouchableOpacity onPress={props.onPress}>
        <View style={Styles.authLandingSignupButton}>
          <Text style={Styles.authLandingSignupText}>{props.text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FluidButton;
