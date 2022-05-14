import styled from '@emotion/styled';

const RightWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const MenuWrap = styled.div`
  display: flex;

  svg {
    margin: 0 1.6rem 0 0;
  }

  a:nth-child(2) {
    max-width: 2.4rem;
  }
`;

export { RightWrap, MenuWrap };
