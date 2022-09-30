import styled from "styled-components";
import { mediaQueries } from "./media";

export const Row = styled.div`
  display: flex;
  margin: 40px 0;
  flex-wrap: wrap;
`;
export const RowSpaceBetween = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
export const Column = styled.div`
  flex: 50%;
  ${mediaQueries("lg")`
    flex: 100%
    width: 100%
  `};

`

export const Section = styled.section`
margin: auto auto 10% auto ;
width: 80%;
max-width: 1440px;
${mediaQueries("lg")`
    width: 90%
  `};
  ${mediaQueries("md")`
    width: 100%
  `};

`

export const DivDescription = styled.div`
width: 60%;
margin: auto;
${mediaQueries("lg")`
    width: 80%
  `};
  ${mediaQueries("md")`
    width: 90%
  `};
`
export const Div80 = styled.div`
width: 80%;
margin: auto;
`