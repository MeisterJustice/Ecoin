import React from 'react';
import {View, Text, TextInput} from 'react-native';
import Styles from '../../Styles';

const StepFour = (props) => {
  return (
    <View style={Styles.wrapper}>
      <View style={Styles.alignItems}>
        <View>
          <Text style={Styles.blackBoldTitle}>Personal</Text>
        </View>
        <View>
          <Text style={Styles.greenBoldTitle}>Details</Text>
        </View>
      </View>
      <View style={Styles.inputWrapper}>
        <View>
          <TextInput
            placeholder="First Name"
            placeholderTextColor="rgba(0, 0, 0, 0.61)"
            style={Styles.inputStyle}
            value={props.firstName}
            onChangeText={props.handleFirstNameChange}
          />
        </View>
        <View style={Styles.inputMargin}>
          <TextInput
            placeholder="Last Name"
            placeholderTextColor="rgba(0, 0, 0, 0.61)"
            style={Styles.inputStyle}
            value={props.lastName}
            onChangeText={props.handleLastNameChange}
          />
        </View>
        <View style={Styles.inputMargin}>
          <TextInput
            placeholder="Email Address"
            placeholderTextColor="rgba(0, 0, 0, 0.61)"
            keyboardType="email-address"
            style={Styles.inputStyle}
            value={props.emailAddress}
            onChangeText={props.handleEmailAddressChange}
          />
        </View>
        <View style={Styles.inputMargin}>
          <TextInput
            placeholder="Invite Code"
            placeholderTextColor="rgba(0, 0, 0, 0.61)"
            style={Styles.inputStyle}
            value={props.inviteCode}
            onChangeText={props.handleInviteCodeChange}
          />
        </View>
        <View style={[Styles.inputWrapper, {marginRight: '15%'}]}>
          <Text style={Styles.signupDescription}>
            By Clicking Get Started, You agree to our{' '}
            <Text
              onPress={() => console.log('pressed')}
              style={Styles.primaryColor}>
              Terms And Conditions.
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default StepFour;
