import styled from '@emotion/styled';

const HeaderWrap = styled.header<{ headerColor: string }>`
  display: flex;
  position: sticky;
  top: 0;
  align-items: center;
  z-index: 100;
  margin: 0 0 0 -2.4rem;
  background-color: ${(props) =>
    props.headerColor ? props.headerColor : props.theme.colors.basic.white};
  padding: 0 2.4rem;
  width: calc(100% + 4.8rem);
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
