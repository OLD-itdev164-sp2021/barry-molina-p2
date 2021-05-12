import React from 'react'
import PropTypes from 'prop-types'
import { ThemeConsumer } from 'styled-components'
import { IconButton } from './IconButton'

export const MessageButton = props => (
  <ThemeConsumer>
    {theme => <IconButton icon={theme.icons.Message} {...props} />}
  </ThemeConsumer>
)

MessageButton.propTypes = {
  variant: PropTypes.string
}