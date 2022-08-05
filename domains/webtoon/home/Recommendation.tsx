import { useQuery } from 'react-query';
import { webtoons } from '@apis/queryKeys';
import { getWebtoonsRecommendation } from '@apis/webtoons';
import { WebtoonRecommendation } from '@_types/webtoon-type';
import ErrorBoundary from '@components/ErrorBoundary';
import OnError from '@components/OnError';
import {
  RecommendationWrapper,
  CarouselBox,
  InformationWrapper,
  GenreChip,
  Title,
  RideHeadCount,
  Thumbnail,
} from './Recommendation.style';
import LoadingSpinner from '@components/spinner/LoadingSpinner';

function Recommendation() {
  const { data, isLoading, isError } = useQuery<WebtoonRecommendation>(
    webtoons.recommendation(),
    getWebtoonsRecommendation,
  );

  if (isLoading) return <LoadingSpinner />;

  if (
    data === undefined ||
    !Array.isArray(data?.webtoons) ||
    data?.webtoons?.length === 0 ||
    isError
  )
    return <OnError>연령별 웹툰을 불러오지 못하고 있어요 😭😭😭</OnError>;

  return (
    <ErrorBoundary message="연령별 웹툰을 불러오지 못하고 있어요 😭😭😭">
      <RecommendationWrapper>
        {data?.webtoons.map((webtoon) => (
          <CarouselBox key={webtoon.webtoonId}>
            <InformationWrapper>
              <GenreChip>
                {webtoon.genres
                  .map((genre) => genre.genreCategoryDescription)
                  .join('/')}
              </GenreChip>
              <Title>{webtoon.title}</Title>
              <RideHeadCount>
                {webtoon.joinCount || 0} 개미 탑승 중
              </RideHeadCount>
            </InformationWrapper>
            <Thumbnail
              src={webtoon.thumbnail}
              width={80}
              height={80}
              objectFit="cover"
            />
          </CarouselBox>
        ))}
      </RecommendationWrapper>
    </ErrorBoundary>
  );
}

export default Recommendation;
