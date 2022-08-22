import styled from '@emotion/styled';

const SigninButtonWrap = styled.div`
  position: fixed;
  bottom: 8rem;
  margin: 1rem 0 0 -2.4rem;
  background-color: ${(props) => props.theme.colors.basic.white};
  padding: 0.5rem 2.4rem 2rem;
  width: min(48rem, calc(100%));
  text-align: center;
`;

const Button = styled.button`
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors.grayscale.gray_1000};
  width: 100%;
  height: 4.8rem;
  color: ${(props) => props.theme.colors.basic.white};
  font-size: 1.6rem;
  font-weight: 600;
`;

export { SigninButtonWrap, Button };
