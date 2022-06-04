import { StockDownIcon, StockUpIcon } from '@assets/icons/StockIcon';
import themes from '@styles/themes/themes';
import {
  ToastMessageWrapper,
  ToastMessage,
  ToastMessageContent,
  ToastCheckMark,
} from './Toast.style';

interface Props {
  joinLeaveStatus: string;
  toastAnimation: boolean;
}

function Toast(props: Props) {
  return (
    <ToastMessageWrapper toastAnimation={props.toastAnimation}>
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
