import styled from '@emotion/styled';

// TODO: 공통 레이아웃으로 변경
const DefaultLayout = styled.div`
  min-width: 320px;
  max-width: 1024px;
  height: 100vh;
`;

// TODO: 공통 헤더로 변경
const DefaultHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 2.4rem;
  height: 56px;
`;

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
  DefaultLayout,
  DefaultHeader,
  HomeContainer,
  HomeTopWrapper,
  HomeTopTitleWrapper,
  HomeTopTitle,
  HomeSectionWrapper,
  HomeSectionTitle,
  HomeSectionSubTitle,
};
