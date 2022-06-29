import React, { useRef } from 'react';
import Carousel from '@components/carousel/Carousel';
import useCarousel from '@hooks/useCarousel';
import {
  HomeContainer,
  HomeTopWrapper,
  HomeRealtimeChartWrapper,
  HomeSectionWrapper,
  HomeSectionSubTitle,
  HomeSectionTitle,
  HomeRecommendationWrapper,
  HomeRecommendationBackground,
  HomeWeeklyWrapper,
} from './Home.style';
import Genres from './Genres';
import Rising from './Rising';
import Weekly from './Weekly';
import SubTitle from '@components/SubTitle';
import { RecommendationTitleWrapper } from '@domains/community/Community.style';
import TopicCards from '@domains/community/topic/TopicCards';
import Title from '@components/Title';
import TopicBanners from './TopicBanners';
import RealTimeChart from './realTimeChart/RealTimeChart';

function Home() {
  const GenresRef = useRef<HTMLDivElement>(null);
  const RisingRef = useRef<HTMLDivElement>(null);
  const RecommendationRef = useRef<HTMLDivElement>(null);

  useCarousel(GenresRef);
  useCarousel(RisingRef);
  useCarousel(RecommendationRef);

  return (
    <HomeContainer>
      <HomeTopWrapper>
        <TopicBanners />
      </HomeTopWrapper>
      <HomeRealtimeChartWrapper>
        <RealTimeChart page="home" />
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
      <HomeSectionWrapper>
        <HomeSectionSubTitle>상한가 버스 탑승!</HomeSectionSubTitle>
        <HomeSectionTitle>상승 중인 툰툰</HomeSectionTitle>
        <Carousel ref={RisingRef}>
          <Rising />
        </Carousel>
      </HomeSectionWrapper>
      <HomeSectionWrapper>
        <HomeSectionSubTitle>어떤 장르가 좋을까?</HomeSectionSubTitle>
        <HomeSectionTitle>장르별 툰툰</HomeSectionTitle>
        <Carousel ref={GenresRef}>
          <Genres />
        </Carousel>
      </HomeSectionWrapper>
      <HomeWeeklyWrapper>
        <HomeSectionSubTitle>개미는 오늘도 줍줍</HomeSectionSubTitle>
        <HomeSectionTitle>요일별 툰툰</HomeSectionTitle>
        <Weekly />
      </HomeWeeklyWrapper>
    </HomeContainer>
  );
}

export default Home;
