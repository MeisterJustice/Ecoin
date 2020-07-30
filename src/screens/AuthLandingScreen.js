import React from 'react';
import {View, Text, Image, Button, TouchableOpacity} from 'react-native';
import Styles from '../Styles';
import Statusbar from '../components/Statusbar';
import FluidButton from '../components/buttons/FluidButton';

const AuthLanding = (props) => {
  return (
    <View style={Styles.container}>
      <Statusbar barStyle="translucent" backgroundColor="transparent" />
      <View style={Styles.authLandingImageWrapper}>
        <Image
          style={Styles.authLandingImage}
          source={require('../public/authLanding.png')}
          resizeMode="cover"
        />
      </View>

      <View style={Styles.authLandingButtonWrapper}>
        <View>
          <Text
            style={[
              Styles.primaryColor,
              Styles.authLandingTitle,
              Styles.center,
            ]}>
            CoinBox
          </Text>
        </View>
        <View style={Styles.authLandingMargin}>
          <TouchableOpacity>
            <View style={Styles.authLandingLoginButton}>
              <Text style={Styles.authLandingLoginText}>Log In</Text>
            </View>
          </TouchableOpacity>
          <FluidButton
            onPress={() => props.navigation.navigate('signUp')}
            text="Register"
          />
        </View>
      </View>
    </View>
  );
};

export default AuthLanding;
