import React from 'react'
import { BaseHeading } from './BaseHeading'

const Heading3 = props => (
  <BaseHeading as='h3' fontSize={[3, 4, 5]} {...props} />
)

export { Heading3 as H3}