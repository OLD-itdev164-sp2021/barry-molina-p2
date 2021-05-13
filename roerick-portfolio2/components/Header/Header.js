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
`

const HoverMessage = styled(P)`
  margin: 0;
  padding-right: .5rem;
  opacity: ${({ hovered }) => hovered ? 1 : 0};
  transition: opacity .3s;
  display: inline-block;
`

const MailButton = styled(Mail)`
  margin-bottom: .5rem;
  color: ${({ theme }) => theme.colors.primary};
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
      >
        <H1 fontFamily='heading'>Gendale Technologies</H1>
        <MailButtonContainer>
          <HoverMessage color='primary' hovered={hovered}>Send us a message</HoverMessage>
          <MailButton 
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          />
        </MailButtonContainer>
      </Section>
    </BaseContainer>
  )
 }