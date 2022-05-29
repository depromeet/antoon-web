import { webtoons } from '@apis/queryKeys';
import { getWebtoonsRecommendation } from '@apis/webtoons';
import ErrorBoundary from '@components/ErrorBoundary';
import OnError from '@components/OnError';
import { WebtoonRecommendation } from '@_types/webtoon-type';
import React from 'react';
import { useQuery } from 'react-query';
import {
  RecommendationWrapper,
  CarouselBox,
  InformationWrapper,
  GenreChip,
  Title,
  RideHeadCount,
  Thumbnail,
} from './Recommendation.style';

function Recommendation() {
  const { data, isError } = useQuery<WebtoonRecommendation>(
    webtoons.recommendation(),
    getWebtoonsRecommendation,
  );

  if (data === undefined || isError)
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
