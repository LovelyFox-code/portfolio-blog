
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { LightGray } from "./Common/Colors";
import { Section } from "./Common/FlexBox";
import { H3, P } from "./Common/Typography";

interface IPaginator {
    prevProjectTitle: string
    nextProjectTitle: string
    prevProjectId: string
    nextProjectId: string
}
const Box = styled.a`
      &:first-child{
      text-align: right;
  }
  &:last-child{
    text-align: left;
  }
`
const VerticalDivider = styled.div`
    width: 1px;
    min-height: 130px;
    max-width: 146px;
    background-color: ${LightGray};
`
const BorderPaginator = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border-top: 1px solid ${LightGray};
    border-bottom: 1px solid ${LightGray};
    width: 100%;
`

const Paginator: React.FC<IPaginator> = (props) => {

    return (
        <Section>
            <BorderPaginator>
                <Button variant="paginator">
                    <Box href={`/projects/${encodeURIComponent(props.prevProjectId)}`}>
                        <H3>{props.prevProjectTitle}</H3>
                        <P>Previous Project</P>
                    </Box>
                </Button>
                <VerticalDivider />
                <Button variant="paginator">
                    <Box href={`/projects/${encodeURIComponent(props.nextProjectId)}`}>
                        <H3>{props.nextProjectTitle}</H3>
                        <P>Next Project</P>
                    </Box>
                </Button>
            </BorderPaginator>
        </Section>
    );
};
export default Paginator;
