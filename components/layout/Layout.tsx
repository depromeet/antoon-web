import styled from '@emotion/styled';
import React from 'react';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MainWrap>{children}</MainWrap>
    </>
  );
}

const MainWrap = styled.main`
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.white};
  padding: 0 2.4rem;
  width: min(768px, 100%);
  min-height: 100vh;
`;

export default Layout;
