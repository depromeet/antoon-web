import styled from '@emotion/styled';

const ABVoteItemWrapper = styled.div`
  position: relative;
  margin-top: 20px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.grayscale.gray_200};
  width: 100%;
  height: 100%;
`;

const ABVoteFilter = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0.5;
  z-index: 2;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.chart.point_up_100};
  cursor: pointer;
  width: 100%;
  height: 100%;
  text-align: center;
  -webkit-tap-highlight-color: transparent;
`;

const ABVoteImg = styled.div<{ imageSrc: string }>`
  border-radius: 20px 20px 0 0;
  background: ${(props) => `url(${props.imageSrc}) `};
  background-size: cover;
  height: 160px;
`;
const ABVoteContentWrapper = styled.div`
  padding: 15px;
  height: 50px;
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

export {
  ABVoteItemWrapper,
  ABVoteImg,
  ABVoteFilter,
  ABVoteContentWrapper,
  ABVoteType,
  ABVoteContent,
};
