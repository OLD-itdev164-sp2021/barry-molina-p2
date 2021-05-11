import React from 'react'
import PropTypes from 'prop-types'
import { BaseText } from '../Text'

export const ListItem = ({ children, ...rest }) => (
  <BaseText as='li' {...rest}>
    {children}
  </BaseText>
)

ListItem.propTypes = {
  children: PropTypes.node.isRequired
}