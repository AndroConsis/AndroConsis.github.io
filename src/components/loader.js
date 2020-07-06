import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import anime from 'animejs';
import { IconLoader } from '@components/icons';
import styled from 'styled-components';
import { theme, mixins } from '@styles';
const { colors } = theme;

const StyledContainer = styled.div`
  ${mixins.flexCenter};
  background-color: ${colors.darkNavy};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
`;
const StyledLogo = styled.div`
  width: max-content;
  max-width: 100px;
  transition: ${theme.transition};
  opacity: ${props => (props.isMounted ? 1 : 0)};
  svg {
    width: 100%;
    height: 100%;
    display: block;
    margin: 0 auto;
    fill: none;
    user-select: none;
    #outline {
      scale: 10;
    }
    #box1,
    #box2,
    #box3 {
      opacity: 0;
    }
    #shadow {
      opacity: 0;
    }
  }
`;

const Loader = ({ finishLoading }) => {
  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    loader
      .add({
        targets: '#logo #outline',
        duration: 500,
        easing: 'easeInOutQuart',
        opacity: 1,
        scale: 1,
      })
      .add({
        targets: '#logo path',
        delay: 200,
        duration: 1500,
        easing: 'easeInOutQuart',
        strokeDashoffset: [anime.setDashoffset, 0],
        direction: 'alternate',
      })
      .add(
        {
          targets: '#logo #box3',
          duration: 200,
          easing: 'easeInBounce',
          opacity: 1,
        },
        '-=1000',
      )
      .add(
        {
          targets: '#logo #box2',
          duration: 200,
          easing: 'easeInBounce',
          opacity: 1,
        },
        '-=700',
      )
      .add(
        {
          targets: '#logo #box1',
          duration: 200,
          easing: 'easeInBounce',
          opacity: 1,
        },
        '-=100',
      )
      .add({
        targets: '#logo',
        delay: 500,
        duration: 300,
        direction: 'alternate',
        easing: 'easeInOutQuart',
        opacity: 0,
        scale: 0.1,
      })
      .add({
        targets: '.loader',
        duration: 200,
        easing: 'easeInOutQuart',
        opacity: 0,
        zIndex: -1,
      });
  };

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <StyledContainer className="loader">
      <Helmet bodyAttributes={{ class: `hidden` }} />

      <StyledLogo isMounted={isMounted}>
        <IconLoader />
      </StyledLogo>
    </StyledContainer>
  );
};

Loader.propTypes = {
  finishLoading: PropTypes.func.isRequired,
};

export default Loader;
