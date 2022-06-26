import useCountdown from '@hooks/useCountdown';
import { useEffect, useState } from 'react';
import { StockTimer, TimerCount } from './TimeCounter.style';

/**
 * @title 투표 종료 시간 컴포넌트
 * @param {endTime} 투표 종료 시간 @type {string | null}
 * @default {now까지시간}
 * @returns {component}
 */
function TimeCounter({ endTime }: { endTime: string }) {
  const [days, hours, minutes, seconds] = useCountdown(endTime);
  const [isHide, setIsHide] = useState(false);

  useEffect(() => {
    if (hours === 0 && minutes === 0 && seconds === 0) {
      setIsHide(true);
    } else {
      setIsHide(false);
    }
  }, [hours, minutes, seconds]);

  return (
    <StockTimer>
      <TimerCount>
        {!isHide
          ? `투표 종료까지 ${hours}시간 : ${minutes}분 : ${seconds}초 남음`
          : '투표 종료'}
      </TimerCount>
    </StockTimer>
  );
}

TimeCounter.defaultProps = {
  endTime: '',
};

export default TimeCounter;
