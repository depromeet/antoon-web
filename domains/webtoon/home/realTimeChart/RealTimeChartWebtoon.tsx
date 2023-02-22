import { useEffect, useState } from 'react';
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
  RealTimeChartScoreUnit,
} from './RealTimeChartWebtoon.style';
import { default as RealTimeChartScoreChangeIcon } from '@assets/icons/ScoreChangeIcon';
import { useGetWebtoonsRanks } from '@apis/webtoons';
import OnError from '@components/OnError';
import ErrorBoundary from '@components/ErrorBoundary';
import LoadingSpinner from '@components/spinner/LoadingSpinner';

function RealTimeChart() {
  const { data, isLoading, isError } = useGetWebtoonsRanks();

  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (isLoading) return <LoadingSpinner height={204} />;

  if (
    data === undefined ||
    !Array.isArray(data?.webtoons) ||
    data?.webtoons?.length === 0 ||
    isError
  )
    return <OnError>랭킹을 불러오지 못하고 있어요 😭😭😭</OnError>;

  return (
    <ErrorBoundary message="랭킹을 불러오지 못하고 있어요 😭😭😭">
      <RealTimeChartContainer>
        {data?.webtoons.map((webtoon) => {
          const rankChanged = 0;

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
                      rankChanged > 0
                        ? 'up'
                        : rankChanged < 0
                        ? 'down'
                        : 'stable'
                    }
                  />

                  <RealTimeChartScoreChange
                    /* TODO: set data form api | temporary handle from const data that not be offered from api */
                    // rankingStatus={'stable'}
                    rankingStatus={
                      rankChanged > 0
                        ? 'up'
                        : rankChanged < 0
                        ? 'down'
                        : 'stable'
                    }
                  >
                    {/* /* TODO: set data form api | temporary handle from const data that not be offered from api */}
                    {/* {webtoon.rankingChanged === 0 ? '-' : webtoon.rankingChanged} */}
                    {!isSSR && (rankChanged === 0 ? '-' : rankChanged)}
                  </RealTimeChartScoreChange>
                </RealTimeChartScoreChangeWrapper>
              </RealTimeChartRankingWrapper>
              <RealTimeChartInformationWrapper>
                <RealTimeChartTitle>{webtoon.title}</RealTimeChartTitle>
                <RealTimeChartAuthor>
                  {webtoon.writers.map((writer) => writer.name).join(', ')}
                </RealTimeChartAuthor>
              </RealTimeChartInformationWrapper>
              <RealTimeChartScoreWrapper>
                <RealTimeChartScore>
                  {webtoon.score}
                  <RealTimeChartScoreUnit>ANT</RealTimeChartScoreUnit>
                </RealTimeChartScore>
                <RealTimeChartScoreChangePercent
                  /* TODO: set data form api | temporary handle from const data that not be offered from api */
                  scoreChangedStatus={
                    webtoon.gapPercent > 0
                      ? 'up'
                      : webtoon.gapPercent < 0
                      ? 'down'
                      : 'stable'
                  }
                >
                  {!isSSR && webtoon.gapPercent > 0 ? '+' : ''}
                  {/* /* TODO: set data form api | temporary handle from const data that not be offered from api */}
                  {/* {webtoon.scoreChangedPercent.toFixed(2)}% */}
                  {!isSSR && webtoon.gapPercent}%
                </RealTimeChartScoreChangePercent>
              </RealTimeChartScoreWrapper>
            </RealTimeChartCardWrapper>
          );
        })}
      </RealTimeChartContainer>
    </ErrorBoundary>
  );
}

export default RealTimeChart;
