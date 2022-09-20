
import PreviewDescription, { Divider } from '../components/PreviewDescription'
import { Row, Column } from '../components/Common/FlexBox'
import PreviewImage from '../components/PreviewImage'
import styled from 'styled-components'
import { NextPage } from 'next'
export const Container = styled.section`

`

interface ProjectDetailsPageProps {
    sizes: string
    src: string
    alt: string
    title: string;
    description: string;
    onclick: () => void;

}
const ProjectDetailsPage: NextPage<ProjectDetailsPageProps> = (props) => {
    return (
        <>
            <Row>
                <Column>
                    <PreviewImage
                        sizes=""
                        src={props.src}
                        alt={props.alt}
                    />
                </Column>
                <PreviewDescription
                    title={props.title}
                    description={props.description}
                    onclick={props.onclick}
                />
                <Column>
                </Column>
            </Row>
        </>

    )
}

export default ProjectDetailsPage
