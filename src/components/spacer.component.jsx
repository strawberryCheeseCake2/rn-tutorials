import React from "react";
import styled from "styled-components";

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: "margin-top",
  bottom: "margin-bottom",
  left: "margin-left",
  right: "margin-right",
}

const getVariant = (marginPosition, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[marginPosition];
  const value = theme.space[sizeIndex];

  return `${property}: ${value}`;
}

export const Spacer = styled.View`
  ${({marginPosition, size, theme}) => getVariant(marginPosition, size, theme)};
`;

Spacer.defaultProps = {
  marginPosition: "top",
  size: "small",
};