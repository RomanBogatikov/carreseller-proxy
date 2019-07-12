import React, { Component } from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components';

const theme = {
  duration: "1.4s",
  offset: "187"
}

const rotator = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(270deg); }
`;

const colors = keyframes`
	0% { stroke: #4285F4; }
	25% { stroke: #DE3E35; }
	50% { stroke: #F7C223; }
	75% { stroke: #1B9A59; }
  100% { stroke: #4285F4; }
`;

const dash = keyframes`
  0% { stroke-dashoffset: 187; }
  50% {
    stroke-dashoffset: 187/4;
    transform: rotate(135deg);
  }
  100% {
    stroke-dashoffset: 187;
    transform: rotate(450deg);
  }
`;

const LoadingRingContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: 55vh;
`;

const SVG = styled.svg`
  animation: ${rotator} ${props => props.theme.duration} linear infinite;
`;

const CIRCLE = styled.circle`
  stroke-dasharray: 187;
  stroke-dashoffset: 0;
  transform-origin: center;
  animation:
    ${dash} 1.4s ease-in-out infinite,
    ${colors} (1.4s*4) ease-in-out infinite;
`;



const LoadingRing = () => {
  console.log('Circle=', CIRCLE)
  return (
    <ThemeProvider theme={theme}>
      <LoadingRingContainer>
        <div>Loading...</div>
        <SVG className="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
          <CIRCLE className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30" />
        </SVG>
      </LoadingRingContainer>
    </ThemeProvider>
  )
}

export default LoadingRing;
