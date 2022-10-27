import {
    Divider,
} from "../../components/PreviewDescription";
import { Row, Column, Section } from "../../components/Common/FlexBox";
import { Image, ImageBox } from "../../components/PreviewImage";
import { GetStaticPropsContext, NextPage } from "next";
import { fetchProjectById, fetchProjects } from "../../fetchContentful";
import { HeroImg, HeroImgBox } from "../../components/Hero/Hero";
import { H1, H3, P } from "../../components/Common/Typography";
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
    prevProjectTitle: string;
    nextProjectTitle: string;
    prevProjectId: string;
    nextProjectId: string;
}

interface ProjectDetailsPageProps {
    project: ProjectDetailsPage;

}

const ProjectDetailsPage: NextPage<ProjectDetailsPageProps> = (props) => {

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
            <Paginator
                prevProjectTitle={props.project.prevProjectTitle}
                nextProjectTitle={props.project.nextProjectTitle}
                prevProjectId={props.project.prevProjectId}
                nextProjectId={props.project.nextProjectId}
            />


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

    return {
        paths,
        fallback: false,
    };
}

export default ProjectDetailsPage;
