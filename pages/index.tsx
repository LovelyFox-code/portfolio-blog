import type { NextPage } from 'next'
import Head from 'next/head'
import PreviewDescription from '../components/PreviewDescription'
import { Row, Column, Section } from '../components/Common/FlexBox'
import PreviewImage from '../components/PreviewImage'
import styled from 'styled-components'
import Hero from '../components/Hero/Hero'
import { fetchHomePageContent } from '../fetchContentful'
import CTAsection from '../components/CTAsection'

export const Container = styled.section`

`
export const Main = styled.div`
  max-width: 1440px;
  margin: auto;
`
interface HomePageProps {
  portfolioPictureURL: string,
  tagLine: string,
  aboutMe: string,
  CTA: string,
  id: string

}
const Home: NextPage<HomePageProps> = (props) => {

  return (
    <Container>
      <Head>
        <title>Portfolio App</title>
        <meta name="description" content="Alina front-end developer portfolio wesite" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section>
        <Hero src={props.portfolioPictureURL} />
      </Section>

      <Section>
        <Row>
          <Column>
            <PreviewImage
              // srcSet= 
              sizes="(max-width: 600px) 480px,
              800px"
              src="/images/homepage/desktop/Facetune_07-05-2022-19-17-56.jpg"
              alt=""
            />
          </Column>
          <Column>
            <PreviewDescription
              title="About Me"
              description={props.aboutMe} id={props.id}
            />
          </Column>
        </Row>
      </Section>
      <CTAsection />
    </Container>

  )
}

export default Home
export async function getStaticProps() {
  const homePageProps: HomePageProps = await fetchHomePageContent()
  return {
    props: {
      ...homePageProps,
    },
  }
}
