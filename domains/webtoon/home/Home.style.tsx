import styled from '@emotion/styled';

const HomeContainer = styled.main``;

const HomeTopWrapper = styled.section`
  width: 100%;
`;

const HomeTopTitleWrapper = styled.div`
  display: inline-block;
  align-items: flex-start;
  padding: ${(props) => props.theme.padding.layout};
  padding-top: 2rem;
  height: 200px;
`;

const HomeTopTitle = styled.h1`
  width: 200px;
  font-size: 2.4rem;
  font-weight: bold;
`;

const HomeSectionWrapper = styled.section`
  padding: ${(props) => props.theme.padding.layout_carousel};
  padding-top: 3rem;
`;

const HomeSectionTitle = styled.header`
  margin-bottom: 1.6rem;
  font-size: 2.4rem;
  font-weight: bold;
`;

const HomeSectionSubTitle = styled.small`
  color: ${(props) => props.theme.colors.grey_400};
  font-size: 1.2rem;
`;

export {
  HomeContainer,
  HomeTopWrapper,
  HomeTopTitleWrapper,
  HomeTopTitle,
  HomeSectionWrapper,
  HomeSectionTitle,
  HomeSectionSubTitle,
};
