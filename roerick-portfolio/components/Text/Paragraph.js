import React from 'react'
import { BaseText } from './BaseText'

const Paragraph = props => (
  <BaseText as='p' fontSize={[2, 3]} { ...props} />
)

export { Paragraph as P }