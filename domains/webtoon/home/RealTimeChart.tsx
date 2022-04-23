import {
  RealTimeChartBoxContainer,
  CarouselContent,
  CarouselContentCard,
  CarouselContentRankingWrapper,
  CarouselContentRanking,
  CarouselContentScoreChangeWrapper,
  CarouselContentScoreChangeIcon,
  CarouselContentScoreChange,
  CarouselContentInformationWrapper,
  CarouselContentTitle,
  CarouselContentAuthor,
  CarouselContentScoreWrapper,
  CarouselContentScore,
  CarouselContentScoreChangePercent,
  CarouselBox,
} from './RealTimeChart.style';

function RealTimeChartContent() {
  return (
    <CarouselContent>
      <CarouselContentCard />
      <CarouselContentRankingWrapper>
        <CarouselContentRanking>1</CarouselContentRanking>
        <CarouselContentScoreChangeWrapper>
          <CarouselContentScoreChangeIcon>▲</CarouselContentScoreChangeIcon>
          <CarouselContentScoreChange>-</CarouselContentScoreChange>
        </CarouselContentScoreChangeWrapper>
      </CarouselContentRankingWrapper>
      <CarouselContentInformationWrapper>
        <CarouselContentTitle>독립일기</CarouselContentTitle>
        <CarouselContentAuthor>자까</CarouselContentAuthor>
      </CarouselContentInformationWrapper>
      <CarouselContentScoreWrapper>
        <CarouselContentScore>9.89</CarouselContentScore>
        <CarouselContentScoreChangePercent>
          + 1.54%
        </CarouselContentScoreChangePercent>
      </CarouselContentScoreWrapper>
    </CarouselContent>
  );
}

function RealTimeChartBox() {
  return (
    <CarouselBox>
      <RealTimeChartContent />
      <RealTimeChartContent />
      <RealTimeChartContent />
    </CarouselBox>
  );
}

function RealTimeChart() {
  return (
    <RealTimeChartBoxContainer>
      <RealTimeChartBox />
      <RealTimeChartBox />
      <RealTimeChartBox />
      <RealTimeChartBox />
      <RealTimeChartBox />
    </RealTimeChartBoxContainer>
  );
}

export default RealTimeChart;
