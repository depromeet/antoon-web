import { StockTimer, TimerCount } from './TimeCounter.style';

interface Props {
  hours: number;
  minutes: number;
  seconds: number;
}

function TimeCounter(props: Props) {
  return (
    <StockTimer>
      <TimerCount>
        투표 종료까지 시간 {props.hours}시간: {props.minutes}분 :{props.seconds}
        초 남음
      </TimerCount>
    </StockTimer>
  );
}

export default TimeCounter;
