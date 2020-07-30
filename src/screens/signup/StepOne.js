import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Styles from '../../Styles';
import TextInput from '../../components/textInputs/TextInput';
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
            placeholder="Enter 11 Digit Mobile Number"
            keyboardType="number-pad"
            maxLength={11}
            value={props.mobileNumber}
            onChange={props.handleMobileNumberChange}
          />
        </View>
      </View>
    </View>
  );
};

export default StepOne;
