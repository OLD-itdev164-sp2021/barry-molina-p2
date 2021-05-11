import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'rebass'

const BaseText = ({ children, ...rest }) =>
  <Text fontSize={[2, 3, 4]} { ...rest } >
    { children }
  </Text>

BaseText.propTypes = {
  children: PropTypes.node.isRequired
}

export { BaseText }