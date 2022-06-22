import { useEffect, useRef } from 'react';
import { Mixpanel } from 'mixpanel';
import Header from '@components/layout/Header/Header';
import TopicCards from '@domains/community/topic/TopicCards';
import {
  HomeRealtimeChartWrapper,
  HomeRecommendationBackground,
  HomeRecommendationWrapper,
  HomeSectionWrapper,
} from '@domains/webtoon/home/Home.style';
import RealTimeChartTitle from '@domains/webtoon/home/realTimeChart/RealTimeChartTitle';
import Carousel from '@components/carousel/Carousel';
import RealTimeChart from '@domains/webtoon/home/realTimeChart/RealTimeChart';
import Title from '@components/Title';
import SubTitle from '@components/SubTitle';

function Community() {
  const RealTimeChartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    Mixpanel.track('페이지 진입', {
      page: '커뮤니티 페이지',
    });
  }, []);

  return (
    <div>
      <Header title="커뮤니티" rightBtn="profile" />

      <HomeRealtimeChartWrapper>
        <RealTimeChartTitle />
        <Carousel ref={RealTimeChartRef}>
          <RealTimeChart />
        </Carousel>
      </HomeRealtimeChartWrapper>
      <HomeRecommendationWrapper>
        <HomeRecommendationBackground>
          <SubTitle type="normal">어디에 투표할까?</SubTitle>
          <div style={{ paddingTop: '0.6rem', paddingBottom: '1.4rem' }}>
            <Title type="normal">개미들의 선택</Title>
          </div>
          <TopicCards />
        </HomeRecommendationBackground>
      </HomeRecommendationWrapper>
      <section>
        <div
          style={{
            paddingTop: '0.6rem',
            paddingBottom: '1.4rem',
            marginRight: '2.4rem',
          }}
        >
          <Title type="normal">모든 토픽</Title>
        </div>
      </section>
    </div>
  );
}

export default Community;
