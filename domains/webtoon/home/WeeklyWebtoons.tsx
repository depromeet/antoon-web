import { useGetWebtoonsByDay } from '@apis/webtoons';
import deafultImage from '@components/image/default';
import OnError from '@components/OnError';
import ErrorBoundary from '@components/ErrorBoundary';
import { Day } from '@_types/webtoon-type';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import {
  SkeleteonWrapper,
  WeeklyCard,
  WeeklyCardAuthor,
  WeeklyCardContainer,
  WeeklyCardTitle,
  WeeklyCardWrapper,
} from './Weekly.style';

type Props = {
  selectedDay: Day;
};

function WeeklyWebtoons(props: Props) {
  const { selectedDay } = props;

  const {
    data: webtoons,
    isLoading,
    isError,
  } = useGetWebtoonsByDay(selectedDay);

  if ((isError || !Array.isArray(webtoons?.data)) && !isLoading)
    return <OnError>요일별 웹툰을 불러오지 못하고 있어요 😭😭😭</OnError>;

  return (
    <ErrorBoundary message="요일별 웹툰을 불러오지 못하고 있어요 😭😭😭">
      <WeeklyCardContainer>
        {isLoading &&
          Array.from(Array(12), (v, idx) => (
            <SkeleteonWrapper key={idx}>
              <Skeleton height="9.2rem" width="100%" borderRadius="1.2rem" />
              <Skeleton height="1.5rem" />
              <Skeleton height="1.25rem" />
            </SkeleteonWrapper>
          ))}
        {webtoons?.data.map((webtoon) => (
          <WeeklyCardWrapper
            key={webtoon.webtoonId}
            href={`/webtoon/${webtoon.webtoonId}`}
          >
            <WeeklyCard
              alt={webtoon.title}
              src={webtoon.thumbnail || deafultImage}
              placeholder="blur"
              blurDataURL={webtoon.thumbnail || deafultImage}
              width={92}
              height={92}
              layout="fixed"
              objectFit="cover"
            />
            <WeeklyCardTitle>{webtoon.title}</WeeklyCardTitle>
            <WeeklyCardAuthor>{webtoon.writers.join(', ')}</WeeklyCardAuthor>
          </WeeklyCardWrapper>
        ))}
      </WeeklyCardContainer>
    </ErrorBoundary>
  );
}

export default WeeklyWebtoons;
