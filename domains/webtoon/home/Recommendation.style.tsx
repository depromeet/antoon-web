import styled from '@emotion/styled';

const RecommendationWrapper = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-right: 2.4rem;
`;

const CarouselBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: row;
  border-radius: 2rem;
  background-color: ${(props) => props.theme.colors.basic.white};
  padding: 2rem;
  width: 31.2rem;
  height: 12rem;
`;

const InformationWrapper = styled.div``;

const GenreChip = styled.div`
  display: flex;
  align-items: center;
  border-radius: 4rem;
  background-color: ${(props) => props.theme.colors.grayscale.gray_1000};
  padding: 0.8rem;
  width: fit-content;
  height: 2rem;
  color: ${(props) => props.theme.colors.basic.white};
`;

const Title = styled.div`
  margin-right: 2.4rem;
  padding-top: 1.8rem;
  width: 16.8rem;
  color: ${(props) => props.theme.colors.grayscale.gray_1000};
  font-size: 1.6rem;
  font-weight: bold;
`;

const RideHeadCount = styled.div`
  padding-top: 0.6rem;
  color: ${(props) => props.theme.colors.grayscale.gray_700};
  font-size: 1.2rem;
`;

const WebtoonBox = styled.div`
  border-radius: 0.8rem;
  background-color: ${(props) => props.theme.colors.grayscale.gray_300};
  width: 8rem;
  height: 8rem;
`;

export {
  RecommendationWrapper,
  CarouselBox,
  InformationWrapper,
  GenreChip,
  Title,
  RideHeadCount,
  WebtoonBox,
};
