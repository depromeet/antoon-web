import {
  DefaultLayout,
  DefaultHeader,
  HomeContainer,
  HomeTopWrapper,
  HomeTopTitleWrapper,
  HomeTopTitle,
  ContentWrapper,
  ContentSubTitle,
  ContentTitle,
  CarouselWrapper,
  CarouselBox,
  CarouselContent,
  CarouselContentCard,
  CarouselContentRanking,
  CarouselContentTitle,
  CarouselContentScore,
  CarouselContentScoreChangeIcon,
  CarouselContentScoreChange,
  CarouselContentAuthor,
  CarouselContentScoreChangePercentWrapper,
  CarouselContentScoreChangePercent,
} from './Home.style';

const Home = () => {
  return (
    <>
      <DefaultLayout>
        <DefaultHeader>툰툰 공통 헤더</DefaultHeader>
        <HomeContainer>
          <HomeTopWrapper>
            <HomeTopTitleWrapper>
              <HomeTopTitle>개미는 오늘도 열심히 툰툰을 보네</HomeTopTitle>
            </HomeTopTitleWrapper>
            <ContentWrapper>
              <ContentSubTitle>14:00</ContentSubTitle>
              <ContentTitle>실시간 차트</ContentTitle>
            </ContentWrapper>
          </HomeTopWrapper>
          <ContentWrapper>
            <ContentSubTitle>어떤 장르를 좋아하시나요?</ContentSubTitle>
            <ContentTitle>장르별 툰툰</ContentTitle>
          </ContentWrapper>
          <ContentWrapper>
            <ContentSubTitle>언제나 툰툰</ContentSubTitle>
            <ContentTitle>개미들이 즐겨봐요</ContentTitle>
          </ContentWrapper>
          <ContentWrapper>
            <ContentSubTitle>나만의 툰툰</ContentSubTitle>
            <ContentTitle>비슷한 취향이 자주 보는 웹툰</ContentTitle>
          </ContentWrapper>
          <ContentWrapper>
            <ContentSubTitle>요일별 웹툰을 추천해요</ContentSubTitle>
            <ContentTitle>오늘도 툰툰</ContentTitle>
          </ContentWrapper>
        </HomeContainer>
      </DefaultLayout>
    </>
  );
};

export default Home;
