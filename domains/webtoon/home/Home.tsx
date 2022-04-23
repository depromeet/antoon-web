import Carousel from '@components/carousel/Carousel';
import useCarousel from '@hooks/useCarousel';
import React, { useRef } from 'react';
import {
  HomeContainer,
  HomeTopWrapper,
  HomeTopTitleWrapper,
  HomeTopTitle,
  HomeSectionWrapper,
  HomeSectionTitle,
  HomeSectionSubTitle,
} from './Home.style';
import RealTimeChart from './RealTimeChart';
import Genres from './Genres';
import Popular from './Popular';
import Recommendation from './Recommendation';
import Weekly from './Weekly';

function Home() {
  const RealTimeChartRef = useRef<HTMLDivElement>(null);
  const GenresRef = useRef<HTMLDivElement>(null);
  const PopularRef = useRef<HTMLDivElement>(null);
  const RecommendationRef = useRef<HTMLDivElement>(null);

  useCarousel(RealTimeChartRef);
  useCarousel(GenresRef);
  useCarousel(PopularRef);
  useCarousel(RecommendationRef);

  return (
    <>
      <HomeContainer>
        <HomeTopWrapper>
          <HomeTopTitleWrapper>
            <HomeTopTitle>개미는 오늘도 열심히 툰툰을 보네</HomeTopTitle>
          </HomeTopTitleWrapper>
          <HomeSectionWrapper>
            <HomeSectionSubTitle>14:00</HomeSectionSubTitle>
            <HomeSectionTitle>실시간 차트</HomeSectionTitle>
            <Carousel ref={RealTimeChartRef}>
              <RealTimeChart />
            </Carousel>
          </HomeSectionWrapper>
        </HomeTopWrapper>
        <HomeSectionWrapper>
          <HomeSectionSubTitle>어떤 장르를 좋아하시나요?</HomeSectionSubTitle>
          <HomeSectionTitle>장르별 툰툰</HomeSectionTitle>
          <Carousel ref={GenresRef}>
            <Genres />
          </Carousel>
        </HomeSectionWrapper>
        <HomeSectionWrapper>
          <HomeSectionSubTitle>언제나 툰툰</HomeSectionSubTitle>
          <HomeSectionTitle>개미들이 즐겨봐요</HomeSectionTitle>
          <Carousel ref={PopularRef}>
            <Popular />
          </Carousel>
        </HomeSectionWrapper>
        <HomeSectionWrapper>
          <HomeSectionSubTitle>나만의 툰툰</HomeSectionSubTitle>
          <HomeSectionTitle>비슷한 취향이 자주 보는 웹툰</HomeSectionTitle>
          <Carousel ref={RecommendationRef}>
            <Recommendation />
          </Carousel>
        </HomeSectionWrapper>
        <HomeSectionWrapper>
          <HomeSectionSubTitle>요일별 웹툰을 추천해요</HomeSectionSubTitle>
          <HomeSectionTitle>오늘도 툰툰</HomeSectionTitle>
          <Weekly />
        </HomeSectionWrapper>
      </HomeContainer>
    </>
  );
}

export default Home;
