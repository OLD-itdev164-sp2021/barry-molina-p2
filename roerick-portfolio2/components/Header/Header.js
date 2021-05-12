import React, { useState } from 'react'
import styled from 'styled-components'
import { BaseContainer } from '../BaseContainer'
import { Mail } from 'styled-icons/entypo'
import { Section } from '../Section'
import { H1 } from '../Heading'
import { P } from '../Text'

const MailButtonContainer = styled.div`
  white-space: nowrap;
  margin-right: 2rem;
  &:hover {
    /* svg {
      opacity: 0;
    } */

    /* p {
      opacity: 1;
    } */
    /* cursor: pointer; */
    /* display: none; */
  }
`

const MessageButton = styled(P)`
  /* position: absolute;
  top: 0px;
  right: 0px; */
  margin: 0;
  padding-right: .5rem;
  opacity: ${({ hovered }) => hovered ? 1 : 0};
  /* opacity: 1; */
  transition: opacity .3s;
  display: inline-block;
`

const MailButton = styled(Mail)`
  /* position: absolute;
  top: 0px;
  right: 0px; */
  margin-bottom: .5rem;
  color: ${({ theme }) => theme.colors.primary};
  /* margin-right: 2rem; */
  cursor: pointer;
  width: 40px;
  transition: opacity .2s;
`

export const Header = props => { 
  const [ hovered, setHovered ] = useState(false)

  return (
    <BaseContainer as="header" {...props}>
      <Section 
        flex 
        alignItems="center" 
        justifyContent='space-between'
        height={100}
        // color="white"
      >
        <H1 fontFamily='heading'>Gendale Technologies</H1>
        {/* <MessageButton sx={{color: 'green'}} width='40' /> */}
        {/* <IconButton icon={<Mail/>}/> */}
        {/* { hovered ? 'send message' : <MailButton onMouseEnter={() => setHovered(true)}/>} */}
        <MailButtonContainer>
          <MessageButton color='primary' hovered={hovered}>Send us a message</MessageButton>
          <MailButton 
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          />
        </MailButtonContainer>
        {/* <MailButton/> */}
        {/* <BaseButton bg='primary' width='100px'><MailButton/></BaseButton> */}
      </Section>
    </BaseContainer>
  )
 }