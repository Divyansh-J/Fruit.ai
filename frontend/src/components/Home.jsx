import React from 'react';
import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@300;400;500;600;700;800&display=swap');
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  body {
    font-family: 'Dosis', sans-serif;
  }
`;

const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(90deg, #E0BCF3 0%, #7EE7EE 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2vh 5vw;
  position: relative;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  color: white;
  font-size: clamp(24px, 5vw, 36px);
  font-weight: 600;
  margin-bottom: 5px;
  text-align: center;
`;

const Subtitle = styled.h2`
  color: white;
  font-size: clamp(14px, 3vw, 18px);
  font-weight: 800;
  letter-spacing: 1px;
  margin-bottom: 3vh;
  text-align: center;
`;

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  width: 100%;
  max-width: 400px;
`;

const Button = styled(Link)`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-weight: 800;
  font-size: clamp(18px, 4vw, 36px);
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ChatButton = styled(Button)`
  background: linear-gradient(268.31deg, #FEBFFF 48.36%, #FF99F5 98.55%);
  color: #C84AD3;
  font-size: clamp(24px, 5vw, 48px);
`;

const TranslatorButton = styled(Button)`
  background: linear-gradient(268.31deg, #BFF4FF 48.36%, #99EDFF 98.55%);
  color: #007AFF;
`;

const BlankButton = styled(Button)`
  background: linear-gradient(268.31deg, #F2FFBF 48.36%, #EBFF99 98.55%);
`;

const FAQsButton = styled(Button)`
  background: linear-gradient(268.31deg, #E3BFFF 48.36%, #D299FF 98.55%);
  color: #3B5998;
`;

const AboutButton = styled(Button)`
  background: linear-gradient(268.31deg, #FFE4BF 48.36%, #FFC499 98.55%);
  color: #C84AD3;
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3vh;
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.5)'};
  margin: 0 5px;
`;

const TranslateIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.87 15.07L10.33 12.56L10.36 12.53C12.1 10.59 13.34 8.36 14.07 6H17V4H10V2H8V4H1V6H12.17C11.5 7.92 10.44 9.75 9 11.35C8.07 10.32 7.3 9.19 6.69 8H4.69C5.42 9.63 6.42 11.17 7.67 12.56L2.58 17.58L4 19L9 14L12.11 17.11L12.87 15.07ZM18.5 10H16.5L12 22H14L15.12 19H19.87L21 22H23L18.5 10ZM15.88 17L17.5 12.67L19.12 17H15.88Z" fill="#007AFF"/>
  </svg>
);

const Home = () => {
  return (
    <>
      <GlobalStyle />
      <HomeContainer>
        <ContentWrapper>
          <Title>Fruit.Ai</Title>
          <Subtitle>"Be Healthy!"</Subtitle>
          <ButtonGrid>
            <ChatButton to="/chat">Chat.</ChatButton>
            <BlankButton as="div" />
            <BlankButton as="div" />
            <TranslatorButton to="/translator">
              <TranslateIcon />
            </TranslatorButton>
            <FAQsButton to="/faqs">FAQs</FAQsButton>
            <AboutButton to="/about">About</AboutButton>
          </ButtonGrid>
          <Dots>
            <Dot active />
            <Dot />
            <Dot />
          </Dots>
        </ContentWrapper>
      </HomeContainer>
    </>
  );
};

export default Home;