import styled from '@emotion/styled';

const StockTimer = styled.div`
  position: absolute;
  top: 0;
  transition: all 0.5s;
  opacity: 0.98;
  border-radius: 15px;
  background: ${(props) => props.theme.colors.grayscale.gray_900};
  width: 60vw;
  max-width: 330px;
  height: 35px;
`;

const TimerCount = styled.p`
  position: flex;
  text-align: center;
  line-height: 35px;
  color: ${(props) => props.theme.colors.basic.white};
  font-family: Pretendard;
  font-size: 11px;
  font-weight: 400;
  font-style: normal;
`;

export { StockTimer, TimerCount };
