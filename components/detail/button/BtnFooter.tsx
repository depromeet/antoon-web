import { countDownFormatter } from '@utils/date-util';
import { MouseEventHandler, useEffect, useState } from 'react';
import {
  BtnWrapper,
  FilterBlur,
  StockTimer,
  TimerCount,
} from './BtnFooter.style';
import UpDownBtn from './UpDownBtn';
import useCountdown from '@hooks/useCountdown';

function BtnFooter({
  onOpen,
  onJoinLeave,
}: {
  onOpen: MouseEventHandler<HTMLButtonElement>;
  // eslint-disable-next-line @typescript-eslint/ban-types
  onJoinLeave: Function;
}) {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  const [hours, minutes, seconds] = useCountdown(countDownFormatter());
  return (
    <BtnWrapper>
      <FilterBlur></FilterBlur>
      <StockTimer>
        <TimerCount>
          {!isSSR &&
            `투표 종료까지 시간 ${hours}시간: ${minutes}분 : ${seconds}초 남음`}
        </TimerCount>
      </StockTimer>
      <UpDownBtn
        upDownStatus="JOIN"
        upDownUser={120}
        onOpen={onOpen}
        onJoinLeave={onJoinLeave}
      />
      <UpDownBtn
        upDownStatus="LEAVE"
        upDownUser={280}
        onOpen={onOpen}
        onJoinLeave={onJoinLeave}
      />
    </BtnWrapper>
  );
}

export default BtnFooter;
