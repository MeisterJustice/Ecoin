import React from 'react';
import {View, Text, Image, Button, TouchableOpacity} from 'react-native';
import Styles from '../Styles';
import Statusbar from '../components/Statusbar';

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
        <TouchableOpacity>
          <View style={Styles.authLandingLoginButton}>
            <Text style={Styles.authLandingLoginText}>Log In</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('signUp')}>
          <View style={Styles.authLandingSignupButton}>
            <Text style={Styles.authLandingSignupText}>Register</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AuthLanding;
