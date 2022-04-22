import styled from '@emotion/styled';

const CarouselBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  justify-content: flex-start;
  margin: 0;
  min-width: 300px;
`;

const CarouselContent = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
`;

// TODO: 이미지 태그로 변경할 것
const CarouselContentCard = styled.div`
  margin: 0;
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
  margin: 0;
`;

const CarouselContentTitle = styled.div`
  font-size: 1.6rem;
`;

const CarouselContentAuthor = styled.div`
  margin: 0;
  color: ${(props) => props.theme.colors.grey_400};
  font-size: 1.4rem;
`;

const CarouselContentScoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const CarouselContentScore = styled.div`
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
