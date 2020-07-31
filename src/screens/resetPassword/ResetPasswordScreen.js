import React, {useState} from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';

const ResetPasswordScreen = () => {
  const [page, setPage] = useState(0);
  const [password, setPassword] = useState({
    password: '',
    confirmPassword: '',
  });

  const nextPage = () => {
    setPage(page + 1);
  };
  const previousPage = () => {
    setPage(page - 1);
  };
  const onChange = (name) => (value) =>
    setPassword({
      ...password,
      [name]: value,
    });
  const pages = [
    <StepOne
      password={password.password}
      onChange={onChange}
      handlePasswordChange={this.handlePasswordChange}
      confirmPassword={password.confirmPassword}
      nextPage={nextPage}
    />,
    <StepTwo previousPage={previousPage} />,
  ];
  return <>{pages[page]}</>;
};

export default ResetPasswordScreen;
