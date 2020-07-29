import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Styles from '../../Styles';
import Statusbar from '../../components/Statusbar';

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
        <View style={Styles.inputAlignItems}>
          <View>
            <TextInput
              placeholder="*"
              autoFocus={true}
              returnKeyType={'next'}
              secureTextEntry={true}
              placeholderTextColor="rgba(0, 0, 0, 0.61)"
              style={Styles.inputCircleStyle}
              keyboardType="numeric"
              maxLength={1}
              value={props.otp1}
              onChangeText={props.handleOtp1Change}
              //   onSubmitEditing={this.handleFirstInputSubmit}
            />
          </View>
          <View>
            <TextInput
              placeholder="*"
              secureTextEntry={true}
              //   autoFocus={this.state.firstInputFocus}
              returnKeyType={'next'}
              placeholderTextColor="rgba(0, 0, 0, 0.61)"
              style={Styles.inputCircleStyle}
              keyboardType="numeric"
              maxLength={1}
              value={props.otp2}
              onChangeText={props.handleOtp2Change}
              //   onSubmitEditing={this.handleFirstInputSubmit}
            />
          </View>
          <View>
            <TextInput
              placeholder="*"
              secureTextEntry={true}
              //   autoFocus={this.state.firstInputFocus}
              returnKeyType={'next'}
              placeholderTextColor="rgba(0, 0, 0, 0.61)"
              style={Styles.inputCircleStyle}
              keyboardType="numeric"
              maxLength={1}
              value={props.otp3}
              onChangeText={props.handleOtp3Change}
              //   onSubmitEditing={this.handleFirstInputSubmit}
            />
          </View>
          <View>
            <TextInput
              placeholder="*"
              secureTextEntry={true}
              //   autoFocus={this.state.firstInputFocus}
              returnKeyType={'next'}
              placeholderTextColor="rgba(0, 0, 0, 0.61)"
              style={Styles.inputCircleStyle}
              keyboardType="numeric"
              maxLength={1}
              value={props.otp4}
              onChangeText={props.handleOtp4Change}
              //   onSubmitEditing={this.handleFirstInputSubmit}
            />
          </View>
          <View>
            <TextInput
              placeholder="*"
              secureTextEntry={true}
              //   autoFocus={this.state.firstInputFocus}
              returnKeyType={'next'}
              placeholderTextColor="rgba(0, 0, 0, 0.61)"
              style={Styles.inputCircleStyle}
              keyboardType="numeric"
              maxLength={1}
              value={props.otp5}
              onChangeText={props.handleOtp5Change}
              //   onSubmitEditing={this.handleFirstInputSubmit}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default StepTwo;
