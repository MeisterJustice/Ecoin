import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from '../screens/SplashScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import AuthLanding from '../screens/AuthLanding';
import SignupScreen from '../screens/signup/SignupScreen';

const Stack = createStackNavigator();

class Navigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 3000);
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="splash"
          screenOptions={{gestureEnabled: true}}>
          <Stack.Screen
            name="splash"
            component={this.state.isLoading ? SplashScreen : WelcomeScreen}
            options={{title: 'splash screen', headerShown: false}}
          />
          <Stack.Screen
            name="authLanding"
            component={AuthLanding}
            options={{title: 'auth landing', headerShown: false}}
          />
          <Stack.Screen
            name="signUp"
            component={SignupScreen}
            options={{title: 'sign up', headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigator;
