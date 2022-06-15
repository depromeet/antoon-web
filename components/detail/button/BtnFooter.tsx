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
import Toast from './Toast';
import { RecommendationStatus } from '@_types/webtoon-type';

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
  joinLeaveStatus: RecommendationStatus;
  joinCount: number;
  leaveCount: number;
}) {
  const [isSSR, setIsSSR] = useState(true);
  const [ToastStatus, setToastStatus] = useState(false);

  useEffect(() => {
    setIsSSR(false);
    if (ToastStatus) {
      setTimeout(() => setToastStatus(false), 1500);
    }
  }, [ToastStatus]);

  const onToast = () => {
    setToastStatus(true);
  };

  const [hours, minutes, seconds] = useCountdown(countDownFormatter());
  return (
    <BtnWrapper>
      <FilterBlur></FilterBlur>
      {!ToastStatus && (
        <StockTimer>
          <TimerCount>
            {!isSSR &&
              `투표 종료까지 시간 ${hours}시간: ${minutes}분 : ${seconds}초 남음`}
          </TimerCount>
        </StockTimer>
      )}
      {ToastStatus && (
        <Toast
          joinLeaveStatus={joinLeaveStatus}
          toastAnimation={ToastStatus}
        ></Toast>
      )}
      {joinLeaveStatus === 'NONE' && (
        <>
          <UpDownBtn
            upDownStatus={'JOIN'}
            upDownUser={joinCount}
            onOpen={onOpen}
            onJoinLeave={onJoinLeave}
          />
          <UpDownBtn
            upDownStatus={'LEAVE'}
            upDownUser={joinCount}
            onOpen={onOpen}
            onJoinLeave={onJoinLeave}
          />
          ;
        </>
      )}
      {joinLeaveStatus !== 'NONE' && (
        <>
          <UpDownBlockWrapper status={joinLeaveStatus} onClick={onToast}>
            <UpDownBlockTitle>
              {joinLeaveStatus === 'JOINED' ? (
                <>
                  <StockUpIcon /> {'탑승 중!'}
                </>
              ) : (
                <>
                  <StockDownIcon /> {'하차 중...'}
                </>
              )}
            </UpDownBlockTitle>
            <UpDownBlockInfo>
              {joinLeaveStatus === 'JOINED'
                ? joinCount + ' 개미 탑승😎'
                : leaveCount + ' 개미 하차 😭'}
            </UpDownBlockInfo>
          </UpDownBlockWrapper>
        </>
      )}
    </BtnWrapper>
  );
}

export default BtnFooter;
