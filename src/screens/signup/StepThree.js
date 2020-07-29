import React from 'react';
import {View, Text, TextInput} from 'react-native';
import Styles from '../../Styles';

const StepThree = (props) => {
  return (
    <View style={Styles.wrapper}>
      <View style={Styles.alignItems}>
        <View>
          <Text style={Styles.blackBoldTitle}>Create</Text>
        </View>
        <View>
          <Text style={Styles.greenBoldTitle}>Password</Text>
        </View>
      </View>
      <View>
        <Text style={Styles.signupDescription}>
          Create Your coinbox password
        </Text>
      </View>
      <View style={Styles.inputWrapper}>
        <View>
          <TextInput
            placeholder="Enter Your Password"
            secureTextEntry={true}
            placeholderTextColor="rgba(0, 0, 0, 0.61)"
            style={Styles.inputStyle}
            value={props.password}
            onChangeText={props.handlePasswordChange}
          />
        </View>
        <View style={Styles.inputMargin}>
          <TextInput
            placeholder="Confirm Password"
            secureTextEntry={true}
            placeholderTextColor="rgba(0, 0, 0, 0.61)"
            style={Styles.inputStyle}
            value={props.confirmPassword}
            onChangeText={props.handleConfirmPasswordChange}
          />
        </View>
      </View>
    </View>
  );
};

export default StepThree;
