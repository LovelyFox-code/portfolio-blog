import styled from "styled-components";
import { GrayishDarkBlue } from "./Colors";
import { mediaQueries } from "./media";

export const H1 = styled.h1`
  font-family: "Ibarra Real Nova";
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 50px;
  letter-spacing: -0.446429px;
  color: ${GrayishDarkBlue};
  margin:50px 50px 50px 0;
  ${mediaQueries("mobileL")`
     font-size: 40px;
  `};

`;
export const H2 = styled.h2`
  font-family: "Ibarra Real Nova";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 42px;
  letter-spacing: -0.357143px;
  color: ${GrayishDarkBlue};
`;
export const H3 = styled.h3`
  font-family: "Ibarra Real Nova";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 36px;
  letter-spacing: -0.285714px;
  color: ${GrayishDarkBlue};
  ${mediaQueries("mobileL")`
     font-size: 21px;
  `};
`;
export const P = styled.p`
font-family: 'Public Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 30px;
color: ${GrayishDarkBlue};
`
