import React from 'react';
import {
  RecommendationWrapper,
  CarouselBox,
  InformationWrapper,
  GenreChip,
  Title,
  RideHeadCount,
  WebtoonBox,
} from './Recommendation.style';

function Recommendation() {
  return (
    <RecommendationWrapper>
      <CarouselBox>
        <InformationWrapper>
          <GenreChip>장르</GenreChip>
          <Title>일이삼사 오츄기</Title>
          <RideHeadCount>32,623 개미 탑승 중</RideHeadCount>
        </InformationWrapper>
        <WebtoonBox />
      </CarouselBox>
      <CarouselBox>
        <InformationWrapper>
          <GenreChip>장르</GenreChip>
          <Title>일이삼사 오츄기</Title>
          <RideHeadCount>32,623 개미 탑승 중</RideHeadCount>
        </InformationWrapper>
        <WebtoonBox />
      </CarouselBox>
      <CarouselBox>
        <InformationWrapper>
          <GenreChip>장르</GenreChip>
          <Title>일이삼사 오츄기</Title>
          <RideHeadCount>32,623 개미 탑승 중</RideHeadCount>
        </InformationWrapper>
        <WebtoonBox />
      </CarouselBox>
    </RecommendationWrapper>
  );
}

export default Recommendation;
