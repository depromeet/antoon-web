import styled from '@emotion/styled';
import React from 'react';

type Props = {
  children?: React.ReactNode;
};

function TagBtn({ children }: Props) {
  return <Btn>{children}</Btn>;
}

const Btn = styled.button`
  display: flex;
  border: solid 1px ${(props) => props.theme.colors.grayscale.gray_200};
  border-radius: 10rem;
  padding: 0.7rem 1.6rem;
  font-size: 1.4rem;

  &:hover {
    transition-duration: 200ms;
    transition-property: background-color, color;
    transition-timing-function: ease;
    background-color: ${(props) => props.theme.colors.basic.black};
    color: ${(props) => props.theme.colors.basic.white};
  }
`;

export default TagBtn;
