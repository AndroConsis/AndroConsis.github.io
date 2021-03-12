import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { theme } from '@styles';
const { colors, fontSizes, fonts } = theme;

const Button = styled.button`
  position: relative;
  overflow: hidden;
  width: 180px;
  height: 64px;
  padding: 0;
  margin-top: ${theme.margin};
  border: 1px solid ${colors.green};
  border-radius: ${theme.borderRadius};
  font-size: ${fontSizes.sm};
  font-family: ${fonts.SFMono};
  transition: background 0.5s;
  background-color: ${colors.blue};
  border: 1px solid ${colors.blue};
  color: ${colors.white};
  &:disabled {
    cursor: not-allowed;
  }
  &:hover,
  &:focus,
  &:active {
    background-color: ${colors.darkBlue};
    color: ${colors.white};
  }
  &:after {
    display: none !important;
  }
`;

const loadKeyframes = keyframes`
  0% { transform: translateX(-110%);}
  100% { transform: translateX(110%);}
`;

const Loader = styled.span`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(to right, ${colors.slate}, ${colors.lightNavy});
  animation: ${loadKeyframes} 1s 5;
`;

const LoadingButton = ({ isDisabled, onClick }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    onClick();
    setTimeout(() => {
      setIsLoading(false);
      setIsComplete(true);
    }, 5000);
  };

  return (
    <Button
      onClick={handleClick}
      isComplete={isComplete}
      disabled={isLoading || isComplete || isDisabled}>
      {!isComplete && !isLoading && 'Send Message'}
      {isComplete && 'Message Received'}
      {!isComplete && isLoading && (
        <>
          Sending
          <Loader />
        </>
      )}
    </Button>
  );
};

LoadingButton.propTypes = {
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default LoadingButton;
