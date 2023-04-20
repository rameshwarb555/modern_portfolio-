import React from 'react';
import { Image } from 'react-bootstrap';
import styled from 'styled-components';
import webDevelopmentImage from '../web_development.jpg';
import Ui_ux_design from '../Ui_ux_design.jpg';
import responsive_design from '../responsive_design.jpg';

// Services Section Component
const ServicesSection = () => {
    return (
      <ServicesContainer>
        <ServicesContent>
          <ServicesTitle>My Services</ServicesTitle>
          <ServicesList>
            <ServicesItem>
              <ServicesItemImage src={webDevelopmentImage} alt="Service 1" />
              <ServicesItemTitle>Web Development</ServicesItemTitle>
              <ServicesItemDescription>
                I develop modern and responsive web applications using the latest
                frontend technologies such as React, Angular, and Vue.
              </ServicesItemDescription>
            </ServicesItem>
            <ServicesItem>
            <ServicesItemImage src={Ui_ux_design} alt="Service 2" />
              <ServicesItemTitle>UI/UX Design</ServicesItemTitle>
              <ServicesItemDescription>
                I create visually appealing and user-friendly interfaces that
                provide a seamless user experience and enhance user satisfaction.
              </ServicesItemDescription>
            </ServicesItem>
            <ServicesItem>
            <ServicesItemImage src={responsive_design} alt="Service 3" />
              <ServicesItemTitle>Responsive Design</ServicesItemTitle>
              <ServicesItemDescription>
                I ensure that all web applications I develop are fully responsive
                and compatible with different devices and screen sizes to provide
                an optimal viewing experience.
              </ServicesItemDescription>
            </ServicesItem>
          </ServicesList>
        </ServicesContent>
      </ServicesContainer>
    );
  };

  
const ServicesContainer = styled.section`
padding: 80px 0;
background-color: #ADE4DB;
`;

const ServicesContent = styled.div`
max-width: 800px;
margin: 0 auto;
text-align: center;
`;

const ServicesItemTitle = styled.h2`
font-size: 36px;
color: #212121;
`;

const ServicesList = styled.ul`
display: flex;
justify-content: center;
list-style: none;
margin-top: 40px;
`;

const ServicesItem = styled.li`
margin: 0 20px;
text-align: center;
`;

const ServicesItemImage = styled(Image)`
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 20px;
`;

const ServicesTitle = styled.h3`
font-size: 24px;
color: #212121;
margin-bottom: 10px;
`;

const ServicesItemDescription = styled.p`
font-size: 18px;
color: #757575;
`;

export default ServicesSection;