import React from 'react';
import {View, Text} from 'react-native';
import Styles from '../Styles';
import TextInput from '../components/textInputs/TextInput';
import Button from '../components/buttons/Button';

const ForgotPasswordScreen = (props) => {
  return (
    <View style={Styles.flex}>
      <View style={Styles.wrapper}>
        <View style={Styles.alignItems}>
          <View>
            <Text style={Styles.blackBoldTitle}>Forgot</Text>
          </View>
          <View>
            <Text style={Styles.greenBoldTitle}>Password</Text>
          </View>
        </View>
        <View>
          <Text style={Styles.signupDescription}>Enter your email address</Text>
        </View>
        <View style={Styles.inputWrapper}>
          <View>
            <TextInput
              placeholder="Enter Your Email Address"
              keyboardType="numeric"
              maxLength={11}
              value={props.mobileNumber}
              onChange={props.handleMobileNumberChange}
            />
          </View>
        </View>
        <Button
          onPress={() => props.navigation.navigate('resetPassword')}
          text="Continue"
        />
      </View>
    </View>
  );
};

export default ForgotPasswordScreen;
