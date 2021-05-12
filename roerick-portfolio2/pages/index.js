import Head from 'next/head'
// import Image from 'next/image'
import { Image } from 'rebass'
import styled, { ThemeProvider } from 'styled-components'
import { Flex, Box, Button } from 'rebass'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Main } from '../components/Main'
import { Section } from '../components/Section'
import { P } from '../components/Text'
import { H1, H2, H3 } from '../components/Heading'
import { List, ListItem } from '../components/List'
import { IconButton, MessageButton, BaseButton } from '../components/Button'
import GlobalStyle from '../components/GlobalStyle'
import Default from '../themes/Default/Default'
import { Mail } from 'styled-icons/entypo'

const MailButton = styled(Mail)`
  color: ${({ theme }) => theme.colors.primary};
  margin-right: 2rem;
  width: 40px;
  &:hover {
    cursor: pointer;
  }
`
const Intro = styled(Section)`
  /* height: 400px; */
  background-color: white;
  text-align: center;
`

const Description = styled(Section)`
  /* height: 400px; */
  /* padding-top: 8rem;
  padding-bottom: 16rem; */
  padding: 8rem 2rem 16rem;
  /* background-color: purple; */
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
  /* box-shadow: .5px .5px 4px black; */
  box-shadow: ${({theme}) => theme.shadows.small};
  @media (max-width: 768px) {
    flex-direction: column;
    /* max-width: 500px; */
  }
`

const Column = styled(Box)`
  flex: 1 1 0px;
  min-height: 600px;
  text-align: center;
  border-right: 1px solid ${({theme}) => theme.colors.border};
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
    <ThemeProvider theme={Default}>
      <GlobalStyle />
      <Head>
        <title>Gendale Technologies</title>
        <meta name="description" content="Gendale Technologies portfolio page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header p={[3, 3, 4]}>
        <Section 
          flex 
          alignItems="center" 
          justifyContent='space-between'
          height={100}
          // color="white"
         >
          <H1>Gendale Technologies</H1>
          {/* <MessageButton sx={{color: 'green'}} width='40' /> */}
          {/* <IconButton icon={<Mail/>}/> */}
          <MailButton/>
          {/* <BaseButton bg='primary' width='100px'><MailButton/></BaseButton> */}
        </Section>
      </Header>
      <Main>
        <Intro pt='8'>
          <H2>Web, Geospatial, and Peer-to-Peer Technology</H2>
          <P>Providing you with the tools and technology you need to acheive your goals</P>
          {/* <Image src='/gears.jpeg' height='394' width='800'/> */}
          <Image src='/gearspurple.png' p='3' pt='7' width={[600, 750]} />

        </Intro>
        <Description bg='primary'>
          <H2 pb='5'>Hello there!</H2>
          <P>At Gendale Technologies, we believe in bringing you the best experience, no matter what your technology needs are.</P>
        </Description>
        <Categories>
          <Columns>
            <Column>
              <H3>Web</H3>
              <P>I really like making websites for people, especially free ones</P>
              <P>Tools we use:</P>
              <List>
                <ListItem>React</ListItem>
                <ListItem>Gatsby</ListItem>
                <ListItem>Python</ListItem>
                <ListItem>Django</ListItem>
              </List>
            </Column>
            <Column>
              <H3>Geospatial</H3>
              <P>I've made a couple maps but it's really hard and takes a long time</P>
              <P>Tools we use:</P>
              <List>
                <ListItem>Python</ListItem>
                <ListItem>PostgreSQL</ListItem>
              </List>
            </Column>
            <Column>
              <H3>Peer-to-peer</H3>
              <P>I'm super into bitcoin and dogecoin.</P>
              <P>Tools we use:</P>
              <List>
                <ListItem>The Blockchain</ListItem>
              </List>
            </Column>
          </Columns>
        </Categories>
        <RecentWork>
          <H2 textAlign='center'>Recent Work</H2>
          <Grid>
            <GridItem ><H3>St. Croix Ballet</H3></GridItem>
            <GridItem><H3>Frederic Remington</H3></GridItem>
            <GridItem><H3>HelpMeBounce</H3></GridItem>
            <GridItem><H3>Cohen Esray</H3></GridItem>
            <GridItem><H3>Taylor Farms</H3></GridItem>
          </Grid>
        </RecentWork>

      </Main>
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
}
