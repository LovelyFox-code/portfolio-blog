import Link from "next/link"
import Button from "./Button"
import { RowSpaceBetween, Section } from "./Common/FlexBox"
import { H2 } from "./Common/Typography"
import { Divider } from "./PreviewDescription"
import styled from "styled-components"
import { mediaQueriesMax } from "./Common/media"


const CTAButton = styled(Button)`
    margin-top: 0;
`
const RowWrap = styled(RowSpaceBetween)`
    ${mediaQueriesMax("tablet")`
    justify-content: center;
    max-width: 400px;
    margin: auto;
    text-align: center;
  `};
`

const CTAsection = () => {
    return (
        <Section>
            <RowWrap>
                <H2>Interested in doing a project together?</H2>
                <Divider />
                <CTAButton variant="secondary"><Link href="/contact">Contact me</Link> </CTAButton>
            </RowWrap>
        </Section>
    )
}
export default CTAsection;