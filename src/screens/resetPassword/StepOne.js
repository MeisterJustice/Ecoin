import React from 'react';
import {View, Text} from 'react-native';
import Styles from '../../Styles';
import Button from '../../components/buttons/Button';
import TextInput from '../../components/textInputs/TextInput';

const StepOne = (props) => {
  return (
    <View style={Styles.flex}>
      <View style={Styles.wrapper}>
        <View>
          <Text style={Styles.signupDescription}>Enter your new password</Text>
        </View>
        <View style={Styles.inputWrapper}>
          <View>
            <TextInput
              placeholder="Enter Your New Password"
              isSecure={true}
              value={props.password}
              onChange={props.onChange('password')}
            />
          </View>
          <View style={Styles.inputMargin}>
            <TextInput
              placeholder="Confirm Password"
              isSecure={true}
              value={props.confirmPassword}
              onChange={props.onChange('confirmPassword')}
            />
          </View>
        </View>
        <Button onPress={props.nextPage} text="Reset" />
      </View>
    </View>
  );
};

export default StepOne;
