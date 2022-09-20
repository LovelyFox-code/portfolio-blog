import React, { Children } from "react";
import styled from "styled-components";
import Button from "./Button";
import { GrayishDarkBlue } from "./Common/Colors";
import { H1, P } from "./Common/Typography";
interface IPreviewDescription {
    title: string;
    description: string;
    onclick: () => void;
}
export const Description = styled.div`
    width: 80%;
    margin: auto;
`
export const Divider = styled.hr`
  width: 350px;
  height: 1px;
  left: 830px;
  top: 190px;
  background: ${GrayishDarkBlue};
  mix-blend-mode: normal;
  opacity: 0.15;
  &:first-child{
      margin-bottom: 30px;
  }
  &:last-child{
      margin-top: 30px;
  }
`;


const PreviewDescription: React.FC<IPreviewDescription> = (props) => {

    return (
        <Description>
            <Divider />
            <H1>{props.title}</H1>
            <P>{props.description}</P>
            <Button variant="secondary" onClick={props.onclick}>
                GO TO PORTFOLIO
            </Button>
            <Divider />
        </Description>
    );
};
export default PreviewDescription;
