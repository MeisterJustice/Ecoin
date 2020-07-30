import React, {Component} from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';

class ResetPasswordScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      password: '',
      confirmPassword: '',
    };
  }

  nextPage = () => {
    this.setState({page: this.state.page + 1});
  };
  previousPage = () => {
    this.setState({page: this.state.page - 1});
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

  render() {
    const {page, password, confirmPassword} = this.state;
    const pages = [
      <StepOne
        password={password}
        handlePasswordChange={this.handlePasswordChange}
        confirmPassword={confirmPassword}
        handleConfirmPasswordChange={this.handleConfirmPasswordChange}
        nextPage={this.nextPage}
      />,
      <StepTwo previousPage={this.previousPage} />,
    ];
    return <>{pages[page]}</>;
  }
}

export default ResetPasswordScreen;
