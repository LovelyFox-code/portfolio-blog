import Link from "next/link";
import React, { Children } from "react";
import styled from "styled-components";
import Button from "./Button";
import { GrayishDarkBlue } from "./Common/Colors";
import { mediaQueriesMax, mediaQueriesMin } from "./Common/media";
import { H1, P } from "./Common/Typography";
interface IPreviewDescription {
    title: string;
    description: string;
    heroProjectScreenshot?: string;
    projectBackground?: string;
    technologies?: string;
    id: string;
}
export const Description = styled.div`
    width: 90%;
    margin: auto;
    max-width: 100%;
    ${mediaQueriesMax("tablet")`
    width: 95%;
  `};
`
export const Divider = styled.div`
  height: 1px;
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
            <Button variant="secondary" >
                <Link href={"/projects"}>
                    <a>GO TO PORTFOLIO</a>
                </Link>
            </Button>
            <Divider />
        </Description>
    );
};
export default PreviewDescription;
