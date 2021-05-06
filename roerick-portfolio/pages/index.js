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
  height: 200px;
  background-color: purple;
`

const Categories = styled(Section)`
  margin-top: -70px;
  padding: 2rem;
`

const Columns = styled(Flex)`
  background-color: white;
  min-height: 300px;
  /* border: 1px solid black; */
  max-width: 850px;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: .5px .5px 4px black;
  @media (max-width: 768px) {
    flex-direction: column;
    /* max-width: 500px; */
  }
`

const Column = styled(Box)`
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
    </Layout>
  )
}
