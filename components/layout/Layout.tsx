import styled from '@emotion/styled';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MainWrap>{children}</MainWrap>
    </>
  );
}

const MainWrap = styled.div`
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.white};
  padding: 0 2.4rem;
  width: min(768px, 100%);
  min-height: 100vh;
`;

export default Layout;
