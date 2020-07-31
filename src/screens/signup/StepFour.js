import React from 'react';
import {View, Text} from 'react-native';
import TextInput from '../../components/textInputs/TextInput';
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
            value={props.firstName}
            onChange={props.onChange('firstName')}
          />
        </View>
        <View style={Styles.inputMargin}>
          <TextInput
            placeholder="Last Name"
            value={props.lastName}
            onChange={props.onChange('lastName')}
          />
        </View>
        <View style={Styles.inputMargin}>
          <TextInput
            placeholder="Email Address"
            keyboardType="email-address"
            value={props.emailAddress}
            onChange={props.onChange('emailAddress')}
          />
        </View>
        <View style={Styles.inputMargin}>
          <TextInput
            placeholder="Invite Code"
            value={props.inviteCode}
            onChange={props.onChange('inviteCode')}
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
