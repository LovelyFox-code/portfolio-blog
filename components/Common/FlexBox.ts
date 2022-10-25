import styled from "styled-components";
import { mediaQueriesMax } from "./media";

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
  width: 50%;
  
  ${mediaQueriesMax("tablet")`
    width: 100%;
  `};

`

export const Section = styled.section`
margin: auto auto 10% auto ;
width: 80%;
max-width: 1440px;
${mediaQueriesMax("tablet")`
    width: 90%
  `};
  ${mediaQueriesMax("mobileL")`
    width: 95%
  `};

`
export const DivDescription = styled.div`
width: 60%;
margin: auto;
${mediaQueriesMax("tablet")`
    width: 80%
  `};
  ${mediaQueriesMax("mobileL")`
    width: 90%
  `};
`
export const Div80 = styled.div`
width: 80%;
margin: auto;
`