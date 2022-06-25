import styled from '@emotion/styled';
import { HTMLAttributes, ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  selected: boolean;
} & HTMLAttributes<HTMLButtonElement>;

function TagBtn({ children, selected, onClick }: Props) {
  return (
    <Btn selected={selected} onClick={onClick}>
      {children}
    </Btn>
  );
}

const Btn = styled.button<{ selected: boolean }>`
  display: flex;
  border: solid 1px ${(props) => props.theme.colors.grayscale.gray_200};
  border-radius: 10rem;
  background-color: ${(props) =>
    props.selected ? props.theme.colors.grayscale.gray_1000 : 'unset'};
  padding: 0.7rem 1.6rem;
  color: ${(props) =>
    props.selected ? 'white' : props.theme.colors.grayscale.gray_700};
  font-size: 1.4rem;
  -webkit-tap-highlight-color: transparent;
  user-select: none;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transition-duration: 200ms;
      transition-property: background-color, color;
      transition-timing-function: ease;
      background-color: ${(props) => props.theme.colors.grayscale.gray_700};
      color: ${(props) => props.theme.colors.basic.white};
    }
  }
`;

export default TagBtn;
