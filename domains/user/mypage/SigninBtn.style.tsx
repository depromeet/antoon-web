import styled from '@emotion/styled';

const SigninWrap = styled.div`
  margin: 10rem 0 0;
  width: 100%;
  text-align: center;
`;

const SigninButton = styled.button`
  margin: 1.2rem 0 6.5rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors.grayscale.gray_1000};
  width: 100%;
  height: 4.8rem;
  color: ${(props) => props.theme.colors.basic.white};
`;

export { SigninWrap, SigninButton };
