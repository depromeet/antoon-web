import styled from '@emotion/styled';

const SignInWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GoToMain = styled.button`
  margin: 2rem 0;
  font-size: 1.4rem;
  font-weight: 700;
`;

const SignInBtn = styled.button`
  border-radius: 1.2rem;
  background-color: #1c1c1c;
  width: min(300px, 100%);
  height: 5.4rem;
  color: #fafafb;
  font-size: 1.6rem;
  font-weight: 400;
`;

export { SignInWrap, GoToMain, SignInBtn };
