import styled from '@emotion/styled';

const ChoiceVoteItemWrapper = styled.div`
  position: relative;
  margin-top: 20px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.grayscale.gray_200};
  width: 100%;
  height: 100%;
`;

const ChoiceVoteFilter = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0.5;
  z-index: 2;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.chart.point_down_100};
  cursor: pointer;
  width: 100%;
  height: 100%;
  text-align: center;
  -webkit-tap-highlight-color: transparent;
`;

const ChoiceVoteContentWrapper = styled.div`
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

export {
  ChoiceVoteItemWrapper,
  ChoiceVoteFilter,
  ChoiceVoteContentWrapper,
  ChoiceVoteType,
  ChoiceVoteContent,
};
