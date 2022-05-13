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
import { useGetWebtoonsRanks } from '@apis/webtoons';
import { useEffect, useState } from 'react';

function RealTimeChart() {
  const { data } = useGetWebtoonsRanks();

  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  return (
    <RealTimeChartContainer>
      {data?.webtoons.map((webtoon) => {
        const minus = Math.round(Math.random()) ? 1 : -1;
        const rankChanged = Math.trunc(Math.random() * 5) * minus;
        const scoreChanged = (
          ((Math.random() * 12 * 100) / 100) *
          minus
        ).toFixed(2);

        return (
          <RealTimeChartCardWrapper
            key={webtoon.id}
            href={`webtoon/${webtoon.id}`}
          >
            <RealTimeChartCard
              alt={webtoon.title}
              src={webtoon.thumbnail}
              width={52}
              height={52}
              layout="fixed"
            />
            <RealTimeChartRankingWrapper>
              <RealTimeChartRanking>{webtoon.rank}</RealTimeChartRanking>
              <RealTimeChartScoreChangeWrapper>
                <RealTimeChartScoreChangeIcon
                  /* TODO: set data form api | temporary handle from const data that not be offered from api  */
                  rankingStatus={
                    rankChanged > 0 ? 'up' : rankChanged < 0 ? 'down' : 'stable'
                  }
                />

                <RealTimeChartScoreChange
                  /* TODO: set data form api | temporary handle from const data that not be offered from api */
                  // rankingStatus={'stable'}
                  rankingStatus={
                    rankChanged > 0 ? 'up' : rankChanged < 0 ? 'down' : 'stable'
                  }
                >
                  {/* /* TODO: set data form api | temporary handle from const data that not be offered from api */}
                  {/* {webtoon.rankingChanged === 0 ? '-' : webtoon.rankingChanged} */}
                  {!isSSR && (rankChanged === 0 ? '-' : Math.abs(rankChanged))}
                </RealTimeChartScoreChange>
              </RealTimeChartScoreChangeWrapper>
            </RealTimeChartRankingWrapper>
            <RealTimeChartInformationWrapper>
              <RealTimeChartTitle>{webtoon.title}</RealTimeChartTitle>
              <RealTimeChartAuthor>
                {/* // TODO: do webtoon.writers.join(" | ") | in now the data isn't united */}
                {webtoon.writers}
              </RealTimeChartAuthor>
            </RealTimeChartInformationWrapper>
            <RealTimeChartScoreWrapper>
              <RealTimeChartScore>{webtoon.score}</RealTimeChartScore>
              <RealTimeChartScoreChangePercent
                /* TODO: set data form api | temporary handle from const data that not be offered from api */
                scoreChangedStatus={
                  Number(scoreChanged) > 0
                    ? 'up'
                    : Number(scoreChanged) < 0
                    ? 'down'
                    : 'stable'
                }
              >
                {!isSSR && Number(scoreChanged) > 0 ? '+' : ''}
                {/* /* TODO: set data form api | temporary handle from const data that not be offered from api */}
                {/* {webtoon.scoreChangedPercent.toFixed(2)}% */}
                {!isSSR && scoreChanged}%
              </RealTimeChartScoreChangePercent>
            </RealTimeChartScoreWrapper>
          </RealTimeChartCardWrapper>
        );
      })}
    </RealTimeChartContainer>
  );
}

export default RealTimeChart;
