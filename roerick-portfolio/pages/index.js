import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';
import { Flex, Box } from 'rebass'
import { Layout } from '../components/Layout'
import { Section } from '../components/Section'

const Intro = styled(Section)`
  height: 400px;
  background-color: white;
`

const Description = styled(Section)`
  height: 400px;
  background-color: purple;
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

const RecentWork = styled(Section)`
  padding: 1.5rem;

`

const Grid = styled(Box)`
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  display: grid;
  gap: 20px;
  /* grid-template-columns: repeat(auto-fit, minmax(128, 1fr)); */
  grid-template-columns: repeat(3, 1fr);
`

const GridItem = styled(Box)`
  border: 1px solid black;
  border-radius: 8px;
  padding: 90px 0;
  text-align: center;
`

export default function Home() {
  return (
    <Layout>
      <Intro></Intro>
      <Description></Description>
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
        </Columns>
      </Categories>
      <RecentWork>
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
