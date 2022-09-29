
import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { GrayishDarkBlue, LightGray } from "./Common/Colors";
import { Row, Section } from "./Common/FlexBox";
import { H1, H3, P } from "./Common/Typography";

interface IPaginator {
    title: string
}
const Float = styled.div`
      &:first-child{
      text-align: right;
  }
  &:last-child{
    text-align: left;
  }
`
const VerticalDivider = styled.div`
    width: 1px;
    height: 100%;
    background-color: ${LightGray};
`
const BorderPaginator = styled.div`
    display: flex;
    justify-content: space-between;
    border-top: 1px solid ${LightGray};
    border-bottom: 1px solid ${LightGray};
`

const Paginator: React.FC<IPaginator> = (props) => {

    return (
        <Section>
            <BorderPaginator>
                <Button variant="paginator">
                    <h1> - </h1>
                    <Float>
                        <H3>{props.title}</H3>
                        <P>Previous Project</P>
                    </Float>
                </Button>
                <VerticalDivider />
                <Button variant="paginator">
                    <Float>
                        <H3>{props.title}</H3>
                        <P>Next Project</P>
                    </Float>
                    <h1>-</h1>
                </Button>
            </BorderPaginator>
        </Section>
    );
};
export default Paginator;
