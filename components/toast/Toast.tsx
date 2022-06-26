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
  const { content, bottom, duration, joinLeaveStatus } = props;
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const setExistTimeout = setTimeout(() => {
      setIsClosing(true);
      clearTimeout(setExistTimeout);
    }, duration ?? 1000);
  });

  return (
    <ToastMessageWrapper bottom={bottom} isClosing={isClosing}>
      <ToastMessage status={props.joinLeaveStatus}>
        {props.joinLeaveStatus === 'JOIN' ? (
          <>
            <StockUpIcon
              fill={themes.colors.secondary.red}
              stroke={themes.colors.secondary.red}
            />
            <ToastMessageContent>툰툰 탑승 완료!</ToastMessageContent>
          </>
        ) : props.joinLeaveStatus === 'LEAVE' ? (
          <>
            <StockDownIcon
              fill={themes.colors.secondary.blue}
              stroke={themes.colors.secondary.blue}
            />
            <ToastMessageContent>툰툰 하차 완료!</ToastMessageContent>
          </>
        ) : (
          <>
            <ToastCheckMark status={props.joinLeaveStatus}> ✓ </ToastCheckMark>
            내일 다시 투표할 수 있어요!
          </>
        )}
      </ToastMessage>
    </ToastMessageWrapper>
  );
}

export default Toast;
