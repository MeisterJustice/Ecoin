import React, {Component} from 'react';
import Statusbar from '../../components/Statusbar';
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  Dimensions,
} from 'react-native';
import Styles from '../../Styles';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import StepThree from './StepThree';
import StepFour from './StepFour';
import {Header} from 'react-native-elements';

const {height} = Dimensions.get('window');

class SignupScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNumber: '',
      otp: '',
      page: 0,
      screenHeight: 0,
      firstInputFocus: true,
      secondInputFocus: false,
      thirdInputFocus: false,
      fourthInputFocus: false,
      fifthInputFocus: false,
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      emailAddress: '',
      inviteCode: '',
    };
  }

  nextPage = () => {
    if (this.state.page !== 3) {
      this.setState({page: this.state.page + 1});
    } else {
      this.props.navigation.navigate('forgotPassword');
    }
  };
  previousPage = () => {
    this.setState({page: this.state.page - 1});
  };
  handleMobileNumberChange = (mobileNumber) => {
    this.setState({
      mobileNumber: mobileNumber.replace(/[^0-9]/g, ''),
    });
  };
  handleOtpChange = (otp) => {
    this.setState({
      otp: otp.replace(/[^0-9]/g, ''),
    });
    console.log(this.state.otp);
  };
  handlePasswordChange = (password) => {
    this.setState({
      password,
    });
  };
  handleConfirmPasswordChange = (confirmPassword) => {
    this.setState({
      confirmPassword,
    });
  };
  handleFirstNameChange = (firstName) => {
    this.setState({
      firstName,
    });
  };
  handleLastNameChange = (lastName) => {
    this.setState({
      lastName,
    });
  };
  handleEmailAddressChange = (emailAddress) => {
    this.setState({
      emailAddress,
    });
  };
  handleInviteCodeChange = (inviteCode) => {
    this.setState({
      inviteCode,
    });
  };
  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({screenHeight: contentHeight});
  };

  render() {
    const scrollEnabled = this.state.screenHeight > height;
    const {
      mobileNumber,
      page,
      otp,
      password,
      confirmPassword,
      firstName,
      lastName,
      emailAddress,
      inviteCode,
    } = this.state;
    const pages = [
      <StepOne
        mobileNumber={mobileNumber}
        handleMobileNumberChange={this.handleMobileNumberChange}
      />,
      <StepTwo otp={otp} handleOtpChange={this.handleOtpChange} />,
      <StepThree
        password={password}
        confirmPassword={confirmPassword}
        handlePasswordChange={this.handlePasswordChange}
        handleConfirmPasswordChange={this.handleConfirmPasswordChange}
      />,
      <StepFour
        firstName={firstName}
        lastName={lastName}
        emailAddress={emailAddress}
        inviteCode={inviteCode}
        handleFirstNameChange={this.handleFirstNameChange}
        handleLastNameChange={this.handleLastNameChange}
        handleEmailAddressChange={this.handleEmailAddressChange}
        handleInviteCodeChange={this.handleInviteCodeChange}
      />,
    ];
    return (
      <View style={Styles.flex}>
        <Statusbar
          backgroundColor="rgba(255,255,255,0.0005)"
          barStyle="light-content"
        />
        <Header
          leftComponent={
            page !== 0 ? (
              <TouchableOpacity onPress={this.previousPage}>
                <AntDesign
                  name="arrowleft"
                  size={30}
                  style={[Styles.primaryColor, {marginLeft: '40%'}]}
                />
              </TouchableOpacity>
            ) : null
          }
          containerStyle={{
            marginTop: '0%',
            height: 50,
            backgroundColor: 'rgba(255,255,255,0.0005)',
          }}
        />
        <ScrollView
          scrollEnabled={scrollEnabled}
          contentContainerStyle={Styles.scrollView}
          onContentSizeChange={this.onContentSizeChange}>
          {pages[page]}
          <TouchableOpacity
            style={Styles.inputButtonWrapper}
            onPress={this.nextPage}>
            <View style={[Styles.inputButton, {marginBottom: 80}]}>
              <Text style={Styles.inputText}>
                {page === 3 ? 'Get Started' : 'Continue'}
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

export default SignupScreen;
