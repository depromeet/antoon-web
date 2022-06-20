import styled from '@emotion/styled';

const VoteHeaderWrapper = styled.article`
  margin-top: 20px;
  border-radius: 17px;
  background: ${(props) => props.theme.colors.basic.black};
  padding: 0.4rem 0;
  height: auto;
  color: ${(props) => props.theme.colors.basic.white};
`;
const VoteTitle = styled.h2`
  padding-top: 10px;
  padding-right: 30px;
  padding-left: 30px;
  font-size: 16px;
  font-weight: 700;
`;
const VoteTag = styled.div<{ category: string }>`
  display: flex;
  padding-top: 20px;
  padding-left: 30px;
  color: ${(props) =>
    props.category === 'ab'
      ? props.theme.colors.chart.point_up_100
      : props.theme.colors.chart.point_down_100};
  font-size: 11px;
  font-weight: 600;
`;

const VoteEndTimer = styled.p`
  padding-top: 10px;
  padding-bottom: 20px;
  padding-left: 30px;
  color: ${(props) => props.theme.colors.grayscale.gray_500};
  font-size: 12px;
  font-weight: 400;
`;

const VoteEndTimerTitle = styled.span`
  color: ${(props) => props.theme.colors.grayscale.gray_700};
`;

const VoteEndTimerContent = styled.span`
  margin: 0 4px;
  font-weight: 700;
`;

export {
  VoteHeaderWrapper,
  VoteTitle,
  VoteTag,
  VoteEndTimer,
  VoteEndTimerTitle,
  VoteEndTimerContent,
};
