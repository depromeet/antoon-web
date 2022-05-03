import { webtoons } from './webtoons.mock';
import {
  RealTimeChartContainer,
  RealTimeChartCardWrapper,
  RealTimeChartCard,
  RealTimeChartRankingWrapper,
  RealTimeChartRanking,
  RealTimeChartScoreChangeWrapper,
  RealTimeChartScoreChangeIcon,
  RealTimeChartScoreChange,
  RealTimeChartInformationWrapper,
  RealTimeChartTitle,
  RealTimeChartAuthor,
  RealTimeChartScoreWrapper,
  RealTimeChartScore,
  RealTimeChartScoreChangePercent,
} from './RealTimeChart.style';

function RealTimeChart() {
  return (
    <RealTimeChartContainer>
      {webtoons.map((webtoon) => (
        <RealTimeChartCardWrapper key={webtoon.id}>
          <RealTimeChartCard />
          <RealTimeChartRankingWrapper>
            <RealTimeChartRanking>{webtoon.ranking}</RealTimeChartRanking>
            <RealTimeChartScoreChangeWrapper>
              <RealTimeChartScoreChangeIcon>▲</RealTimeChartScoreChangeIcon>
              <RealTimeChartScoreChange>-</RealTimeChartScoreChange>
            </RealTimeChartScoreChangeWrapper>
          </RealTimeChartRankingWrapper>
          <RealTimeChartInformationWrapper>
            <RealTimeChartTitle>{webtoon.title}</RealTimeChartTitle>
            <RealTimeChartAuthor>{webtoon.author}</RealTimeChartAuthor>
          </RealTimeChartInformationWrapper>
          <RealTimeChartScoreWrapper>
            <RealTimeChartScore>{webtoon.score}</RealTimeChartScore>
            <RealTimeChartScoreChangePercent>
              + {webtoon.scoreChangedPercent}%
            </RealTimeChartScoreChangePercent>
          </RealTimeChartScoreWrapper>
        </RealTimeChartCardWrapper>
      ))}
    </RealTimeChartContainer>
  );
}

export default RealTimeChart;
