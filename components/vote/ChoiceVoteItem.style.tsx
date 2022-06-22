import styled from '@emotion/styled';

const ChoiceVoteItemWrapper = styled.div`
  position: relative;
  margin-top: 20px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.grayscale.gray_200};
  width: 100%;
  height: 100%;
`;

const ChoiceVoteFilter = styled.div<{
  isEnd: boolean;
  isWinner: boolean;
  dataWidth: number;
}>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: ${(props) => (props.isWinner ? 0.8 : 0.3)};
  z-index: 2;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.chart.point_down_100};
  cursor: pointer;
  width: ${(props) => props.dataWidth}%;
  height: 100%;
  text-align: center;
  -webkit-tap-highlight-color: transparent;
`;

const ChoiceVoteResult = styled.div<{ isEnd: boolean }>`
  position: relative;
  z-index: ${(props) => (props.isEnd ? 3 : 0)};
`;

const ChoiceVoteResultPercent = styled.span<{ isWinner: boolean }>`
  position: absolute;
  top: 10px;
  right: 5%;
  color: ${(props) =>
    props.isWinner
      ? props.theme.colors.grayscale.gray_700
      : props.theme.colors.grayscale.gray_600};
  font-size: 13.5px;
  font-weight: ${(props) => (props.isWinner ? 700 : 500)};
`;

const ChoiceVoteResultVoter = styled.span`
  position: absolute;
  top: 30px;
  right: 5%;
  color: ${(props) => props.theme.colors.grayscale.gray_600};
  font-size: 9px;
  font-weight: 300;
`;

const ChoiceVoteContentWrapper = styled.div<{ isEnd: boolean }>`
  position: relative;
  z-index: ${(props) => (props.isEnd ? '3' : '0')};
  padding: 15px;
  height: 50px;
  font-size: 12px;
`;

const ChoiceVoteType = styled.span`
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

const ChoiceVoteContent = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

const ChoiceWinnerType = styled.span`
  display: inline-block;
  margin-right: 10px;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.basic.white};
  padding-top: 3px;
  width: 20px;
  height: 20px;
  text-align: center;
  color: ${(props) => props.theme.colors.chart.point_down_100};
  font-size: 13px;
  font-weight: 500;
`;

export {
  ChoiceVoteItemWrapper,
  ChoiceVoteFilter,
  ChoiceVoteResult,
  ChoiceVoteResultPercent,
  ChoiceVoteResultVoter,
  ChoiceVoteContentWrapper,
  ChoiceVoteType,
  ChoiceVoteContent,
  ChoiceWinnerType,
};
