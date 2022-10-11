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
                <Button variant="secondary"> Contact me</Button>
            </RowSpaceBetween>
        </Section>
    )
}
export default CTAsection;