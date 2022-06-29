import { useState, useEffect } from 'react';

import useCountdown from '@hooks/useCountdown';

import { TimerWrap } from './CharacterPageCountDown.style';

function CharacterPageCountDown({ endTime }: { endTime: string }) {
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
    <TimerWrap>
      {!isHide
        ? `투표 종료까지 ${hours}시간 : ${minutes}분 : ${seconds}초 남음`
        : '투표 종료'}
    </TimerWrap>
  );
}

export default CharacterPageCountDown;
