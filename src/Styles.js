import {StyleSheet, Dimensions, Platform, StatusBar} from 'react-native';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryBackgroudColor: {
    backgroundColor: '#6FCF97',
  },
  primaryColor: {
    color: '#6FCF97',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '' + (200 / Dimensions.get('window').width) * 100 + '%',
    height: 160,
  },
  logo: {
    flex: 1,
    width: '' + (200 / Dimensions.get('window').width) * 100 + '%',
    height: '160%',
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  introHeader: {
    width: '100%',
    height: '' + (300 / Dimensions.get('window').height) * 100 + '%',
  },
  line1: {
    position: 'absolute',
    width: 52.8,
    height: 0,
    left: '' + (130 / Dimensions.get('window').width) * 100 + '%',
    top: '' + (250 / Dimensions.get('window').height) * 100 + '%',
    borderWidth: 1,
    borderStyle: 'solid',
    transform: [{rotate: '-52.7deg'}],
  },
  line2: {
    position: 'absolute',
    width: 108.47,
    height: 0,
    left: '' + (150 / Dimensions.get('window').width) * 100 + '%',
    top: '' + (250 / Dimensions.get('window').height) * 100 + '%',
    borderWidth: 1,
    borderStyle: 'solid',
    transform: [{rotate: '-55.14deg'}],
  },
  line3: {
    position: 'absolute',
    width: 156.72,
    height: 0,
    left: '' + (160 / Dimensions.get('window').width) * 100 + '%',
    top: '' + (290 / Dimensions.get('window').height) * 100 + '%',
    borderWidth: 1,
    borderStyle: 'solid',
    transform: [{rotate: '-55.4deg'}],
  },
  line4: {
    position: 'absolute',
    width: 114.81,
    height: 0,
    left: '' + (220 / Dimensions.get('window').width) * 100 + '%',
    top: '' + (330 / Dimensions.get('window').height) * 100 + '%',
    borderWidth: 1,
    borderStyle: 'solid',
    transform: [{rotate: '-52.43deg'}],
  },
  introImage: {
    width: '' + (287 / Dimensions.get('window').width) * 100 + '%',
    alignSelf: 'center',
    position: 'absolute',
  },

  introTextWrapper: {
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '20%',
  },
  introTitle: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 23,
    lineHeight: 37,
    color: '#000000',
  },
  introDash: {
    width: 30,
    height: 0,
    marginTop: '3%',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#6FCF97',
  },
  introText: {
    marginTop: '7%',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 27,
    color: '#828282',
  },
  // AUTH LANDING
  authLandingImageWrapper: {
    position: 'absolute',
    height: '' + (390 / Dimensions.get('window').height) * 100 + '%',
    top: 0,
  },
  authLandingImage: {
    height: '100%',
  },
  authLandingLoginButton: {
    width: 305,
    height: 47,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#6FCF97',
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#6FCF97',
    borderRadius: 5,
  },
  authLandingLoginText: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 30,
    color: '#BAE1B0',
  },
  authLandingTitle: {
    fontSize: 30,
    fontWeight: '600',
    lineHeight: 41,
  },
  authLandingSignupText: {
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 30,
    color: '#FFFFFF',
  },
  authLandingSignupButton: {
    width: 305,
    height: 47,
    marginTop: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6FCF97',
    borderWidth: 2,
    borderColor: '#6FCF97',
    borderRadius: 5,
  },
  authLandingMargin: {
    marginTop: '10%',
  },
  authLandingButtonWrapper: {
    marginTop: '110%',
    alignSelf: 'center',
  },

  // GENERIC
  scrollView: {
    flexGrow: 1,
  },
  center: {
    alignSelf: 'center',
  },
  wrapper: {
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '10%',
  },
  flex: {
    flex: 1,
  },

  // Signup
  alignItems: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: '4%',
  },
  blackBoldTitle: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 28,
    lineHeight: 42,
    color: 'rgba(0, 0, 0, 0.7)',
  },
  greenBoldTitle: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 28,
    lineHeight: 42,
    color: '#6FCF97',
    marginLeft: '9%',
  },
  signupDescription: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 27,
    marginRight: -5,
    color: '#C4C4C4',
  },
  inputStyle: {
    backgroundColor: '#F0FFEB',
    borderRadius: 6,
  },
  inputWrapper: {
    marginTop: '10%',
  },
  inputButtonWrapper: {
    marginTop: '15%',
  },
  inputButton: {
    width: 190,
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6FCF97',
    borderWidth: 2,
    borderColor: '#6FCF97',
    borderRadius: 5,
  },
  inputText: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 30,
    color: '#FFFFFF',
  },
  inputAlignItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '4%',
  },
  inputMargin: {
    marginTop: '5%',
  },
  // reset success page
  successImageWrapper: {
    height: '' + (250 / Dimensions.get('window').height) * 100 + '%',
    width: '' + (350 / Dimensions.get('window').height) * 100 + '%',
    alignSelf: 'center',
  },
  successImage: {
    height: '100%',
    width: '100%',
  },
  successViewWrapper: {
    marginTop: '5%',
  },
  successTitle: {
    fontSize: 28,
    lineHeight: 42,
    fontWeight: 'bold',
  },
  successButtonWrapper: {
    height: '30%',
  },
});

export default Styles;
