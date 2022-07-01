import styled from '@emotion/styled';

const Bar = styled.div`
  position: absolute;
  margin: 0 0 0 -24px;
  border-bottom: 8px solid ${(props) => props.theme.colors.grayscale.gray_100};
  width: min(480px, 100%);
  text-align: center;
`;

export default Bar;
