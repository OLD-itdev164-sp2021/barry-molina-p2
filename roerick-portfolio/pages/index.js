import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';
import { Flex, Box, Heading } from 'rebass'
import { Layout } from '../components/Layout'
import { Section } from '../components/Section'
import { P } from '../components/Text'

const Intro = styled(Section)`
  height: 400px;
  background-color: white;
`

const Description = styled(Section)`
  /* height: 400px; */
  /* padding-top: 8rem;
  padding-bottom: 16rem; */
  padding: 8rem 2rem 16rem;
  background-color: purple;
  color: white;
  text-align: center;
  p {
    max-width: 600px;
    margin: 0 auto;
  }
`

const Categories = styled(Section)`
  margin-top: -200px;
  padding: 2rem;
`

const Columns = styled(Flex)`
  background-color: white;
  /* border: 1px solid black; */
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: .5px .5px 4px black;
  @media (max-width: 768px) {
    flex-direction: column;
    /* max-width: 500px; */
  }
`

const Column = styled(Box)`
  flex: 1 1 0px;
  min-height: 600px;
  text-align: center;
  border-right: 1px solid black;
  padding: 1.5rem;
  & ul {
    margin: 0;
    padding: 0;
    list-style-type: none
  }
  &:last-child {
    border-right: none;
  }
  @media (max-width: 768px) {
    border-right: none;
    border-bottom: 1px solid black;
    &:last-child {
      border-bottom: none;
    }
  }
`

const H2 = styled(Heading)`
  font-family: inherit;
  text-align: center;
`

const RecentWork = styled(Section)`
  padding: 8rem 2rem;
`

const Grid = styled(Box)`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  margin: 0 auto;
  min-width: 0px;
  max-width: 1250px;
  gap: 25px;
  padding-top: 2rem;
  /* grid-template-columns: repeat(3, 1fr); */
`

const GridItem = styled(Box)`
  background-color: skyblue;
  /* border: 1px solid black; */
  border-radius: 8px;
  padding: 90px 0;
  text-align: center;
`

export default function Home() {
  return (
    <Layout>
      <Intro></Intro>
      <Description>
        <P>At Gendale Technologies we believe in bringing you the best experience no matter what your technology needs are.</P>
      </Description>
      <Categories>
        <Columns>
          <Column>
            <h3>Web</h3>
            <p>I really like making websites for people, especially free ones</p>
            <p>Tools we use:</p>
            <ul>
              <li>React</li>
              <li>Gatsby</li>
              <li>Python</li>
              <li>Django</li>
            </ul>
          </Column>
          <Column>
            <h3>Geospatial</h3>
            <p>I've made a couple maps but it's really hard and takes a long time</p>
            <p>Tools we use:</p>
            <ul>
              <li>Python</li>
              <li>PostgresQL</li>
            </ul>
          </Column>
          <Column>
            <h3>Peer-to-peer</h3>
            <p>I'm super into bitcoin and dogecoin.</p>
            <p>Tools we use:</p>
            <ul>
              <li>The Blockchain</li>
            </ul>
          </Column>
        </Columns>
      </Categories>
      <RecentWork>
        <H2>Recent Work</H2>
        <Grid>
          <GridItem ><h3>St. Croix Ballet</h3></GridItem>
          <GridItem><h3>Frederic Remington</h3></GridItem>
          <GridItem><h3>HelpMeBounce</h3></GridItem>
          <GridItem><h3>Cohen Esray</h3></GridItem>
          <GridItem><h3>Taylor Farms</h3></GridItem>
        </Grid>
      </RecentWork>
      
    </Layout>
  )
}
