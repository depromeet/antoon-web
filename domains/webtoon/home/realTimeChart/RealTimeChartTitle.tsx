import {
  HomeRealtimeChartTitleWrapper,
  HomeSectionSubTitle,
  HomeSectionTitleWithTimeWrapper,
  HomeSectionTitle,
  HomeSectionTitleWithTime,
} from '../Home.style';

function RealTimeChartTitle() {
  const updatedTime = `${new Date().getHours()}:00`;

  return (
    <HomeRealtimeChartTitleWrapper>
      <HomeSectionSubTitle>다같이 영차영차!</HomeSectionSubTitle>
      <HomeSectionTitleWithTimeWrapper>
        <HomeSectionTitle>실시간 차트</HomeSectionTitle>
        <HomeSectionTitleWithTime>{updatedTime} 기준</HomeSectionTitleWithTime>
      </HomeSectionTitleWithTimeWrapper>
    </HomeRealtimeChartTitleWrapper>
  );
}

export default RealTimeChartTitle;
