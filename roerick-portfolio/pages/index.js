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
  margin-top: -50px;
  padding: 2rem;
`

const Columns = styled(Flex)`
  background-color: white;
  height: 300px;
  border: 1px solid black;
`

export default function Home() {
  return (
    <Layout>
      <Intro></Intro>
      <Description></Description>
      <Categories>
        <Columns>
        </Columns>
      </Categories>
    </Layout>
  )
}
