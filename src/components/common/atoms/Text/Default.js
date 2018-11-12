// @flow

import * as React from "react";
import styled from "styled-components";

type Props = {
  children: string,
  color?: string,
  className?: string
};

export default (props: Props) => {
  const { children, color, className } = props;
  return (
    <DefaultTextStyle color={color} className={className || ""}>
      {children}
    </DefaultTextStyle>
  );
};

const DefaultTextStyle = styled.span`
  font-size: 16px;
  color: ${props => (props.color ? props.color : null)};
`;
