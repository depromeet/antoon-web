import styled from '@emotion/styled';
import React from 'react';

function CheckIcon() {
  return <CheckMark></CheckMark>;
}

const CheckMark = styled.p`
  display: inline-block;
  position: absolute;
  top: 46%;
  left: 46%;
  transform: rotate(-45deg);
  transform-origin: 25% 25%;
  z-index: 3;
  margin-right: 8px;
  border: 2px solid ${(props) => props.theme.colors.basic.white};
  border-top: 0;
  border-right: 0;
  width: 28px;
  height: 14px;
`;
export default CheckIcon;
