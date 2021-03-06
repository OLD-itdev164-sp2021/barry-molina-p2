import Head from 'next/head'
import { Image } from 'rebass'
import styled, { ThemeProvider } from 'styled-components'
import { Flex, Box } from 'rebass'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Main } from '../components/Main'
import { Section } from '../components/Section'
import { P } from '../components/Text'
import { H2, H3, H4 } from '../components/Heading'
import { List, ListItem } from '../components/List'
import { Figure, Figcaption } from '../components/Figure'
import GlobalStyle from '../components/GlobalStyle'
import Default from '../themes/Default/Default'
import { Globe } from 'styled-icons/bootstrap'
import { Map } from 'styled-icons/boxicons-regular'
import { Bitcoin } from 'styled-icons/fa-brands'
import { Icon } from '../components/Icon'

const Intro = styled(Section)`
  background-color: white;
  text-align: center;
`

const Description = styled(Section)`
  padding: 8rem 2rem 16rem;
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

const StyledIcon = styled(Icon)`
  margin: 2rem;
  color: ${({theme}) => theme.colors.primary};
  width: 48px;
`

const Columns = styled(Flex)`
  background-color: white;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: ${({theme}) => theme.shadows.small};
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Column = styled(Box)`
  flex: 1 1 0px;
  min-height: 600px;
  text-align: center;
  border-right: 1px solid ${({theme}) => theme.colors.border};
  padding: 1.5rem;
  & h4 {
    padding-top: 2rem;
    padding-bottom: 1rem;

  }
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
`

const GridItem = styled(Box)`
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  transition: background-color .3s;
  transition: background-image .3s;
  &:hover {
    background-color: white;
    background-image: none;
  }
  & img {
    display: block;
  }
`

const GridItemFigure = styled(Figure)`
  position: relative;
  & a {
    display: block;
    padding: .5rem 1rem;
    border-radius: 25px;
    background-color: transparent;
    border: 3px solid ${({ theme }) => theme.colors.primary};
    transition: background-color .5s;
    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }
  & figcaption {
    background-color: #141c3a;
    color: white;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 1em;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity .6s;
    &:hover, :focus{
      opacity: 1;
    }
  }
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
      <Header p={[3, 3, 4]} />
      <Main>
        <Intro pt={[7,8,9]} px='4' pb='2' >
          <H2 fontWeight='normal'>Web, Geospatial, and Peer-to-Peer Technology</H2>
          <P pt={[2, 0]}>Providing you with the tools and technology you need to acheive your goals</P>
          <Image src='/gearspurple.png' pt={[5,7]} width={[500, 600, 750]} />

        </Intro>
        <Description bg='primary'>
          <H2 pb='5'>Hello there!</H2>
          <P>At Gendale Technologies, we believe in bringing you the best experience, no matter what your technology needs are.</P>
        </Description>
        <Categories>
          <Columns>
            <Column>
              {/* <StyledGlobe/> */}
              <StyledIcon icon={<Globe/>}/>
              <H3>Web</H3>
              <P>I really like making websites for people, especially free ones</P>
              <H4>Tools we use:</H4>
              <List>
                <ListItem>React</ListItem>
                <ListItem>Gatsby</ListItem>
                <ListItem>Python</ListItem>
                <ListItem>Django</ListItem>
              </List>
            </Column>
            <Column>
              <StyledIcon icon={<Map/>}/>
              <H3>Geospatial</H3>
              <P>I've made a couple maps but it's really hard and takes a long time</P>
              <H4>Tools we use:</H4>
              <List>
                <ListItem>Python</ListItem>
                <ListItem>PostgreSQL</ListItem>
              </List>
            </Column>
            <Column>
              <StyledIcon icon={<Bitcoin/>}/>
              <H3>Peer-to-peer</H3>
              <P>I'm super into bitcoin and dogecoin.</P>
              <H4>Tools we use:</H4>
              <List>
                <ListItem>The Blockchain</ListItem>
              </List>
            </Column>
          </Columns>
        </Categories>
        <RecentWork pt='8' pb='10' px='5'>
          <H2 textAlign='center'>Recent Work</H2>
          <Grid>
            <GridItem>
              <GridItemFigure>
                <Image src='/stcroix.png'/>
                <Figcaption>
                  <P>One of the twin cities' top ballet studios</P>
                  <a href='https://stcroixballet.com/' target='_blank'>Visit Website</a>
                </Figcaption>
              </GridItemFigure>
            </GridItem>
            <GridItem>
              <GridItemFigure>
                <Image src='/fredericremington.png'/>
                <Figcaption>
                  <P>Frederic Remington Presidential Ready to Eat Bacon</P>
                  <a href='https://fredericremingtonbacon.com/' target='_blank'>Visit Website</a>
                </Figcaption>
              </GridItemFigure>
            </GridItem>
            <GridItem>
              <GridItemFigure>
                <Image src='/helpmebounce.png'/>
                <Figcaption>
                  <P>Assistance to families in crisis</P>
                  <a href='https://www.helpmebounce.org/' target='_blank'>Visit Website</a>
                </Figcaption>
              </GridItemFigure>
            </GridItem>
          </Grid>
        </RecentWork>

      </Main>
      <Footer bg='primary' pt={10}>
        <Section 
          flex 
          justifyContent="center" 
          color="white"
         >
          <P textAlign='center'>&copy;2021 Barry Molina</P>
        </Section>
      </Footer>
    </ThemeProvider>
  )
}
