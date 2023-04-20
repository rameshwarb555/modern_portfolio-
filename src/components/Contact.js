import React from 'react';
import styled from 'styled-components';

// Contact Section Component
const ContactSection = () => {
  return (
    <ContactContainer>
      <ContactContent>
        <ContactTitle>Contact Me</ContactTitle>
        <ContactForm>
          <ContactFormItem>
            <ContactFormLabel>Name</ContactFormLabel>
            <ContactFormInput type="text" placeholder="Your Name" />
          </ContactFormItem>
          <ContactFormItem>
            <ContactFormLabel>Email</ContactFormLabel>
            <ContactFormInput type="email" placeholder="Your Email" />
          </ContactFormItem>
          <ContactFormItem>
            <ContactFormLabel>Message</ContactFormLabel>
            <ContactFormTextarea
              rows="4"
              placeholder="Your Message"
            ></ContactFormTextarea>
          </ContactFormItem>
          <ContactFormButton type="submit">Send Message</ContactFormButton>
        </ContactForm>
      </ContactContent>
    </ContactContainer>
  );
};

const ContactContainer = styled.section`
  padding: 80px 0;
  background-color: #B9E9FC;
`;

const ContactContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`;

const ContactTitle = styled.h2`
  font-size: 36px;
  color: #212121;
  text-align: center;
  margin-bottom: 40px;
`;

const ContactForm = styled.form`
  margin-top: 40px;
`;

const ContactFormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ContactFormLabel = styled.label`
  font-size: 18px;
  color: #212121;
  margin-bottom: 8px;
`;

const ContactFormInput = styled.input`
  padding: 12px;
  font-size: 16px;
  margin-bottom: 20px;
  border: 1px solid #757575;
  border-radius: 4px;

  &:focus {
    outline: none;
    border-color: #2196f3;
    box-shadow: 0px 0px 5px 1px #2196f3;
  }
`;

const ContactFormTextarea = styled.textarea`
  padding: 12px;
  font-size: 16px;
  margin-bottom: 20px;
  border: 1px solid #757575;
  border-radius: 4px;

  &:focus {
    outline: none;
    border-color: #2196f3;
    box-shadow: 0px 0px 5px 1px #2196f3;
  }
`;

const ContactFormButton = styled.button`
  font-size: 18px;
  color: #fff;
  background-color: #212121;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #616161;
  }
`;
export default ContactSection;
