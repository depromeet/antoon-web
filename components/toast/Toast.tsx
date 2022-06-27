import { AlertLine } from '@assets/icons';
import { StockDownIcon, StockUpIcon } from '@assets/icons/StockIcon';
import { Toast } from '@stores/toast';
import themes from '@styles/themes/themes';
import { useEffect, useState } from 'react';
import {
  ToastMessageWrapper,
  ToastMessage,
  ToastMessageContent,
  ToastCheckMark,
} from './Toast.style';

function Toast(props: Toast) {
  const { bottom, duration, joinLeaveStatus } = props;
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const setExistTimeout = setTimeout(() => {
      setIsClosing(true);
      clearTimeout(setExistTimeout);
    }, duration ?? 1000);
  });

  return (
    <ToastMessageWrapper bottom={bottom} isClosing={isClosing}>
      <ToastMessage status={joinLeaveStatus}>
        {joinLeaveStatus === 'JOIN' && (
          <>
            <StockUpIcon
              fill={themes.colors.secondary.red}
              stroke={themes.colors.secondary.red}
            />
            <ToastMessageContent>툰툰 탑승 완료!</ToastMessageContent>
          </>
        )}
        {joinLeaveStatus === 'LEAVE' && (
          <>
            <StockDownIcon
              fill={themes.colors.secondary.blue}
              stroke={themes.colors.secondary.blue}
            />
            <ToastMessageContent>툰툰 하차 완료!</ToastMessageContent>
          </>
        )}
        {(joinLeaveStatus === 'JOINED' || joinLeaveStatus === 'LEAVED') && (
          <>
            <ToastCheckMark status={joinLeaveStatus}> ✓ </ToastCheckMark>
            내일 다시 투표할 수 있어요!
          </>
        )}
        {joinLeaveStatus === 'VOTING' && <> ✓ 투표를 완료했어요!🗳</>}
        {joinLeaveStatus === 'VOTED' && (
          <>
            <AlertLine /> 이미 투표를 완료했어요.
          </>
        )}
        {joinLeaveStatus === 'VOTE-NO-SELECT' && (
          <>
            <AlertLine />
            선택항목을 골라주세요.
          </>
        )}
      </ToastMessage>
    </ToastMessageWrapper>
  );
}

export default Toast;
