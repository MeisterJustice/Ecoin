import React, {useState} from 'react';
import Statusbar from '../../components/Statusbar';
import {View, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import Styles from '../../Styles';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import StepThree from './StepThree';
import StepFour from './StepFour';
import {Header} from 'react-native-elements';
import Button from '../../components/buttons/Button';

const {height} = Dimensions.get('window');

const SignupScreen = (props) => {
  const [screenHeight, setScreenHeight] = useState(0);
  const [page, setPage] = useState(0);
  const [userDetails, setUserDetails] = useState({
    mobileNumber: '',
    firstName: '',
    lastName: '',
    emailAddress: '',
    otp: '',
    password: '',
    confirmPassword: '',
    inviteCode: '',
  });

  const nextPage = () => {
    if (page !== 3) {
      setPage(page + 1);
    } else {
      props.navigation.navigate('forgotPassword');
    }
  };
  const previousPage = () => {
    setPage(page - 1);
  };
  const onChange = (name) => (value) =>
    setUserDetails({
      ...userDetails,
      [name]: value,
    });

  const onContentSizeChange = (contentWidth, contentHeight) => {
    setScreenHeight(contentHeight);
  };

  const scrollEnabled = screenHeight > height;
  const pages = [
    <StepOne mobileNumber={userDetails.mobileNumber} onChange={onChange} />,
    <StepTwo otp={userDetails.otp} onChange={onChange} />,
    <StepThree
      password={userDetails.password}
      confirmPassword={userDetails.confirmPassword}
      onChange={onChange}
    />,
    <StepFour
      firstName={userDetails.firstName}
      lastName={userDetails.lastName}
      emailAddress={userDetails.emailAddress}
      inviteCode={userDetails.inviteCode}
      onChange={onChange}
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
            <TouchableOpacity onPress={previousPage}>
              <AntDesign
                name="arrowleft"
                size={23}
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
        onContentSizeChange={onContentSizeChange}>
        {pages[page]}
        <Button
          onPress={nextPage}
          text={page === 3 ? 'Get Started' : 'Continue'}
        />
      </ScrollView>
    </View>
  );
};

export default SignupScreen;
