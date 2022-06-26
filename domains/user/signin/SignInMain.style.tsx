import styled from '@emotion/styled';

const SignInWrap = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  margin: 0 0 0 -2.4rem;
  background-color: ${(props) => props.theme.colors.grayscale.gray_1000};
  background-image: url('/images/loginpage_bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  width: calc(100% + 4.8rem);
  height: calc(100vh - 5.6rem);
  background-position-y: 13rem;
`;

const BtnWrap = styled.div`
  display: flex;
  position: absolute;
  bottom: 10%;
  flex-direction: column;
  margin: 0 0 1.2rem;
  text-align: center;

  button:nth-of-type(1) {
    margin: 0 0 1.2rem;
  }
`;

const Text = styled.p`
  opacity: 0.6;
  margin: 0 0 1.6rem;
  color: ${(props) => props.theme.colors.basic.white};
  font-size: 1.6rem;
  font-weight: 500;
`;

export { SignInWrap, BtnWrap, Text };
