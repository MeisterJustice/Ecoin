import React from 'react';
import {View, Text, Image} from 'react-native';
import Styles from '../../Styles';
import FluidButton from '../../components/buttons/FluidButton';

const StepTwo = (props) => {
  return (
    <View style={Styles.flex}>
      <View style={Styles.container}>
        <View style={Styles.successImageWrapper}>
          <Image
            style={Styles.successImage}
            source={require('../../public/reset_success.png')}
            resizeMode="contain"
          />
        </View>
        <View style={Styles.successViewWrapper}>
          <Text
            style={[Styles.successTitle, Styles.primaryColor, Styles.center]}>
            Success
          </Text>
        </View>
        <View style={Styles.successViewWrapper}>
          <View>
            <Text style={Styles.signupDescription}>
              Your password has been Changed
            </Text>
          </View>
          <View>
            <Text style={[Styles.signupDescription, Styles.center]}>
              Successfully
            </Text>
          </View>
        </View>
      </View>
      <View style={Styles.successButtonWrapper}>
        <View style={[Styles.center, {marginTop: '4%'}]}>
          <FluidButton
            onPress={() => console.log('pressed')}
            text="Go To Log In"
          />
        </View>
      </View>
    </View>
  );
};

export default StepTwo;
