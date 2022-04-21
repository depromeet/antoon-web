import styled from '@emotion/styled';

const Row = styled.div<any>`
  display: 'flex';
  flex-direction: 'row';
  justify-content: 'space-between';
  ${(props) => props.centeredX && `justify-content: 'center'`};
  ${(props) => props.centeredY && `align-items: 'center'`};

  width: '100%';
`;

export default Row;
