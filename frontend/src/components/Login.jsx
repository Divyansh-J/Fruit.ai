import React, { useState } from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
  position: relative;
  width: 414px;
  height: 896px;
  background: #FFFFFF;
  box-shadow: 0px 4px 23px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  font-family: 'Sakkal Majalla', sans-serif;
`;

const Title = styled.h1`
  position: absolute;
  width: 100%;
  top: 49px;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 56px;
  text-align: center;
  color: #000000;
`;

const Subtitle = styled.p`
  position: absolute;
  width: 280px;
  top: 109px;
  left: 50%;
  transform: translateX(-50%);
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #6B5E5E;
`;

const Tabs = styled.div`
  position: absolute;
  top: 210px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 20px;
`;

const Tab = styled.span`
  font-size: 18px;
  color: ${props => props.active ? '#0386D0' : '#A6A6A6'};
  ${props => props.active && 'border-bottom: 2px solid #0386D0;'}
  padding-bottom: 5px;
`;

const Input = styled.input`
  position: absolute;
  width: 80%;
  left: 10%;
  height: 40px;
  border: none;
  border-bottom: 1px solid #A6A6A6;
  font-size: 18px;
  padding-left: 30px;
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 20px;

  &::placeholder {
    color: #A6A6A6;
  }
`;

const EmailInput = styled(Input)`
  top: 280px;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="%23A6A6A6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>');
`;

const PasswordInput = styled(Input)`
  top: 360px;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="%23A6A6A6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>');
`;

const RememberPassword = styled.label`
  position: absolute;
  left: 45px;
  top: 450px;
  font-size: 16px;
  color: #6B5E5E;
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const ForgotPassword = styled.a`
  position: absolute;
  right: 45px;
  top: 450px;
  font-size: 16px;
  color: #0386D0;
  text-decoration: none;
`;

const LoginButton = styled.button`
  position: absolute;
  width: 318px;
  height: 45px;
  left: 50%;
  transform: translateX(-50%);
  top: 520px;
  background: #0386D0;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border: none;
  color: #FFFFFF;
  font-size: 18px;
  cursor: pointer;
`;

const OrConnectWith = styled.p`
  position: absolute;
  width: 100%;
  top: 590px;
  text-align: center;
  font-size: 16px;
  color: #747070;
`;

const SocialIcons = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
  top: 630px;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => props.color};
`;

const TouchID = styled.div`
  position: absolute;
  width: 69px;
  height: 72px;
  left: 50%;
  transform: translateX(-50%);
  top: 720px;
  background: #0386D0;
  border: 1px solid #FFFFFF;
  border-radius: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TouchIDText = styled.p`
  position: absolute;
  width: 100%;
  top: 810px;
  text-align: center;
  font-size: 16px;
  color: #0386D0;
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <LoginContainer>
      <Title>Login</Title>
      <Subtitle>By signing in you are agreeing our Term and privacy policy</Subtitle>
      <Tabs>
        <Tab active>Login</Tab>
        <Tab>Register</Tab>
      </Tabs>
      <EmailInput 
        type="email" 
        placeholder="Email Address" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <PasswordInput 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <RememberPassword>
        <Checkbox type="checkbox" id="remember" />
        Remember password
      </RememberPassword>
      <ForgotPassword href="#">Forgot password?</ForgotPassword>
      <LoginButton>Login</LoginButton>
      <OrConnectWith>or connect with</OrConnectWith>
      <SocialIcons>
        <SocialIcon color="#3B5998" />
        <SocialIcon color="#E4405F" />
        <SocialIcon color="#BD081C" />
        <SocialIcon color="#0077B5" />
      </SocialIcons>
      <TouchID>
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 14.5C11.1667 14.5 10.4583 14.2083 9.875 13.625C9.29167 13.0417 9 12.3333 9 11.5C9 10.6667 9.29167 9.95833 9.875 9.375C10.4583 8.79167 11.1667 8.5 12 8.5C12.8333 8.5 13.5417 8.79167 14.125 9.375C14.7083 9.95833 15 10.6667 15 11.5C15 12.3333 14.7083 13.0417 14.125 13.625C13.5417 14.2083 12.8333 14.5 12 14.5ZM12 24C8.66667 24 5.66667 22.8333 3 20.5C0.333333 18.1667 -0.666667 15.3333 0.333333 12C1.33333 8.66667 3.16667 5.75 5.83333 3.25C8.5 0.75 11.5 -0.333333 14.8333 0.0833333C18.1667 0.5 20.8333 2.16667 22.8333 5.08333C24.8333 8 25.5 11.1667 24.8333 14.5833C24.1667 17.9167 22.3333 20.8333 19.3333 23.3333C16.3333 25.8333 13 26.8333 9.33333 26.3333C5.66667 25.8333 2.66667 24.1667 0.333333 21.3333C-2 18.5 -3 15.3333 -2.66667 11.8333C-2.33333 8.33333 -0.666667 5.16667 2.33333 2.33333C5.33333 -0.5 8.66667 -1.66667 12.3333 -1.16667C16 -0.666667 19 1.16667 21.3333 4.33333C23.6667 7.5 24.6667 11 24.3333 14.8333C24 18.6667 22.3333 22 19.3333 24.8333C16.3333 27.6667 12.8333 28.8333 8.83333 28.3333C4.83333 27.8333 1.5 25.8333 -1.16667 22.3333C-3.83333 18.8333 -4.83333 15 -4.16667 10.8333C-3.5 6.66667 -1.5 3 1.83333 -0.166667C5.16667 -3.33333 8.83333 -4.66667 12.8333 -4.16667C16.8333 -3.66667 20.1667 -1.83333 22.8333 1.33333C25.5 4.5 26.8333 8 26.8333 11.8333" stroke="white" strokeWidth="2"/>
        </svg>
      </TouchID>
      <TouchIDText>Login with touch ID</TouchIDText>
    </LoginContainer>
  );
};

export default Login;