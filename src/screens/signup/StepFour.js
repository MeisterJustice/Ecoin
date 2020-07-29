import React from 'react';
import {View, Text, TextInput} from 'react-native';
import Styles from '../../Styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

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
            By Clicking Get Started, You agree to our
            <TouchableOpacity>
              <Text style={[Styles.primaryColor, {marginTop: '5%'}]}>
                Terms And Conditions.
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default StepFour;
