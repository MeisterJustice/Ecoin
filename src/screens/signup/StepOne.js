import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Styles from '../../Styles';
import Statusbar from '../../components/Statusbar';

const StepOne = (props) => {
  return (
    <View style={Styles.wrapper}>
      <View style={Styles.alignItems}>
        <View>
          <Text style={Styles.blackBoldTitle}>Get</Text>
        </View>
        <View>
          <Text style={Styles.greenBoldTitle}>Started</Text>
        </View>
      </View>
      <View>
        <Text style={Styles.signupDescription}>
          Create your account and start Putting your coins in boxes
        </Text>
      </View>
      <View style={Styles.inputWrapper}>
        <View>
          <TextInput
            placeholder="Enter 11 Digits Mobile Number"
            placeholderTextColor="rgba(0, 0, 0, 0.61)"
            style={Styles.inputStyle}
            keyboardType="numeric"
            maxLength={11}
            value={props.mobileNumber}
            onChangeText={props.handleMobileNumberChange}
          />
        </View>
      </View>
    </View>
  );
};

export default StepOne;
