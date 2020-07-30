import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import Styles from '../../Styles';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';

const StepTwo = (props) => {
  return (
    <View style={Styles.wrapper}>
      <View style={Styles.alignItems}>
        <View>
          <Text style={Styles.blackBoldTitle}>Verify</Text>
        </View>
        <View>
          <Text style={Styles.greenBoldTitle}>OTP</Text>
        </View>
      </View>
      <View>
        <Text style={Styles.signupDescription}>
          Verify the code sent to +2347084462591
        </Text>
      </View>
      <View style={Styles.inputWrapper}>
        <View style={Styles.center}>
          <SmoothPinCodeInput
            password
            autoFocus={true}
            placeholder=" * "
            mask="﹡"
            codeLength={5}
            cellStyle={{
              borderWidth: 2,
              borderRadius: 24,
              borderColor: '#6FCF97',
              backgroundColor: '#F0FFEB',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 7,
              },
              shadowOpacity: 0.41,
              shadowRadius: 9.11,

              elevation: 14,
            }}
            cellStyleFocused={{
              borderColor: '#6FCF97',
              backgroundColor: '#F0FFEB',
            }}
            textStyle={{
              fontSize: 24,
              color: 'rgba(0, 0, 0, 0.61)',
            }}
            textStyleFocused={{
              color: 'rgba(0, 0, 0, 0.61)',
            }}
            editable={true}
            onFulfill={props.handleOtpChange}
            keyboardType="number-pad"
            value={props.otp}
            restrictToNumbers={true}
            onTextChange={props.handleOtpChange}
          />
        </View>
      </View>
    </View>
  );
};

export default StepTwo;
