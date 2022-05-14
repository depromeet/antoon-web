import styled from '@emotion/styled';

const SignInWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GoToMain = styled.button`
  display: flex;
  align-items: center;
  margin: 1.65rem 0;
  color: ${(props) => props.theme.colors.grayscale.gray_600};
  font-size: 1.4rem;
  font-weight: 600;
`;

export { SignInWrap, GoToMain };
