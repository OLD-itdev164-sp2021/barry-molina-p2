import React from 'react'
import { BaseText } from './BaseText'

const Paragraph = props => (
  <BaseText as='p' { ...props} />
)

export { Paragraph as P }