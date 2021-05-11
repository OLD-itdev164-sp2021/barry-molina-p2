import React from 'react'
import { BaseHeading } from './BaseHeading'

const Heading2 = props => (
  <BaseHeading as='h2' fontSize={[4, 5, 6]} {...props} />
)

export { Heading2 as H2}