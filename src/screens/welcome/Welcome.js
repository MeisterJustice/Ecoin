import React from 'react';
import {View, Text, Image} from 'react-native';
import Styles from '../../Styles';
import Statusbar from '../../components/Statusbar';

const Welcome = ({text, title, bgColor, image, lineColor, top}) => {
  return (
    <View style={{flex: 1}}>
      <View style={[Styles.introHeader, {backgroundColor: bgColor}]}>
        <View style={[Styles.line1, {borderColor: lineColor}]} />
        <View style={[Styles.line2, {borderColor: lineColor}]} />
        <View style={[Styles.line3, {borderColor: lineColor}]} />
        <View style={[Styles.line4, {borderColor: lineColor}]} />
      </View>
      <View style={[Styles.introImage, {top: top}]}>
        <Image style={Styles.introImage} source={image} resizeMode="contain" />
      </View>
      <View style={Styles.introTextWrapper}>
        <Text style={Styles.introTitle}>{title}</Text>
        <View style={Styles.introDash} />
        <Text style={Styles.introText}>{text}</Text>
      </View>
    </View>
  );
};

export default Welcome;
