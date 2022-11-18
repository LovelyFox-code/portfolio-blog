import React from 'react'
import styled, { keyframes } from 'styled-components';

export const SpinnerContainer = styled.div`
    position: absolute;
    top: 20%;
    right: 40%;
`
export const animation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }

`
export const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 10px solid #f3f3f3; /* Light grey */
  border-top: 10px solid #383636; /* Black */
  border-radius: 50%;
  animation: ${animation} 1.5s linear infinite;
`;


const LoadingSpinner = () => {
    return (
        <SpinnerContainer>
            <Spinner />
        </SpinnerContainer>
    )
}

export default LoadingSpinner
