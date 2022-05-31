import { MouseEventHandler, useEffect, useState } from 'react';
import {
  BtnWrapper,
  FilterBlur,
  StockTimer,
  TimerCount,
} from './BtnFooter.style';
import UpDownBtn from './UpDownBtn';

const useCountdown = (targetDate: Date) => {
  const countDownDate = targetDate.getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime(),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown: number) => {
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [hours, minutes, seconds];
};

function BtnFooter({
  onOpen,
  onJoinLeave,
}: {
  onOpen: MouseEventHandler<HTMLButtonElement>;
  onJoinLeave: any;
}) {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  const targetTime = new Date();
  targetTime.setMonth(targetTime.getMonth() + 1);
  targetTime.setHours(0, 0, 0);
  const [hours, minutes, seconds] = useCountdown(targetTime);
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
