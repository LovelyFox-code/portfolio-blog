import PreviewDescription, {
    Divider,
} from "../../components/PreviewDescription";
import { Row, Column, Section, Div80 } from "../../components/Common/FlexBox";
import PreviewImage, { Image, ImageBox } from "../../components/PreviewImage";
import styled from "styled-components";
import { GetStaticPropsContext, NextPage } from "next";
import { fetchProjectById, fetchProjects } from "../../fetchContentful";
import axios from "axios";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
import Hero, { HeroImg, HeroImgBox } from "../../components/Hero/Hero";
import { H1, H2, H3, P } from "../../components/Common/Typography";
import Button from "../../components/Button";
import Paginator from "../../components/Paginator";

type ProjectDetailsPage = {
    screenshot: string;
    title: string;
    description: string;
    heroProjectScreenshot: string;
    projectBackground: string;
    technologies: string;
    previewImg: string;
    previewImage: string;
    sizes: string;
    src: string;
    alt: string;
    id: string;
    link: string;
}
interface ProjectDetailsPageProps {
    project: ProjectDetailsPage
}

const ProjectDetailsPage: NextPage<ProjectDetailsPageProps> = (props) => {
    console.log(props.project.link);

    return (
        <>
            <Section>
                <HeroImgBox>
                    <HeroImg src={props.project.heroProjectScreenshot} />
                </HeroImgBox>
            </Section>
            <Section>
                <Row>
                    <Column>
                        <Divider />
                        <H1>{props.project.title}</H1>
                        <P>
                            {props.project.description}
                        </P>
                        <P>{props.project.technologies}</P>
                        <Button><a href={props.project.link}>VISIT WEBSITE</a></Button>
                    </Column>
                    <Column>
                        <ImageBox>
                            <H3>Project Background</H3>
                            <P>
                                {props.project.projectBackground}
                            </P>
                            <H3>Static Previews</H3>
                            <Image src={props.project.previewImage} alt="image" />
                            <Image src={props.project.previewImg} alt="img" />
                        </ImageBox>
                    </Column>
                </Row>
            </Section>
            <Paginator title={props.project.title} />
            <Section>
                <Row>
                    <H2>Interested in doing a project together?</H2>
                    <Divider />
                    <Button variant="secondary"> Contact me</Button>
                </Row>
            </Section>

        </>
    );
};

export async function getStaticProps(context: GetStaticPropsContext) {
    const id = context.params?.id;
    const project = await fetchProjectById(id);
    const projects = await fetchProjects()
    console.log("projects", projects);

    return {
        props: {
            project: project,
            projects: projects
        }
    };
}
export async function getStaticPaths() {
    const projects = await fetchProjects();
    const paths = projects.map(({ id }) => ({ params: { id: id.toString() } }));
    // console.log("PATHS", paths);
    return {
        paths,
        fallback: false,
    };
}

export default ProjectDetailsPage;
