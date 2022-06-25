import styled from '@emotion/styled';

const VoteChipWrapper = styled.p<{ color: string }>`
  display: inline-flex;
  align-items: center;
  border-radius: 30px;
  background-color: ${({ color }) => color};
  padding: 0 0.8rem;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.basic.white};
  font-weight: 500;
`;

export { VoteChipWrapper };
