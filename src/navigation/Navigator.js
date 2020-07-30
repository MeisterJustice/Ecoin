import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from '../screens/SplashScreen';
import WelcomeScreen from '../screens/welcome/WelcomeScreen';
import AuthLandingScreen from '../screens/AuthLandingScreen';
import SignupScreen from '../screens/signup/SignupScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';

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
          screenOptions={{
            gestureEnabled: true,
            headerStyle: {
              backgroundColor: 'rgba(255,255,255,0.0005)',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTintColor: '#6FCF97',
          }}>
          <Stack.Screen
            name="splash"
            component={this.state.isLoading ? SplashScreen : WelcomeScreen}
            options={{title: 'splash screen', headerShown: false}}
          />
          <Stack.Screen
            name="authLanding"
            component={AuthLandingScreen}
            options={{title: 'auth landing', headerShown: false}}
          />
          <Stack.Screen
            name="signUp"
            component={SignupScreen}
            options={{title: 'sign up', headerShown: false}}
          />
          <Stack.Screen
            name="forgotPassword"
            component={ForgotPasswordScreen}
            options={{title: 'Reset Password', headerShown: true}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigator;
