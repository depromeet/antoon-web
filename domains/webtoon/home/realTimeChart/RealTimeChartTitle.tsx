import SubTitle from '@components/SubTitle';
import Title from '@components/Title';
import Link from 'next/link';
import {
  HomeRealtimeChartTitleWrapper,
  HomeSectionTitleWithTimeWrapper,
  HomeSectionTitleWithTime,
  HomeWatchAllRanks,
  HomeTimeAndRanksWrapper,
  HomeRanksTitleWrapper,
} from '../Home.style';

type Props = {
  isRankPage?: boolean;
};

function RealTimeChartTitle(props: Props) {
  const { isRankPage } = props;

  const updatedTime = `${new Date().getHours()}:00`;

  return (
    <HomeRealtimeChartTitleWrapper style={{ marginTop: '2rem' }}>
      <SubTitle type="normal">다같이 영차영차!</SubTitle>
      <HomeSectionTitleWithTimeWrapper>
        <HomeRanksTitleWrapper isRankPage={isRankPage}>
          <Title type="normal">실시간 {isRankPage ? 'TOP 30' : '차트'}</Title>
        </HomeRanksTitleWrapper>
        <HomeTimeAndRanksWrapper>
          <HomeSectionTitleWithTime>
            {updatedTime} 기준
          </HomeSectionTitleWithTime>
          {!isRankPage && (
            <Link href="/community/ranks" passHref>
              <HomeWatchAllRanks>전체보기</HomeWatchAllRanks>
            </Link>
          )}
        </HomeTimeAndRanksWrapper>
      </HomeSectionTitleWithTimeWrapper>
    </HomeRealtimeChartTitleWrapper>
  );
}

export default RealTimeChartTitle;
