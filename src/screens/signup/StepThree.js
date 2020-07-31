import React from 'react';
import {View, Text} from 'react-native';
import Styles from '../../Styles';
import TextInput from '../../components/textInputs/TextInput';

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
    </View>
  );
};

export default StepThree;
