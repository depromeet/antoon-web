import styled from '@emotion/styled';

const VoteBtnWrapper = styled.button<{ voteStatus: boolean }>`
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

  &:focus {
    background: ${(props) => props.theme.colors.grayscale.gray_900};
  }
`;
export { VoteBtnWrapper };
