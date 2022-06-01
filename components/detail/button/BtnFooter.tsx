import { countDownFormatter } from '@utils/date-util';
import { MouseEventHandler, useEffect, useState } from 'react';
import {
  BtnWrapper,
  FilterBlur,
  StockTimer,
  TimerCount,
  UpDownBlockInfo,
  UpDownBlockTitle,
  UpDownBlockWrapper,
} from './BtnFooter.style';
import UpDownBtn from './UpDownBtn';
import useCountdown from '@hooks/useCountdown';
import { StockDownIcon, StockUpIcon } from '@assets/icons/StockIcon';

function BtnFooter({
  onOpen,
  onJoinLeave,
  joinLeaveStatus,
  joinCount,
  leaveCount,
}: {
  onOpen: MouseEventHandler<HTMLButtonElement>;
  // eslint-disable-next-line @typescript-eslint/ban-types
  onJoinLeave: Function;
  joinLeaveStatus: string;
  joinCount: number;
  leaveCount: number;
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
      {joinLeaveStatus === 'NONE' && (
        <>
          <UpDownBtn
            upDownStatus="JOIN"
            upDownUser={joinCount}
            onOpen={onOpen}
            onJoinLeave={onJoinLeave}
          />
          <UpDownBtn
            upDownStatus="LEAVE"
            upDownUser={leaveCount}
            onOpen={onOpen}
            onJoinLeave={onJoinLeave}
          />
        </>
      )}
      {joinLeaveStatus !== 'NONE' && (
        <>
          <UpDownBlockWrapper status={joinLeaveStatus}>
            <UpDownBlockTitle>
              {joinLeaveStatus === 'JOINED'
                ? <StockUpIcon /> + '탑승 중!'
                : <StockDownIcon /> + '하차 중...'}
            </UpDownBlockTitle>
            <UpDownBlockInfo>
              {joinLeaveStatus === 'JOINED'
                ? { joinCount } + '개미 탑승😎'
                : { joinCount } + '하차 😭'}
            </UpDownBlockInfo>
          </UpDownBlockWrapper>
        </>
      )}
    </BtnWrapper>
  );
}

export default BtnFooter;
