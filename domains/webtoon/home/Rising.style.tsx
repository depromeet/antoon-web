import styled from '@emotion/styled';
import Image from 'next/image';

const RisingWrapper = styled.div`
  display: flex;
  gap: 0.4rem;
  margin-right: 2.4rem;
`;

const RisingCardWrapper = styled.a`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  justify-content: space-between;
  border-radius: 5px;
  padding: 0.4rem;
  width: 128px;

  @media (hover: hover) and (pointer: fine) {
    :hover {
      background-color: ${(props) => props.theme.colors.primary.gray_200};
    }
  }
`;

const RisingCard = styled(Image)`
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.primary.gray_300};
  width: 120px;
  height: 120px;
`;

const RisingInformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 135px;
`;

const RisingTitle = styled.div`
  width: 125px;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1.6rem;
`;

const RisingScoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 48px;
`;

type RisingScoreChangePercentProps = {
  scoreChangedStatus: string;
};

const RisingScoreChangePercent = styled.div<RisingScoreChangePercentProps>`
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
  RisingWrapper,
  RisingCardWrapper,
  RisingCard,
  RisingInformationWrapper,
  RisingTitle,
  RisingScoreWrapper,
  RisingScoreChangePercent,
};
