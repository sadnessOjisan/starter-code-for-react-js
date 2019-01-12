// @flow

import * as React from 'react'
import styled from 'styled-components'

type Props = {
  children: string,
  color?: string,
  className?: string,
}

const Text = (props: Props) => {
  const { children, color, className } = props
  return (
    <DefaultTextStyle color={color} className={className}>
      {children}
    </DefaultTextStyle>
  )
}

Text.defaultProps = {
  color: '',
  className: '',
}

const DefaultTextStyle = styled.span`
  font-size: 16px;
  color: ${props => (props.color ? props.color : null)};
`

export default Text
