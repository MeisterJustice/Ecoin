import React from 'react';
import {StyleSheet, View, Image, SafeAreaView, StatusBar} from 'react-native';
import Styles from '../Styles';
import Statusbar from '../components/Statusbar';

const SplashScreen = (props) => {
  return (
    <View style={{flex: 1}}>
      <Statusbar backgroundColor="#6FCF97" barStyle="light-content" />
      <View style={[Styles.container, Styles.primaryBackgroudColor]}>
        <View style={Styles.logoContainer}>
          <Image
            style={Styles.logo}
            source={require('../public/logo_1.png')}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
};

export default SplashScreen;
