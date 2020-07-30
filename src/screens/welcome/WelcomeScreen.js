import React, {Component, Fragment} from 'react';
import {View, StatusBar, Text, Dimensions} from 'react-native';
import Styles from '../../Styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Welcome from './Welcome';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: '1',
    title: 'Save',
    text:
      'Create savings in form of boxes and get compound interest on your savings',
    image: require('../public/piggy.png'),
    backgroundColor: '#6FCF97',
    lineColor: '#219653',
    top: '' + (195 / Dimensions.get('window').height) * 100 + '%',
  },
  {
    key: '2',
    title: 'Borrow Money',
    text:
      'Get more than 100% of current value of savings by getting your colleagues faciltate your loan',
    image: require('../public/refer1.png'),
    backgroundColor: '#67E66A',
    lineColor: '#49914a',
    top: '' + (100 / Dimensions.get('window').height) * 100 + '%',
  },
  {
    key: '3',
    title: 'Refer and Earn',
    text:
      'Invite a friend and get commissions when your friend saves with CoinBox',
    image: require('../public/piggy2.png'),
    backgroundColor: '#FFF8B3',
    lineColor: '#c7ba48',
    top: '' + (165 / Dimensions.get('window').height) * 100 + '%',
  },
];

class WelcomeScreen extends Component {
  _renderItem = ({item}) => {
    return (
      <Welcome
        key={item.key}
        title={item.title}
        text={item.text}
        bgColor={item.backgroundColor}
        image={item.image}
        lineColor={item.lineColor}
        top={item.top}
      />
    );
  };

  _renderDoneButton = () => {
    return (
      <View style={Styles.buttonCircle}>
        <Icon name="md-checkmark" color="#6FCF97" size={24} />
      </View>
    );
  };

  _onDone = () => {
    this.props.navigation.navigate('authLanding');
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <AppIntroSlider
          renderItem={this._renderItem}
          data={slides}
          onDone={this._onDone}
          renderDoneButton={this._renderDoneButton}
        />
      </View>
    );
  }
}

export default WelcomeScreen;
