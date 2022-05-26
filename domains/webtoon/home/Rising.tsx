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

function Rising() {
  const { data } = useQuery<WebtoonRising>(
    webtoons.rising(),
    getWebtoonsRising,
  );

  return (
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
  );
}

export default Rising;
