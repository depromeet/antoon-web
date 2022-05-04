import { webtoons } from './webtoons.mock';
import {
  PopularWrapper,
  PopularCardWrapper,
  PopularCard,
  PopularInformationWrapper,
  PopularScoreChangePercent,
  PopularScoreWrapper,
  PopularTitle,
} from './Popular.style';

function Popular() {
  return (
    <PopularWrapper>
      {webtoons.map((webtoon) => (
        <PopularCardWrapper key={webtoon.id} href={`webtoon/${webtoon.id}`}>
          <PopularCard
            alt={webtoon.title}
            src={webtoon.imageUrl}
            width={120}
            height={120}
            layout="fixed"
          />
          <PopularInformationWrapper>
            <PopularTitle>{webtoon.title}</PopularTitle>
          </PopularInformationWrapper>
          <PopularScoreWrapper>
            <PopularScoreChangePercent
              scoreChangedStatus={webtoon.scoreChangedStatus}
            >
              {webtoon.scoreChangedStatus === 'up'
                ? '+'
                : webtoon.scoreChangedStatus === 'down'
                ? '-'
                : ''}
              {webtoon.scoreChangedPercent.toFixed(2)}%
            </PopularScoreChangePercent>
          </PopularScoreWrapper>
        </PopularCardWrapper>
      ))}
    </PopularWrapper>
  );
}

export default Popular;
