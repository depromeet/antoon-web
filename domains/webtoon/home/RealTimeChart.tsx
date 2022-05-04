import { webtoons } from './webtoons.mock';
import {
  RealTimeChartContainer,
  RealTimeChartCardWrapper,
  RealTimeChartCard,
  RealTimeChartRankingWrapper,
  RealTimeChartRanking,
  RealTimeChartScoreChangeWrapper,
  RealTimeChartScoreChange,
  RealTimeChartInformationWrapper,
  RealTimeChartTitle,
  RealTimeChartAuthor,
  RealTimeChartScoreWrapper,
  RealTimeChartScore,
  RealTimeChartScoreChangePercent,
} from './RealTimeChart.style';
import { default as RealTimeChartScoreChangeIcon } from '@assets/icons/ScoreChangeIcon';

function RealTimeChart() {
  return (
    <RealTimeChartContainer>
      {webtoons.map((webtoon) => (
        <RealTimeChartCardWrapper
          key={webtoon.id}
          href={`webtoon/${webtoon.id}`}
        >
          <RealTimeChartCard
            alt={webtoon.title}
            src={webtoon.imageUrl}
            width={52}
            height={52}
            layout="fixed"
          />
          <RealTimeChartRankingWrapper>
            <RealTimeChartRanking>{webtoon.ranking}</RealTimeChartRanking>
            <RealTimeChartScoreChangeWrapper>
              <RealTimeChartScoreChangeIcon
                rankingStatus={webtoon.rankingStatus}
              />
              <RealTimeChartScoreChange rankingStatus={webtoon.rankingStatus}>
                {webtoon.rankingChanged === 0 ? '-' : webtoon.rankingChanged}
              </RealTimeChartScoreChange>
            </RealTimeChartScoreChangeWrapper>
          </RealTimeChartRankingWrapper>
          <RealTimeChartInformationWrapper>
            <RealTimeChartTitle>{webtoon.title}</RealTimeChartTitle>
            <RealTimeChartAuthor>{webtoon.author}</RealTimeChartAuthor>
          </RealTimeChartInformationWrapper>
          <RealTimeChartScoreWrapper>
            <RealTimeChartScore>{webtoon.score}</RealTimeChartScore>
            <RealTimeChartScoreChangePercent
              scoreChangedStatus={webtoon.scoreChangedStatus}
            >
              {webtoon.scoreChangedStatus === 'up'
                ? '+'
                : webtoon.scoreChangedStatus === 'down'
                ? '-'
                : ''}
              {webtoon.scoreChangedPercent.toFixed(2)}%
            </RealTimeChartScoreChangePercent>
          </RealTimeChartScoreWrapper>
        </RealTimeChartCardWrapper>
      ))}
    </RealTimeChartContainer>
  );
}

export default RealTimeChart;
