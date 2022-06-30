import styled from '@emotion/styled';

const Bar = styled.div`
  position: absolute;
  left: 0;
  border-bottom: 8px solid ${(props) => props.theme.colors.grayscale.gray_300};
  width: 100%;
`;

export default Bar;
