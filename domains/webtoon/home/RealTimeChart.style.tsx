import styled from '@emotion/styled';
import Image from 'next/image';

const OnError = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  color: ${(props) => props.theme.colors.grayscale.gray_700};
`;

const RealTimeChartContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-auto-flow: column;
  gap: 0 0.8rem;
  padding-right: 1.6rem;
  height: 204px;
`;

const RealTimeChartCardWrapper = styled.a`
  display: flex;
  gap: 1.2rem;
  justify-content: space-between;
  border-radius: 5px;
  padding: 0.8rem 0.8rem 0.8rem 1rem;

  @media (hover: hover) and (pointer: fine) {
    :hover {
      background-color: ${(props) => props.theme.colors.primary.gray_200};
    }
  }
`;

const RealTimeChartCard = styled(Image)`
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.primary.gray_300};
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
  justify-content: center;
`;

type RealTimeChartScoreChangeProps = {
  rankingStatus: string;
};

const RealTimeChartScoreChange = styled.div<RealTimeChartScoreChangeProps>`
  color: ${(props) => {
    switch (props.rankingStatus) {
      case 'up':
        return '#ff4820';
      case 'down':
        return '#1934B5';
      case 'stable':
      default:
        return 'black';
    }
  }};
`;

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
  color: ${(props) => props.theme.colors.grayscale.gray_600};
  font-size: 1.4rem;
`;

const RealTimeChartScoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 48px;
`;

const RealTimeChartScore = styled.div`
  text-align: end;
  font-size: 1.6rem;
  font-weight: 600;
`;

type RealTimeChartScoreChangePercentProps = {
  scoreChangedStatus: string;
};

const RealTimeChartScoreChangePercent = styled.div<RealTimeChartScoreChangePercentProps>`
  border-radius: 5px;
  padding: 0.35rem;
  text-align: end;
  font-size: 1.2rem;

  ${(props) => {
    switch (props.scoreChangedStatus) {
      case 'up':
        return { color: '#ff4820', backgroundColor: '#ff482010' };
      case 'down':
        return { color: '#1934B5', backgroundColor: '#1934B510' };
      case 'stable':
      default:
        return {
          color: props.theme.colors.grayscale.gray_800,
          backgroundColor: '#00000010',
        };
    }
  }};
`;

export {
  OnError,
  RealTimeChartContainer,
  RealTimeChartCardWrapper,
  RealTimeChartCard,
  RealTimeChartRankingWrapper,
  RealTimeChartRanking,
  RealTimeChartScoreChangeWrapper,
  RealTimeChartScoreChange,
  RealTimeChartInformationWrapper,
  RealTimeChartTitle,
  RealTimeChartAuthor,
  RealTimeChartScoreWrapper,
  RealTimeChartScore,
  RealTimeChartScoreChangePercent,
};
