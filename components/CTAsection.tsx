import Link from "next/link"
import Button from "./Button"
import { RowSpaceBetween, Section } from "./Common/FlexBox"
import { H2 } from "./Common/Typography"
import { Divider } from "./PreviewDescription"

const CTAsection = () => {
    return (
        <Section>
            <RowSpaceBetween>
                <H2>Interested in doing a project together?</H2>
                <Divider />
                <Button variant="secondary"><Link href="/contact">Contact me</Link> </Button>
            </RowSpaceBetween>
        </Section>
    )
}
export default CTAsection;