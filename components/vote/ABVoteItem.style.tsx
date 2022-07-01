import styled from '@emotion/styled';

const ABVoteItemWrapper = styled.div<{ isWinner: boolean }>`
  position: relative;
  margin-top: 20px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.grayscale.gray_200};
  width: 100%;
  height: 100%;
`;

const ABVoteFilter = styled.div<{
  isEnd: boolean;
  isWinner: boolean;
  dataWidth: number;
}>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0.5;
  z-index: 2;
  border-radius: ${(props) =>
    props.isEnd && props.dataWidth >= 90
      ? '20px 20px 0 0'
      : props.isEnd
      ? '20px 0 0 0'
      : '20px'};
  background-color: ${(props) => props.theme.colors.chart.point_up_100};
  cursor: pointer;
  width: ${(props) => props.dataWidth}%;
  min-width: 4%;
  height: ${(props) => (props.isEnd ? '160px' : '100%;')};
  text-align: center;
  -webkit-tap-highlight-color: transparent;
`;

const ABVoteWinnerMark = styled.span`
  position: absolute;
  bottom: 100px;
`;

const ABVoteImgWrapper = styled.div`
  border-radius: 20px 20px 0 0;
  background: ${(props) => props.theme.colors.basic.black};
  height: 160px;
`;

const ABVoteImg = styled.div<{ imageSrc: string }>`
  border-radius: 20px 20px 0 0;
  background: ${(props) => `url(${props.imageSrc}) `};
  background-size: cover;
  height: 160px;
`;

const ABVoteContentWrapper = styled.div<{ isEnd: boolean; isWinner: boolean }>`
  z-index: ${(props) => (props.isEnd ? 3 : 0)};
  border-radius: 0 0 20px 20px;
  background-color: ${(props) =>
    props.isWinner
      ? props.theme.colors.chart.point_up_100
      : props.theme.colors.grayscale.gray_200};
  padding: 15px;
  height: 50px;
  color: ${(props) => (props.isWinner ? props.theme.colors.basic.white : '')};
  font-size: 12px;
`;

const ABVoteType = styled.span`
  display: inline-block;
  margin-right: 10px;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.basic.white};
  padding-top: 3px;
  width: 20px;
  height: 20px;
  text-align: center;
  font-size: 13px;
  font-weight: 500;
`;

const ABVoteContent = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

const ABVoteResult = styled.div<{ isEnd: boolean }>`
  position: absolute;
  top: 0;
  left: 7%;
  z-index: ${(props) => (props.isEnd ? 3 : 0)};
  line-height: 11.4;
`;

const ABVoteResultPercent = styled.span<{ isWinner: boolean }>`
  margin-right: 10px;
  color: ${(props) => props.theme.colors.basic.white};
  font-size: 24px;
  font-weight: 600;
`;

const ABVoteResultVoter = styled.span`
  color: ${(props) => props.theme.colors.basic.white};
  font-size: 13px;
  font-weight: 300;
`;

const ABWinnerType = styled.span`
  display: inline-block;
  margin-right: 10px;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.basic.white};
  padding-top: 3px;
  width: 20px;
  height: 20px;
  text-align: center;
  color: ${(props) => props.theme.colors.chart.point_up_100};
  font-size: 13px;
  font-weight: 500;
`;

export {
  ABVoteItemWrapper,
  ABVoteImgWrapper,
  ABVoteImg,
  ABVoteWinnerMark,
  ABVoteFilter,
  ABVoteContentWrapper,
  ABVoteType,
  ABVoteContent,
  ABVoteResult,
  ABVoteResultPercent,
  ABVoteResultVoter,
  ABWinnerType,
};
