import React from 'react';
import {View, StatusBar} from 'react-native';
import Styles from '../Styles';
const Statusbar = ({backgroundColor, ...props}) => (
  <View style={[Styles.statusBar, {backgroundColor}]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);
export default Statusbar;
