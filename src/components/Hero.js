import React from 'react';
import styled, { keyframes } from 'styled-components';

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>Hi, I'm Rameshwar B. Bagul</HeroTitle>
        <HeroSubtitle>A Frontend Developer</HeroSubtitle>
        <HeroButton>Contact Me</HeroButton>
      </HeroContent>
    </HeroContainer>
  );
};

const HeroContainer = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom right, #89f7fe, #66a6ff);
  background-color: #3F497F
`;

const HeroContent = styled.div`
  text-align: center;
`;

const HeroTitle = styled.h2`
  font-size: 36px;
  color: #3F497F;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #66a6ff;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 24px;
  color: #757575;
  margin-bottom: 20px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #66a6ff;
  }
`;

const HeroButton = styled.button`
  font-size: 18px;
  color: #fff;
  background-color: #212121;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #616161;
  }
`;

export default HeroSection;
