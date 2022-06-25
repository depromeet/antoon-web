import styled from '@emotion/styled';

const HeaderWrap = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  align-items: center;
  z-index: 100;
  background-color: ${(props) => props.theme.colors.basic.white};
  width: 100%;
  height: 5.6rem;
`;

const Title = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  margin: 0 auto;
  font-size: 2rem;
  font-weight: 600;
`;

export { HeaderWrap, Title };
