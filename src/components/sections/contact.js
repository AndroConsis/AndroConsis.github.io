import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import sr from '@utils/sr';
import { srConfig } from '@config';
import styled from 'styled-components';
import { theme, mixins, media, Section, Heading } from '@styles';
import axios from 'axios';
import LoadingButton from '../button';
const { colors, fontSizes, fonts, margin } = theme;

const StyledContainer = styled(Section)`
  text-align: center;
  max-width: 600px;
  margin: 0 auto 100px;
  a {
    ${mixins.inlineLink};
  }
`;
const StyledHeading = styled(Heading)`
  display: block;
  color: ${colors.green};
  font-size: ${fontSizes.md};
  font-family: ${fonts.SFMono};
  font-weight: normal;
  margin-bottom: 20px;
  justify-content: center;
  ${media.desktop`font-size: ${fontSizes.sm};`};
  &:before {
    bottom: 0;
    font-size: ${fontSizes.sm};
    ${media.desktop`font-size: ${fontSizes.smish};`};
  }
  &:after {
    display: none;
  }
`;
const StyledTitle = styled.h4`
  margin: 0 0 20px;
  font-size: 60px;
  ${media.desktop`font-size: 50px;`};
  ${media.tablet`font-size: 40px;`};
`;

const StyledSuccessMessage = styled.div`
  margin: 100px 0px;
  border: 1px solid ${colors.green};
  border-radius: ${theme.borderRadius};
  padding: 1.25rem 1.75rem;
  font-size: ${fontSizes.line};
  line-height: 1;
  text-decoration: none;
  overflow: hidden;
`;

const StyledContactForm = styled.div`
  border: red 1px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  align-items: center;
  grid-gap: ${margin};
`;

const StyledEmailInput = styled.input`
  color: #2a2a2a;
  background-color: ${colors.darkNavy};
  border: 1px solid ${colors.green};
  border-radius: ${theme.borderRadius};
  padding: 1.25rem 1.75rem;
  font-size: ${fontSizes.sm};
  font-family: ${fonts.SFMono};
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: ${theme.transition};
  &:hover,
  &:focus,
  &:active {
    background-color: ${colors.lightNavy};
  }
  &:after {
    display: none !important;
  }
`;

const StyledMessageInput = styled.textarea`
  color: #2a2a2a;
  background-color: ${colors.darkNavy};
  border: 1px solid ${colors.green};
  border-radius: ${theme.borderRadius};
  padding: 1.25rem 1.75rem;
  font-size: ${fontSizes.sm};
  font-family: ${fonts.SFMono};
  line-height: 2;
  text-decoration: none;
  cursor: pointer;
  transition: ${theme.transition};
  &:hover,
  &:focus,
  &:active {
    background-color: ${colors.lightNavy};
  }
  &:after {
    display: none !important;
  }
`;

const Contact = ({ data }) => {
  const { frontmatter, html } = data[0].node;
  const { title } = frontmatter;
  const revealContainer = useRef(null);
  const [userEmail, setUserEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageSent, setMessageSent] = useState(false);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  const sendMail = () => {
    const data = {
      text: message,
      email: userEmail,
    };
    const URL = 'https://us-central1-prateekrathoredotcom.cloudfunctions.net/sendMail';

    axios.post(URL, data).then(() => {
      setMessageSent(true);
    });
  };

  return (
    <StyledContainer id="contact" ref={revealContainer}>
      <StyledHeading>What&apos;s Next?</StyledHeading>

      <StyledTitle>{title}</StyledTitle>

      <div dangerouslySetInnerHTML={{ __html: html }} />
      {messageSent ? (
        <StyledSuccessMessage>
          I have recieved your message. I will get back to you soon.
        </StyledSuccessMessage>
      ) : (
        <StyledContactForm>
          <StyledEmailInput
            placeholder="Your Email Address"
            onChange={e => {
              setUserEmail(e.target.value);
            }}></StyledEmailInput>
          <StyledMessageInput
            placeholder="Your Message"
            rows="3"
            onChange={e => {
              setMessage(e.target.value);
            }}></StyledMessageInput>
        </StyledContactForm>
      )}
      {!messageSent && (
        <LoadingButton
          onClick={sendMail}
          isDisabled={!userEmail || !message}
          target="_blank"
          rel="nofollow noopener noreferrer"></LoadingButton>
      )}
    </StyledContainer>
  );
};

Contact.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Contact;
