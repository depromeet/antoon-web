import { useQuery } from 'react-query';
import { webtoons } from '@apis/queryKeys';
import { getWebtoonsRising } from '@apis/webtoons';
import {
  RisingWrapper,
  RisingCardWrapper,
  RisingCard,
  RisingInformationWrapper,
  RisingScoreChangePercent,
  RisingScoreWrapper,
  RisingTitle,
} from './Rising.style';
import { WebtoonRising } from '@_types/webtoon-type';
import LoadingSpinner from '@components/spinner/LoadingSpinner';
import OnError from '@components/OnError';
import ErrorBoundary from '@components/ErrorBoundary';

function Rising() {
  const { data, isLoading, isError } = useQuery<WebtoonRising>(
    webtoons.rising(),
    getWebtoonsRising,
  );

  if (isLoading) return <LoadingSpinner />;

  if (
    data === undefined ||
    !Array.isArray(data?.webtoons) ||
    data?.webtoons.length === 0 ||
    isError
  )
    return <OnError>상승중인 웹툰을 불러오지 못하고 있어요 😭😭😭</OnError>;

  return (
    <ErrorBoundary message="상승중인 웹툰을 불러오지 못하고 있어요 😭😭😭">
      <RisingWrapper>
        {data?.webtoons.map((webtoon) => (
          <RisingCardWrapper key={webtoon.id} href={`webtoon/${webtoon.id}`}>
            <RisingCard
              alt={webtoon.title}
              src={webtoon.thumbnail}
              width={120}
              height={120}
              layout="fixed"
            />
            <RisingInformationWrapper>
              <RisingTitle>{webtoon.title}</RisingTitle>
            </RisingInformationWrapper>
            <RisingScoreWrapper>
              <RisingScoreChangePercent
                scoreChangedStatus={
                  webtoon.scoreGapPercent > 0
                    ? 'up'
                    : webtoon.scoreGapPercent < 0
                    ? 'down'
                    : 'stable'
                }
              >
                {webtoon.scoreGapPercent > 0 ? '+' : ''}
                {webtoon.scoreGapPercent.toFixed(2)}%
              </RisingScoreChangePercent>
            </RisingScoreWrapper>
          </RisingCardWrapper>
        ))}
      </RisingWrapper>
    </ErrorBoundary>
  );
}

export default Rising;
