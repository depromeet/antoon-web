import { MouseEventHandler, useEffect, useState } from 'react';
import {
  BtnWrapper,
  FilterBlur,
  UpDownBlockInfo,
  UpDownBlockTitle,
  UpDownBlockWrapper,
} from './BtnFooter.style';
import UpDownBtn from './UpDownBtn';
import { StockDownIcon, StockUpIcon } from '@assets/icons/StockIcon';
import { RecommendationStatus } from '@_types/webtoon-type';
import TimeCounter from '@components/timecounter/TimeCounter';
import { useToast } from '@hooks/useToast';

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
  const { fireToast } = useToast();

  useEffect(() => {
    setIsSSR(false);
  }, []);

  return (
    <BtnWrapper>
      <FilterBlur></FilterBlur>
      {!isSSR && <TimeCounter />}

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
          <UpDownBlockWrapper
            status={joinLeaveStatus}
            onClick={() =>
              fireToast({ content: '안녕', joinLeaveStatus: 'JOINED' })
            }
          >
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
