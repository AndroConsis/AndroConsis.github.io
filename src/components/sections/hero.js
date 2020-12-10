import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled, { keyframes } from 'styled-components';
import { theme, mixins, media, Section } from '@styles';
import { Link } from 'gatsby';
const { colors, fontSizes, fonts, navDelay, loaderDelay } = theme;

const StyledContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  ${media.tablet`padding-top: 150px;`};
  div {
    width: 100%;
  }
`;
const StyledOverline = styled.h1`
  color: ${colors.green};
  margin: 0 0 20px 3px;
  font-size: ${fontSizes.md};
  font-family: ${fonts.SFMono};
  font-weight: normal;
  ${media.desktop`font-size: ${fontSizes.sm};`};
  ${media.tablet`font-size: ${fontSizes.smish};`};
`;
const StyledTitle = styled.h2`
  font-size: 80px;
  line-height: 1.1;
  margin: 0;
  color: ${colors.lightSlate};
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
`;
const StyledSubtitle = styled.h3`
  font-size: 80px;
  line-height: 1.1;
  color: ${colors.lightestSlate};
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
`;
const StyledDescription = styled.div`
  margin-top: 25px;
  width: 50%;
  max-width: 500px;
  a {
    ${mixins.inlineLink};
  }
`;
const StyledEmailLink = styled(Link)`
  ${mixins.bigButton};
  margin-top: 50px;
`;
const snowflakesfall = keyframes`
  0% { top: -10% }
  100% { top: 100% }
`;

const snowflakesShake = keyframes`
  0% {
    -webkit-transform: translateX(0px);
    transform: translateX(0px)
  }
  50% {
    -webkit-transform: translateX(80px);
    transform: translateX(80px)
  }
  100% {
    -webkit-transform: translateX(0px);
    transform: translateX(0px)
`;

const StyledSnowflake = styled.div`
  position: fixed;
  top: -10%;
  z-index: 0;
  color: #fff;
  font-size: 1em;
  font-family: Arial;
  text-shadow: 1px 1px 10px #fff, 1px 1px 10px #eda;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: default;
  -webkit-animation-name: ${snowflakesfall}, ${snowflakesShake};
  -webkit-animation-duration: 10s, 3s;
  -webkit-animation-timing-function: linear, ease-in-out;
  -webkit-animation-iteration-count: infinite, infinite;
  -webkit-animation-play-state: running, running;
  animation-name: ${snowflakesfall}, ${snowflakesShake};
  animation-duration: 10s, 3s;
  animation-timing-function: linear, ease-in-out;
  animation-iteration-count: infinite, infinite;
  animation-play-state: running, running;
`;

const Hero = ({ data }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const { frontmatter, html } = data[0].node;

  const one = () => (
    <StyledOverline style={{ transitionDelay: '100ms' }}>{frontmatter.title}</StyledOverline>
  );
  const two = () => (
    <StyledTitle style={{ transitionDelay: '200ms' }}>{frontmatter.name}.</StyledTitle>
  );
  const three = () => (
    <StyledSubtitle style={{ transitionDelay: '300ms' }}>{frontmatter.subtitle}</StyledSubtitle>
  );
  const four = () => (
    <StyledDescription
      style={{ transitionDelay: '400ms' }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
  const five = () => (
    <div style={{ transitionDelay: '500ms' }}>
      <StyledEmailLink to={'/#contact'}>Get In Touch</StyledEmailLink>
    </div>
  );

  const six = () => (
    <>
      <StyledSnowflake
        style={{ left: '1%', '-webkit-animation-delay': '0s, 0s', 'animation-delay': '0s, 0s' }}>
        ❅
      </StyledSnowflake>
      <StyledSnowflake
        style={{ left: '10%', '-webkit-animation-delay': '1s, 1s', 'animation-delay': '1s, 1s' }}>
        ❅
      </StyledSnowflake>
      <StyledSnowflake
        style={{ left: '20%', '-webkit-animation-delay': '6s, .5s', 'animation-delay': '6s, .5s' }}>
        ❅
      </StyledSnowflake>
      <StyledSnowflake
        style={{ left: '30%', '-webkit-animation-delay': '4s, 2s', 'animation-delay': '4s, 2s' }}>
        ❅
      </StyledSnowflake>
      <StyledSnowflake
        style={{ left: '40%', '-webkit-animation-delay': '2s, 2s', 'animation-delay': '2s, 2s' }}>
        ❅
      </StyledSnowflake>
      <StyledSnowflake
        style={{ left: '50%', '-webkit-animation-delay': '8s, 3s', 'animation-delay': '8s, 3s' }}>
        ❅
      </StyledSnowflake>
      <StyledSnowflake
        style={{ left: '60%', '-webkit-animation-delay': '6s, 2s', 'animation-delay': '6s, 2s' }}>
        ❅
      </StyledSnowflake>
      <StyledSnowflake
        style={{
          left: '70%',
          '-webkit-animation-delay': '2.5s, 1s',
          'animation-delay': '2.5s, 1s',
        }}>
        ❅
      </StyledSnowflake>
      <StyledSnowflake
        style={{ left: '80%', '-webkit-animation-delay': '1s, 0s', 'animation-delay': '1s, 0s' }}>
        ❅
      </StyledSnowflake>
      <StyledSnowflake
        style={{
          left: '90%',
          '-webkit-animation-delay': '3s, 1.5s',
          'animation-delay': '3s, 1.5s',
        }}>
        ❅
      </StyledSnowflake>
    </>
  );
  const items = [one, two, three, four, five, six];

  return (
    <StyledContainer>
      <TransitionGroup component={null}>
        {isMounted &&
          items.map((item, i) => (
            <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
              {item}
            </CSSTransition>
          ))}
      </TransitionGroup>
    </StyledContainer>
  );
};

Hero.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Hero;
