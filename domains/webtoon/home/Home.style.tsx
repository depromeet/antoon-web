import styled from '@emotion/styled';

const HomeContainer = styled.main``;

const HomeTopWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  padding-top: 0.8rem;
  overflow-x: clip;
`;

const HomeTopTitleWrapper = styled.div`
  display: inline-block;
  align-items: flex-start;
  padding-top: 0.8rem;
  width: 100%;
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

const HomeBannerContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  margin-top: 1.2rem;
`;

const HomeBannerWrapper = styled.div`
  position: absolute;
  bottom: 2.4rem;
  left: 50%;
  transform: translate(-50%, 0);
`;

const HomeRealtimeChartWrapper = styled.section`
  margin-right: -2.4rem;
  margin-left: -0.8rem;
  padding-top: 3rem;
`;

const HomeRealtimeChartTitleWrapper = styled.section`
  padding-left: 0.8rem;
`;

const HomeSectionWrapper = styled.section`
  margin-right: -2.4rem;
  padding-top: 3rem;
`;

const HomeSectionSubTitle = styled.small`
  color: ${(props) => props.theme.colors.grayscale.gray_600};
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
  color: ${(props) => props.theme.colors.grayscale.gray_500};
  font-size: 1.2rem;
`;

const HomeRecommendationWrapper = styled.section`
  margin: 0 -2.4rem;
  padding: 2.4rem 0 0.2rem;
`;

const HomeRecommendationBackground = styled.div`
  background-color: #f5f7fa;
  padding: 3rem 2.4rem;
  padding-right: 0;
`;

const HomeWeeklyWrapper = styled.section`
  padding-top: 3.2rem;
`;

export {
  HomeContainer,
  HomeTopWrapper,
  HomeRealtimeChartWrapper,
  HomeRealtimeChartTitleWrapper,
  HomeTopTitleWrapper,
  HomeTopSubTitle,
  HomeTopTitle,
  HomeBannerContainer,
  HomeBannerWrapper,
  HomeSectionWrapper,
  HomeSectionSubTitle,
  HomeSectionTitleWithTimeWrapper,
  HomeSectionTitle,
  HomeSectionTitleWithTime,
  HomeRecommendationWrapper,
  HomeRecommendationBackground,
  HomeWeeklyWrapper,
};
