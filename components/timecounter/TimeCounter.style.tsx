import styled from '@emotion/styled';

const StockTimer = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  justify-content: center;
  transition: all 0.5s;
  opacity: 0.98;
  border-radius: 15px;
  background: ${(props) => props.theme.colors.grayscale.gray_900};
  width: 50vw;
  min-width: 205px;
  max-width: 330px;
  height: 35px;
`;

const TimerCount = styled.p`
  line-height: 35px;
  color: ${(props) => props.theme.colors.basic.white};
  font-size: 1.1rem;
`;

export { StockTimer, TimerCount };
