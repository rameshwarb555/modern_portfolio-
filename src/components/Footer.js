import React from 'react';
import styled from 'styled-components';
import facebook from '../facebook.png';
import twitter from '../twitter.jpg';
import linkedin from '../LinkedIn.jpg';
import github from '../git.jpg';


// Footer Component
const Footer = () => {
    return (
    <FooterContainer>
    <FooterContent>
    <FooterText>© 2023 My Portfolio. All rights reserved.</FooterText>
    <FooterSocialMedia>
    <FooterSocialMediaIcon src={facebook} alt="Facebook" />
    <FooterSocialMediaIcon src={twitter} alt="Twitter" />
    <FooterSocialMediaIcon src={linkedin} alt="LinkedIn" />
    <FooterSocialMediaIcon src={github} alt="GitHub" />
    </FooterSocialMedia>
    </FooterContent>
    </FooterContainer>
    );
    };

    const FooterContainer = styled.footer`
    background-color: #577D86;
    padding: 20px;
    text-align: center;
  `;
  
  const FooterContent = styled.div``;
  
  const FooterText = styled.p`
    font-size: 14px;
    color: #fff;
  `;
  
  const FooterSocialMedia = styled.div`
    margin-top: 10px;
  `;
  
  const FooterSocialMediaIcon = styled.img`
    width: 24px;
    height: 24px;
    margin: 0 10px;
    cursor: pointer;
  `;
export default Footer;
