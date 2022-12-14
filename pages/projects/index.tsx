import type { NextPage } from 'next'
import Button from '../../components/Button'
import { H1, P } from '../../components/Common/Typography'
import { Divider } from '../../components/PreviewDescription'
import { Row, Column, Section, DivDescription } from '../../components/Common/FlexBox'
import PreviewImage from '../../components/PreviewImage'
import styled from 'styled-components'
import { fetchProjects } from '../../fetchContentful'
import Link from 'next/link'
export const Container = styled.section`

`
export const Main = styled.div`
  max-width: 1440px;
  margin: auto;
`
interface Project {
  title: string,
  projectScreenshot: string,
  id: string
  description: string

}
interface ProjectsPageProps {
  projects: Project[]

}

const ProjectsPage: NextPage<ProjectsPageProps> = (props) => {

  return (
    <Main>
      {props.projects.map(project => {
        return <Section key={project.id}>
          <Row key={project.id}>
            <Column>
              <PreviewImage
                // srcSet= 
                sizes="(max-width: 600px) 480px,
                      800px"
                src={project.projectScreenshot}
                alt=""
              />
            </Column>
            <Column>
              <DivDescription>
                <Divider />
                <H1>{project.title}</H1>
                <P>{project.description}</P>
                <Button variant="secondary" >
                  <Link href={`/projects/${encodeURIComponent(project.id)}`}>
                    <a>GO TO PORTFOLIO</a>
                  </Link>
                </Button>
              </DivDescription>
            </Column>
          </Row>
        </Section>
      })}
    </Main>


  )
}

export default ProjectsPage

export async function getStaticProps() {
  const projects = await fetchProjects()
  // console.log(projects);

  return { props: { projects: projects } }
}