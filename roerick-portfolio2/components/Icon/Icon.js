import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { BaseContainer } from '../BaseContainer'

const StyledIcon = styled(BaseContainer)`
`
export const Icon = styled(({ icon, ...rest }) => {
  let clone = React.cloneElement(icon, rest)
  return <StyledIcon as={clone.type} {...rest} className={rest.className} />
})``

Icon.defaultProps = {
  // size: 24
}

Icon.propTypes = {
  icon: PropTypes.node.isRequired
}