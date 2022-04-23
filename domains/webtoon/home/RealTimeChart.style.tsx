import styled from '@emotion/styled';

const RealTimeChartBoxContainer = styled.div`
  display: flex;
  gap: 2.4rem;
`;

const CarouselBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  justify-content: flex-start;
  width: 296px;
`;

const CarouselContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.2rem;

  > :last-child {
    margin-left: auto;
  }
`;

// TODO: 이미지 태그로 변경할 것
const CarouselContentCard = styled.div`
  border-radius: 10px;
  background-color: ${(props) => props.theme.bg_color.primary};
  width: 52px;
  height: 52px;
`;

const CarouselContentRankingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const CarouselContentRanking = styled.div`
  font-size: 2rem;
  font-weight: 800;
`;

const CarouselContentScoreChangeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.2rem;
  align-items: center;
  color: #ff4820;
`;

// TODO: 아이콘으로 변경할 것
const CarouselContentScoreChangeIcon = styled.div``;

const CarouselContentScoreChange = styled.div``;

const CarouselContentInformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const CarouselContentTitle = styled.div`
  font-size: 1.6rem;
`;

const CarouselContentAuthor = styled.div`
  color: ${(props) => props.theme.colors.grey_400};
  font-size: 1.4rem;
`;

const CarouselContentScoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const CarouselContentScore = styled.div`
  text-align: end;
  font-size: 1.6rem;
  font-weight: 600;
`;

const CarouselContentScoreChangePercent = styled.div`
  border-radius: 5px;
  background-color: #ff482010;
  padding: 0.35rem;
  color: #ff4820;
  font-size: 1.2rem;
`;

export {
  RealTimeChartBoxContainer,
  CarouselBox,
  CarouselContent,
  CarouselContentCard,
  CarouselContentRankingWrapper,
  CarouselContentRanking,
  CarouselContentScoreChangeWrapper,
  CarouselContentScoreChangeIcon,
  CarouselContentScoreChange,
  CarouselContentInformationWrapper,
  CarouselContentTitle,
  CarouselContentAuthor,
  CarouselContentScoreWrapper,
  CarouselContentScore,
  CarouselContentScoreChangePercent,
};
