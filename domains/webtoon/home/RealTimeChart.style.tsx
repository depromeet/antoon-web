import styled from '@emotion/styled';

const RealTimeChartContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  height: 204px;

  > :not(:nth-child(3n)) {
    padding-bottom: 2.4rem;
  }
`;

const RealTimeChartCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.2rem;
  padding-right: 2.4rem;
`;

// TODO: 이미지 태그로 변경할 것
const RealTimeChartCard = styled.div`
  border-radius: 10px;
  background-color: ${(props) => props.theme.bg_color.primary};
  width: 52px;
  height: 52px;
`;

const RealTimeChartRankingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const RealTimeChartRanking = styled.div`
  font-size: 2rem;
  font-weight: 800;
`;

const RealTimeChartScoreChangeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.2rem;
  align-items: center;
  color: #ff4820;
`;

// TODO: 아이콘으로 변경할 것
const RealTimeChartScoreChangeIcon = styled.div``;

const RealTimeChartScoreChange = styled.div``;

const RealTimeChartInformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 135px;
`;

const RealTimeChartTitle = styled.div`
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1.6rem;
`;

const RealTimeChartAuthor = styled.div`
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${(props) => props.theme.colors.grey_400};
  font-size: 1.4rem;
`;

const RealTimeChartScoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const RealTimeChartScore = styled.div`
  text-align: end;
  font-size: 1.6rem;
  font-weight: 600;
`;

const RealTimeChartScoreChangePercent = styled.div`
  border-radius: 5px;
  background-color: #ff482010;
  padding: 0.35rem;
  color: #ff4820;
  font-size: 1.2rem;
`;

export {
  RealTimeChartContainer,
  RealTimeChartCardWrapper,
  RealTimeChartCard,
  RealTimeChartRankingWrapper,
  RealTimeChartRanking,
  RealTimeChartScoreChangeWrapper,
  RealTimeChartScoreChangeIcon,
  RealTimeChartScoreChange,
  RealTimeChartInformationWrapper,
  RealTimeChartTitle,
  RealTimeChartAuthor,
  RealTimeChartScoreWrapper,
  RealTimeChartScore,
  RealTimeChartScoreChangePercent,
};
