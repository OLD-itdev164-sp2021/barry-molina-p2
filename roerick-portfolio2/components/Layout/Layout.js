import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import { BaseContainer } from '../BaseContainer'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { Main } from '../Main'
import { Section } from '../Section'
import { H1 } from '../Heading'
import { P } from '../Text'
import GlobalStyle from '../GlobalStyle'
import Default from '../../themes/Default/Default'

const Layout = ({ children }) => ( 
    // <ThemeProvider theme={Default}>
    <ThemeProvider theme={Default}>
      <GlobalStyle />
      <Head>
        <title>Gendale Technologies</title>
        <meta name="description" content="Gendale Technologies portfolio page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <Section 
          flex 
          alignItems="center" 
          height={100}
          // color="white"
         >
          <H1>Gendale Technologies</H1>
        </Section>
      </Header>
      <Main>{children}</Main>
      <Footer bg='primary' pl={4} pt={4}>
        <Section 
          flex 
          alignItems="center" 
          height={100}
          color="white"
         >
          <P>&copy;2021 Barry Molina</P>
        </Section>
      </Footer>

    </ThemeProvider>
 )

export { Layout }