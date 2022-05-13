import styled from '@emotion/styled';

const IntroDetailWrap = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 2.6rem;
  width: min(312px, 100%);
`;

const Img = styled.div`
  margin: 0 1.2rem 0 0;
  border-radius: 1rem;
  background-color: #eee;
  width: 4.8rem;
  height: 4.8rem;
`;

const ContentWrap = styled.div`
  font-size: 1.4rem;
`;

const MainText = styled.p`
  margin: 0 0 0.8rem;
  font-weight: 600;
`;

const SubText = styled.p`
  color: ${(props) => props.theme.colors.grayscale.gray_600};
  font-weight: 400;
`;

export { IntroDetailWrap, Img, ContentWrap, MainText, SubText };
