import styled from '@emotion/styled';

const DefaultMyPageWrap = styled.div`
  width: 100%;
`;

const SigninWrap = styled.div`
  position: fixed;
  bottom: 0;
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

export { DefaultMyPageWrap, SigninWrap, SigninButton };
