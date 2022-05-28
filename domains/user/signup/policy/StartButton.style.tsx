import styled from '@emotion/styled';

const StartButtonWrapper = styled.button<{ isAllEssentialChecked?: boolean }>`
  transition: background-color 0.4s ease;
  margin: 1.6rem 0;
  border-radius: 1rem;
  background-color: ${(props) =>
    props.isAllEssentialChecked
      ? props.theme.colors.grayscale.gray_1000
      : props.theme.colors.grayscale.gray_400};
  cursor: ${(props) => (props.isAllEssentialChecked ? 'pointer' : 'auto')};
  width: 31.2rem;
  height: 4.8rem;
  color: ${(props) => props.theme.colors.basic.white};
  user-select: none;
`;

export { StartButtonWrapper };
