import SubTitle from '@components/SubTitle';
import Title from '@components/Title';
import {
  HomeRealtimeChartTitleWrapper,
  HomeSectionTitleWithTimeWrapper,
  HomeSectionTitleWithTime,
  HomeWatchAllRanks,
  HomeTimeAndRanksWrapper,
  HomeRanksTitleWrapper,
} from '../Home.style';

function RealTimeChartTitle() {
  const updatedTime = `${new Date().getHours()}:00`;

  return (
    <HomeRealtimeChartTitleWrapper>
      <SubTitle type="normal">다같이 영차영차!</SubTitle>
      <HomeSectionTitleWithTimeWrapper>
        <HomeRanksTitleWrapper>
          <Title type="normal">실시간 차트</Title>
        </HomeRanksTitleWrapper>
        <HomeTimeAndRanksWrapper>
          <HomeSectionTitleWithTime>
            {updatedTime} 기준
          </HomeSectionTitleWithTime>
          <HomeWatchAllRanks>전체보기</HomeWatchAllRanks>
        </HomeTimeAndRanksWrapper>
      </HomeSectionTitleWithTimeWrapper>
    </HomeRealtimeChartTitleWrapper>
  );
}

export default RealTimeChartTitle;
