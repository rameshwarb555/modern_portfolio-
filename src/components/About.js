import React from 'react';
import styled from 'styled-components';

const AboutSection = () => {
  return (
    <AboutContainer>
      <AboutContent>
        <AboutTitle>About Me</AboutTitle>
        <AboutDescription>
        Eagerly seeking the opportunity to apply what I have learned, specifically in time management and effective collaboration with dynamic and cooperative teams to enhance productivity and maximize the time value of the organization I join, and in turn, promote my own growth in the field of IT. I am passionate about creating user-friendly and visually appealing websites that provide a seamless user experience.
        </AboutDescription>
        <AboutButton>Download Resume</AboutButton>
      </AboutContent>
    </AboutContainer>
  );
};

const AboutContainer = styled.section`
  padding: 80px 0;
  background-color: #05BFDB;
`;

const AboutContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center; /* center align the content */
`;

const AboutTitle = styled.h2`
  font-size: 36px;
  color: #212121;
  margin-bottom: 20px; /* add some spacing between title and description */
`;

const AboutDescription = styled.p`
  font-size: 18px;
  color: #757575;
  margin-bottom: 30px; /* add more spacing between description and button */
`;

const AboutButton = styled.button`
  font-size: 18px;
  color: #fff;
  background-color: #212121;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  border-radius: 4px; /* add border radius for a more professional look */

  &:hover {
    background-color: #616161;
  }
`;

export default AboutSection;
