import styled from '@emotion/styled';

const IntroMainWrap = styled.div`
  text-align: center;
`;

const SignInImgWrap = styled.div`
  margin: 5.6rem 0 0;
`;

const IntroMain = styled.p`
  margin: 3.239rem 0 0;
  color: ${(props) => props.theme.colors.grayscale.gray_100};
  font-size: 2rem;
  font-weight: 600;
`;

const IntroDetail = styled.p`
  margin: 1.2rem 0 0;
  line-height: 2.1rem;
  color: ${(props) => props.theme.colors.grayscale.gray_200};
  font-size: 1.4rem;
  font-weight: 500;
`;

export { IntroMainWrap, SignInImgWrap, IntroMain, IntroDetail };
