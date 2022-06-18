import styled from '@emotion/styled';

const VoteChipWrapper = styled.p<{ color: string }>`
  margin-right: 5px;
  border-radius: 30px;
  background-color: ${({ color }) => color};
  width: 40px;
  height: auto;
  text-align: center;
`;
const VoteChipContent = styled.span`
  color: ${(props) => props.theme.colors.basic.white};
  font-size: 11px;
  font-weight: 400;
`;

export { VoteChipWrapper, VoteChipContent };
