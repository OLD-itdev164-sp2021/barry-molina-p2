import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import { BaseContainer } from '../BaseContainer'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { Main } from '../Main'
import { Section } from '../Section'
import GlobalStyle from '../GlobalStyle'

const Layout = ({ children }) => ( 
    <>
      <GlobalStyle />
      <Head>
        <title>Gendale Technologies</title>
        <meta name="description" content="Gendale Technologies portfolio page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header bg={'purple'}>
        <Section 
          flex 
          alignItems="center" 
          height={100}
          color="white"
         >
          <h1>Gendale Technologies</h1>
        </Section>
      </Header>
      <Main>{children}</Main>
      <Footer bg={'purple'}>
        <Section 
          flex 
          alignItems="center" 
          height={100}
          color="white"
         >
          <p>&copy;2021 Barry Molina</p>
        </Section>
      </Footer>

    </>
 )

export { Layout }