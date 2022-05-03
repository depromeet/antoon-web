import styled from '@emotion/styled';

const HomeContainer = styled.main``;

const HomeTopWrapper = styled.section`
  padding-top: 0.8rem;
`;

const HomeTopTitleWrapper = styled.div`
  display: inline-block;
  align-items: flex-start;
  padding-top: 0.8rem;
  height: 200px;
`;

const HomeTopSubTitle = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
`;

const HomeTopTitle = styled.h1`
  padding-top: 0.4rem;
  width: 200px;
  font-size: 2.4rem;
  font-weight: bold;
`;

const HomeSectionWrapper = styled.section`
  margin-right: -2.4rem;
  padding-top: 3rem;
`;

const HomeSectionSubTitle = styled.small`
  color: ${(props) => props.theme.colors.grey_400};
  font-size: 1.2rem;
`;

const HomeSectionTitleWithTimeWrapper = styled.div`
  display: flex;
  align-items: baseline;
  padding: 0.6rem 0 1.6rem;

  > header {
    padding: unset;
  }
`;

const HomeSectionTitle = styled.header`
  padding: 0.6rem 0 1.6rem;
  font-size: 2.4rem;
  font-weight: bold;
`;

const HomeSectionTitleWithTime = styled.span`
  padding-left: 0.6rem;
  color: ${(props) => props.theme.colors.grey_500};
  font-size: 1.2rem;
`;

const HomeRecommendationWrapper = styled.section`
  margin: 0 -2.4rem;
  padding: 3rem 0;
`;

const HomeRecommendationBackground = styled.div`
  background-color: #f5f7fa;
  padding: 3rem 2.4rem;
  padding-right: 0;
`;

const HomeWeeklyWrapper = styled.section``;

export {
  HomeContainer,
  HomeTopWrapper,
  HomeTopTitleWrapper,
  HomeTopSubTitle,
  HomeTopTitle,
  HomeSectionWrapper,
  HomeSectionSubTitle,
  HomeSectionTitleWithTimeWrapper,
  HomeSectionTitle,
  HomeSectionTitleWithTime,
  HomeRecommendationWrapper,
  HomeRecommendationBackground,
  HomeWeeklyWrapper,
};
