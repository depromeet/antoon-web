import SubTitle from '@components/SubTitle';
import Title from '@components/Title';
import {
  HomeRealtimeChartTitleWrapper,
  HomeSectionTitleWithTimeWrapper,
  HomeSectionTitleWithTime,
} from '../Home.style';

function RealTimeChartTitle() {
  const updatedTime = `${new Date().getHours()}:00`;

  return (
    <HomeRealtimeChartTitleWrapper>
      <SubTitle type="normal">다같이 영차영차!</SubTitle>
      <HomeSectionTitleWithTimeWrapper>
        <Title type="normal">실시간 차트</Title>
        <HomeSectionTitleWithTime>{updatedTime} 기준</HomeSectionTitleWithTime>
      </HomeSectionTitleWithTimeWrapper>
    </HomeRealtimeChartTitleWrapper>
  );
}

export default RealTimeChartTitle;
