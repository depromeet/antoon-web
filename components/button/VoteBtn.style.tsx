import styled from '@emotion/styled';

const VoteBtnWrapper = styled.button<{ voteStatus: boolean }>`
  transition: background 0.3s;
  border-radius: 10px;
  background: ${(props) =>
    props.voteStatus
      ? props.theme.colors.grayscale.gray_900
      : props.theme.colors.grayscale.gray_400};
  width: 136px;
  height: 48px;
  color: ${(props) => props.theme.colors.basic.white};
  font-size: 16px;
  -webkit-tap-highlight-color: transparent;
  /* stylelint-disable-next-line */
  &:focus,
  :hover {
    background: ${(props) => props.theme.colors.grayscale.gray_900};
  }
`;
export { VoteBtnWrapper };
