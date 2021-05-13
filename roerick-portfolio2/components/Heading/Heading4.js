import React from 'react'
import { BaseHeading } from './BaseHeading'

const Heading4 = props => (
  <BaseHeading as='h4' fontSize={[2, 3, 4]} color='primary' {...props} />
)

export { Heading4 as H4}