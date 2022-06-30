import { useEffect } from 'react';
import { Mixpanel } from 'mixpanel';
import Header from '@components/layout/Header/Header';
import TopicCards from '@domains/community/topic/TopicCards';
import {
  HomeRealtimeChartWrapper,
  HomeRecommendationBackground,
  HomeRecommendationWrapper,
} from '@domains/webtoon/home/Home.style';
import RealTimeChartTitle from '@domains/webtoon/home/realTimeChart/RealTimeChartTitle';
import Carousel from '@components/carousel/Carousel';
import RealTimeChart from '@domains/webtoon/home/realTimeChart/RealTimeChart';
import Title from '@components/Title';
import SubTitle from '@components/SubTitle';
import { RecommendationTitleWrapper } from '@domains/community/Community.style';
import AllTopics from '@domains/community/AllTopics';

function Community() {
  useEffect(() => {
    Mixpanel.track('페이지 진입', {
      page: '커뮤니티 페이지',
    });
  }, []);

  return (
    <>
      <Header headerTitle="커뮤니티" headerLeft="없음" headerRight="검색" />
      <HomeRealtimeChartWrapper style={{ paddingTop: '0.8rem' }}>
        <RealTimeChart page="community" />
      </HomeRealtimeChartWrapper>
      <HomeRecommendationWrapper>
        <HomeRecommendationBackground>
          <SubTitle type="normal">어디에 투표할까?</SubTitle>
          <RecommendationTitleWrapper>
            <Title type="normal">개미들의 선택</Title>
          </RecommendationTitleWrapper>
          <TopicCards />
        </HomeRecommendationBackground>
      </HomeRecommendationWrapper>
      <AllTopics />
    </>
  );
}

export default Community;
