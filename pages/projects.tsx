import type { NextPage } from 'next'
import Head from 'next/head'
import Button, { NestedBtn, SVG } from '../components/Button'
import { H1, H2 } from '../components/Common/Typography'
import PreviewDescription, { Divider } from '../components/PreviewDescription'
import { Row, Column } from '../components/Common/FlexBox'
import PreviewImage from '../components/PreviewImage'
import styled from 'styled-components'
import Hero from '../components/Hero/Hero'
import { fetchProjects } from '../contentfulPosts'
export const Container = styled.section`

`
export const Main = styled.div`
  width: 80%;
  max-width: 1440px;
  margin: auto;
`
interface Project {
  title: string,
  projectScreenshot: string,
  id: string
}
interface ProjectsPageProps {
  projects: Project[]

}

const ProjectsPage: NextPage<ProjectsPageProps> = (props) => {

  return (
    <Main>
      {props.projects.map(project => {
        return <Row key={project.id}>
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
            <PreviewDescription
              title={project.title}
              description="not yet added"
              onclick={() => alert("func works")}
            />
          </Column>
        </Row>
      })}

      <Row>
        <H2>Interested in doing a project together?</H2>
        <Divider />
        <Button variant="secondary"> Contact me</Button>
      </Row>
    </Main>


  )
}

export default ProjectsPage

export async function getStaticProps() {
  const projects = await fetchProjects()
  return { props: { projects: projects } }
}