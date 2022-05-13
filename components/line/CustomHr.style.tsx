import styled from '@emotion/styled';

const HrWrap = styled.hr<{ margin: string }>`
  margin: ${(props) => props.margin};
  border: 0;
  background-color: ${(props) => props.theme.colors.grayscale.gray_100};
  width: calc(100% + 4.8rem);
  height: 0.8rem;
`;

export { HrWrap };
